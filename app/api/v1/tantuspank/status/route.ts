import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    // The current latest version available
    latest_version: "1.0.0",
    // Any version below this is permanently blocked from running
    min_required_version: "1.0.0",
    // The direct download link to seamlessly upgrade
    download_url: "https://tantu-core.vercel.app/api/download/tantuspank",
    // The message to show in the C# app if an update is forced
    update_message: "A critical update is required. Please download the latest version to continue using TantuSpank."
  });
}
