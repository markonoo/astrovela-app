/**
 * Verify all 144 zodiac compatibility combinations are present
 */

const fs = require('fs');

const content = fs.readFileSync('lib/zodiac-compatibility-complete.ts', 'utf8');

const signs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];

console.log('\n🔍 Verifying Zodiac Compatibility Matrix\n');
console.log('='.repeat(70));

let totalFound = 0;
let missing = [];

// Check each combination
for (const sign1 of signs) {
  let signCount = 0;
  
  for (const sign2 of signs) {
    // Look for the pattern: sign1: {\n    sign2: {
    const pattern = `  ${sign1}: {[\\s\\S]*?${sign2}: {`;
    const regex = new RegExp(pattern);
    
    if (regex.test(content)) {
      signCount++;
      totalFound++;
    } else {
      missing.push(`${sign1} + ${sign2}`);
    }
  }
  
  const status = signCount === 12 ? '✅' : '❌';
  console.log(`${status} ${sign1.toUpperCase().padEnd(12)} : ${signCount}/12 combinations`);
}

console.log('='.repeat(70));
console.log(`\n📊 RESULTS:`);
console.log(`   Total combinations: ${totalFound}/144`);
console.log(`   Success rate: ${((totalFound / 144) * 100).toFixed(1)}%`);

if (totalFound === 144) {
  console.log('\n🎉 SUCCESS! All 144 combinations are present!\n');
  process.exit(0);
} else {
  console.log(`\n❌ Missing ${144 - totalFound} combinations:`);
  missing.forEach(combo => console.log(`   - ${combo}`));
  console.log('');
  process.exit(1);
}
