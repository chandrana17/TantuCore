import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { rateLimit } from '@/lib/rate-limit';

export async function GET(request: Request) {
  try {
    const forwardedFor = request.headers.get('x-forwarded-for') || '127.0.0.1';
    const rawIp = forwardedFor.split(',')[0].trim();
    
    // 1. Validate IP format (simple IPv4/IPv6 check)
    const isValidIP = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/.test(rawIp) || /^[a-fA-F0-9:]+$/.test(rawIp);
    const safeIp = isValidIP ? rawIp.substring(0, 45) : 'invalid_ip'; // IPv6 max len is 45 chars

    // 2. Rate limit downloads: Max 10 requests per IP per hour (3600000 ms)
    const { success } = rateLimit(`download_${safeIp}`, 10, 3600000);

    if (!success) {
      return NextResponse.json({ error: 'Too many download requests. Please try again later.' }, { status: 429 });
    }

    // 3. Get the public URL from GitHub Releases
    const downloadUrl = 'https://github.com/chandrana17/TantuSpank/releases/latest/download/TantuSpank_Setup_v1.0.0.exe';

    const safeUserAgent = (request.headers.get('user-agent') || 'unknown').substring(0, 500);

    // 4. Fire-and-forget tracking (non-blocking so the redirect is instant)
    Promise.resolve().then(async () => {
      try {
        const { error } = await supabaseAdmin.from('downloads_log').insert([
          {
            app_name: 'TantuSpank',
            user_agent: safeUserAgent,
            ip_address: safeIp,
            downloaded_at: new Date().toISOString(),
          }
        ]);
        if (error) {
          console.error('[Telemetry] Failed to log download:', error.message);
        }
      } catch (err) {
        console.error('[Telemetry] Unexpected error:', err);
      }
    });

    // 5. Redirect the user securely (302 Found)
    return NextResponse.redirect(downloadUrl, { status: 302 });
  } catch (error) {
    console.error('[API Error] Error generating download link:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
