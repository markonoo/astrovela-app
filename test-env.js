// Test what environment variables the server sees
require('dotenv').config({ path: '.env.local' });

console.log('=== Environment Variables Check ===\n');
console.log('ADMIN_PASSWORD_HASH:', process.env.ADMIN_PASSWORD_HASH ? `${process.env.ADMIN_PASSWORD_HASH.substring(0, 20)}...` : 'NOT SET');
console.log('ADMIN_JWT_SECRET:', process.env.ADMIN_JWT_SECRET ? 'SET' : 'NOT SET');
console.log('CSRF_SECRET:', process.env.CSRF_SECRET ? 'SET' : 'NOT SET');
console.log('ADMIN_2FA_SECRET:', process.env.ADMIN_2FA_SECRET ? 'SET' : 'NOT SET');
console.log('\n=== Password Verification Test ===\n');

const bcrypt = require('bcrypt');
const testPassword = 'AdminSecure2024!';
const hash = process.env.ADMIN_PASSWORD_HASH;

if (hash) {
  bcrypt.compare(testPassword, hash, (err, result) => {
    if (err) {
      console.error('Error:', err.message);
    } else {
      console.log(`Testing password: "${testPassword}"`);
      console.log(`Against hash: ${hash.substring(0, 30)}...`);
      console.log(`Result: ${result ? '✅ MATCH' : '❌ NO MATCH'}`);
      
      if (!result) {
        console.log('\n⚠️  The password does not match the hash!');
        console.log('This means either:');
        console.log('1. The hash in .env.local is wrong');
        console.log('2. You need to use a different password');
      }
    }
  });
} else {
  console.log('❌ ADMIN_PASSWORD_HASH is not set in environment!');
}







