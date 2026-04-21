import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { rateLimit } from '@/lib/rate-limit';

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get('x-forwarded-for') || '127.0.0.1';
    const ip = forwardedFor.split(',')[0].trim();
    
    // Rate limit: Max 5 signs-up per IP every 15 minutes (900000 ms)
    const { success } = rateLimit(`newsletter_${ip}`, 5, 900000);
    
    if (!success) {
      return NextResponse.json({ success: false, message: 'Too many requests. Try again later.' }, { status: 429 });
    }

    const { email } = await request.json();

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      return NextResponse.json({ success: false, message: 'Invalid email address' }, { status: 400 });
    }

    const supabase = await createClient();

    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email });

    if (error) {
      console.error('[Newsletter ERROR]:', error.message);
      return NextResponse.json({ success: false, message: 'Subscription failed' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Newsletter Internal Error]:', err);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
