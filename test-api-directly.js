// Direct test of password verification logic
require('dotenv').config({ path: '.env.local' });
const bcrypt = require('bcrypt');

const password = 'AdminSecure2024!';
const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

console.log('=== Direct Password Verification Test ===\n');
console.log('Password entered:', password);
console.log('Hash from env:', adminPasswordHash);
console.log('Hash length:', adminPasswordHash ? adminPasswordHash.length : 0);
console.log('Hash starts with $2b$:', adminPasswordHash ? adminPasswordHash.startsWith('$2b$') : false);

if (adminPasswordHash) {
  bcrypt.compare(password, adminPasswordHash).then(result => {
    console.log('\nBcrypt comparison result:', result ? '✅ MATCH' : '❌ NO MATCH');
    
    if (!result) {
      console.log('\n🔍 Debugging:');
      console.log('- Hash format looks correct:', adminPasswordHash.startsWith('$2b$12$'));
      console.log('- Password being tested:', password);
      console.log('- Full hash:', adminPasswordHash);
      
      // Try to generate a new hash and compare
      bcrypt.hash(password, 12).then(newHash => {
        console.log('\n📝 Freshly generated hash for same password:');
        console.log(newHash);
        console.log('\n⚠️  These hashes will be different (bcrypt uses random salt)');
        console.log('But they should both verify the same password.');
      });
    }
  }).catch(err => {
    console.error('Error during bcrypt comparison:', err);
  });
} else {
  console.log('❌ No hash found in environment!');
}






