/**
 * Admin Password Setup Script
 * Generates a bcrypt hash for the admin password
 * 
 * Usage: npx tsx scripts/setup-admin-password.ts
 * Or: npm run setup-admin-password
 */

import { hashPassword } from '../lib/password'
import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function setupAdminPassword() {
  console.log('\n🔐 Admin Password Setup\n')
  console.log('This script will generate a bcrypt hash for your admin password.')
  console.log('The hash will be stored in ADMIN_PASSWORD_HASH environment variable.\n')

  rl.question('Enter admin password: ', async (password) => {
    if (!password || password.length < 8) {
      console.error('\n❌ Error: Password must be at least 8 characters long')
      rl.close()
      process.exit(1)
    }

    try {
      const hash = await hashPassword(password)
      
      console.log('\n✅ Password hash generated successfully!\n')
      console.log('Add this to your .env.local file:')
      console.log('─'.repeat(60))
      console.log(`ADMIN_PASSWORD_HASH=${hash}`)
      console.log('─'.repeat(60))
      console.log('\n⚠️  Important:')
      console.log('  - Never commit this hash to git')
      console.log('  - Store it securely in your environment variables')
      console.log('  - For production, set it in Vercel/deployment platform\n')
      
      rl.close()
      process.exit(0)
    } catch (error) {
      console.error('\n❌ Error generating password hash:', error)
      rl.close()
      process.exit(1)
    }
  })
}

setupAdminPassword()






