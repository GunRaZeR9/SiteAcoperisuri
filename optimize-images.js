#!/usr/bin/env node

/**
 * Image Optimization Helper
 * 
 * This script helps convert and optimize images for better web performance.
 * Run: node optimize-images.js
 */

const fs = require('fs');
const path = require('path');

console.log('📸 Image Optimization Helper\n');

const TODO_ITEMS = [
  {
    title: '1. Install Image Optimization Tool',
    commands: [
      'npm install -g @squoosh/cli',
      '# Alternative: npm install -g sharp-cli'
    ]
  },
  {
    title: '2. Convert Hero Background to WebP',
    description: 'This is the BIGGEST performance win (LCP improvement)',
    commands: [
      'squoosh-cli --webp auto frontend/public/images/hero-bg.png -d frontend/public/images/',
      '',
      '# Create mobile version (768px width)',
      'squoosh-cli --resize \'{"enabled":true,"width":768}\' --webp auto frontend/public/images/hero-bg.png -s "-mobile" -d frontend/public/images/'
    ],
    files_to_update: [
      'frontend/src/app/pages/home/hero-section/hero-section.component.scss'
    ]
  },
  {
    title: '3. Optimize All Service Images',
    description: 'Compress images in services folder',
    commands: [
      'cd frontend/public/images/services',
      'squoosh-cli --webp auto *.{png,jpg,jpeg}',
      '',
      '# Or use online tool: https://tinypng.com'
    ]
  },
  {
    title: '4. Optimize Portfolio Images',
    description: 'Compress portfolio images',
    commands: [
      'cd frontend/public/images/portfolio',
      'squoosh-cli --webp auto *.{png,jpg,jpeg}',
      'squoosh-cli --resize \'{"enabled":true,"width":800}\' --webp auto *.{png,jpg,jpeg}'
    ]
  },
  {
    title: '5. Update Image References',
    description: 'Change .png/.jpg to .webp in component files',
    example: `
Before: image: '/images/service.png'
After:  image: '/images/service.webp'
    `
  }
];

console.log('='.repeat(70));
console.log('IMAGE OPTIMIZATION GUIDE');
console.log('='.repeat(70));
console.log('\n📊 Current Performance Impact:\n');
console.log('  • Hero background: ~2-3s LCP improvement');
console.log('  • Service images:  ~0.5-1s LCP improvement');
console.log('  • Portfolio images: Reduced CLS, faster loading');
console.log('\n' + '='.repeat(70) + '\n');

TODO_ITEMS.forEach((item, index) => {
  console.log(`\n${item.title}`);
  console.log('-'.repeat(70));
  
  if (item.description) {
    console.log(`ℹ️  ${item.description}\n`);
  }
  
  if (item.commands) {
    console.log('Run these commands:\n');
    item.commands.forEach(cmd => {
      if (cmd.trim().startsWith('#')) {
        console.log(`  ${cmd}`);
      } else if (cmd === '') {
        console.log('');
      } else {
        console.log(`  $ ${cmd}`);
      }
    });
  }
  
  if (item.files_to_update) {
    console.log('\n📝 Files to update:');
    item.files_to_update.forEach(file => {
      console.log(`  • ${file}`);
    });
  }
  
  if (item.example) {
    console.log(`\n📋 Example:${item.example}`);
  }
});

console.log('\n' + '='.repeat(70));
console.log('\n✅ After optimization:');
console.log('  1. Run: npm run build');
console.log('  2. Test: npx http-server dist/frontend/browser -p 8080');
console.log('  3. Check: lighthouse http://localhost:8080 --view\n');
console.log('='.repeat(70));
console.log('\n🎯 Target: Mobile Score 90+, LCP < 2.5s\n');

// Check if hero-bg exists
const heroPath = path.join(__dirname, 'frontend', 'public', 'images', 'hero-bg.png');
if (fs.existsSync(heroPath)) {
  const stats = fs.statSync(heroPath);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`\n⚠️  Current hero-bg.png size: ${sizeMB} MB`);
  if (stats.size > 500000) {
    console.log('   This is your BIGGEST performance bottleneck!');
    console.log('   Converting to WebP will reduce size by 60-80%\n');
  }
}
