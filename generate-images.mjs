import sharp from 'sharp';
import fs from 'fs';

async function generateImages() {
  // SVG for favicon (just a T on dark background with purple accent)
  const faviconSvg = `
    <svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" fill="#080A0F" />
      <rect x="24" y="24" width="208" height="208" fill="none" stroke="#E8FF47" stroke-width="8" />
      <text x="128" y="180" font-family="sans-serif" font-size="160" font-weight="bold" fill="#B026FF" text-anchor="middle">T</text>
    </svg>
  `;

  // SVG for OG image
  const ogSvg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="#080A0F" />
      <rect x="40" y="40" width="1120" height="550" fill="none" stroke="#E8FF47" stroke-width="4" stroke-dasharray="20, 10" />
      <text x="600" y="320" font-family="sans-serif" font-size="120" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="10">TANTUCORE</text>
      <text x="600" y="420" font-family="sans-serif" font-size="40" font-weight="bold" fill="#B026FF" text-anchor="middle" letter-spacing="4">Small apps. Real impact.</text>
    </svg>
  `;

  await sharp(Buffer.from(faviconSvg))
    .resize(32, 32)
    .toFile('./public/favicon.ico');

  await sharp(Buffer.from(faviconSvg))
    .resize(180, 180)
    .toFile('./public/apple-touch-icon.png');

  await sharp(Buffer.from(ogSvg))
    .toFile('./public/og-image.png');

  console.log('Images generated successfully!');
}

generateImages().catch(console.error);
