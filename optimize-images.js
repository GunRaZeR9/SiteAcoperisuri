#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * Converts PNG/JPG images to WebP format for better web performance.
 * Run: npm install sharp && node optimize-images.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.log('❌ Sharp is not installed. Run: npm install sharp');
  console.log('\nAfter installing, run this script again: node optimize-images.js\n');
  process.exit(1);
}

const PUBLIC_DIR = path.join(__dirname, 'frontend', 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

async function convertToWebP(inputPath, outputPath, options = {}) {
  try {
    await sharp(inputPath)
      .webp({ quality: options.quality || 80 })
      .toFile(outputPath);
    
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    
    console.log(`  ✅ ${path.basename(outputPath)} (${savings}% smaller)`);
    return true;
  } catch (error) {
    console.log(`  ❌ Failed: ${path.basename(inputPath)} - ${error.message}`);
    return false;
  }
}

async function createResizedWebP(inputPath, outputPath, width, options = {}) {
  try {
    await sharp(inputPath)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality: options.quality || 80 })
      .toFile(outputPath);
    
    const outputStats = fs.statSync(outputPath);
    const sizeKB = (outputStats.size / 1024).toFixed(1);
    
    console.log(`  ✅ ${path.basename(outputPath)} (${width}px, ${sizeKB}KB)`);
    return true;
  } catch (error) {
    console.log(`  ❌ Failed: ${path.basename(outputPath)} - ${error.message}`);
    return false;
  }
}

async function processHeroImage() {
  console.log('\n🖼️  Processing Hero Background Image...\n');
  
  const heroPath = path.join(IMAGES_DIR, 'hero-bg.png');
  
  if (!fs.existsSync(heroPath)) {
    console.log('  ⚠️  hero-bg.png not found, skipping...');
    return;
  }
  
  const stats = fs.statSync(heroPath);
  console.log(`  📁 Original: hero-bg.png (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
  
  // Convert to WebP (full size)
  await convertToWebP(
    heroPath, 
    path.join(IMAGES_DIR, 'hero-bg.webp'),
    { quality: 85 }
  );
  
  // Create mobile version (800px width)
  await createResizedWebP(
    heroPath,
    path.join(IMAGES_DIR, 'hero-bg-mobile.webp'),
    800,
    { quality: 80 }
  );
}

async function processServiceImages() {
  console.log('\n🔧 Processing Service Images...\n');
  
  const servicesDir = path.join(IMAGES_DIR, 'services');
  
  if (!fs.existsSync(servicesDir)) {
    console.log('  ⚠️  services/ folder not found, skipping...');
    return;
  }
  
  const files = fs.readdirSync(servicesDir).filter(f => 
    f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png')
  );
  
  for (const file of files) {
    const inputPath = path.join(servicesDir, file);
    const outputName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const outputPath = path.join(servicesDir, outputName);
    
    await convertToWebP(inputPath, outputPath, { quality: 80 });
  }
  
  console.log(`\n  📊 Processed ${files.length} service images`);
}

async function processPortfolioImages() {
  console.log('\n🏗️  Processing Portfolio Images...\n');
  
  const portfolioDir = path.join(IMAGES_DIR, 'portfolio');
  
  if (!fs.existsSync(portfolioDir)) {
    console.log('  ⚠️  portfolio/ folder not found, skipping...');
    return;
  }
  
  const files = fs.readdirSync(portfolioDir).filter(f => 
    f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png')
  );
  
  for (const file of files) {
    const inputPath = path.join(portfolioDir, file);
    const outputName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const outputPath = path.join(portfolioDir, outputName);
    
    await convertToWebP(inputPath, outputPath, { quality: 80 });
  }
  
  console.log(`\n  📊 Processed ${files.length} portfolio images`);
}

async function main() {
  console.log('='.repeat(70));
  console.log('🚀 IMAGE OPTIMIZATION SCRIPT');
  console.log('='.repeat(70));
  console.log('\nConverting images to WebP format for better web performance...');
  
  await processHeroImage();
  await processServiceImages();
  await processPortfolioImages();
  
  console.log('\n' + '='.repeat(70));
  console.log('\n✅ Image optimization complete!\n');
  console.log('📝 Next steps:');
  console.log('   1. Verify the WebP images look correct');
  console.log('   2. Run: npm run build');
  console.log('   3. Test the site performance');
  console.log('\n💡 Original images are preserved - you can delete them manually if needed.\n');
  console.log('='.repeat(70) + '\n');
}

main().catch(console.error);
