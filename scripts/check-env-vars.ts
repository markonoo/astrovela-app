/**
 * Environment Variables Diagnostic Script
 * 
 * Run this to check if all required environment variables are set correctly
 * 
 * Usage:
 *   npx tsx scripts/check-env-vars.ts
 */

import * as dotenv from 'dotenv'
import { resolve } from 'path'

// Load .env.local file
dotenv.config({ path: resolve(process.cwd(), '.env.local') })

interface EnvCheck {
  name: string
  required: boolean
  category: string
  format?: RegExp
  formatDescription?: string
}

const envChecks: EnvCheck[] = [
  // Database
  {
    name: 'DATABASE_URL',
    required: true,
    category: 'Database',
    format: /^postgresql:\/\//,
    formatDescription: 'Should start with postgresql://'
  },
  
  // Supabase
  {
    name: 'NEXT_PUBLIC_SUPABASE_URL',
    required: true,
    category: 'Supabase',
    format: /^https:\/\/.*\.supabase\.co$/,
    formatDescription: 'Should be https://[project-ref].supabase.co'
  },
  {
    name: 'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    required: true,
    category: 'Supabase',
    format: /^eyJ/,
    formatDescription: 'Should start with eyJ (JWT format)'
  },
  
  // Admin Security
  {
    name: 'ADMIN_PASSWORD_HASH',
    required: true,
    category: 'Admin Security',
    format: /^\$2[aby]\$\d{2}\$/,
    formatDescription: 'Should be a bcrypt hash starting with $2b$'
  },
  {
    name: 'ADMIN_JWT_SECRET',
    required: true,
    category: 'Admin Security',
    format: /.{32,}/,
    formatDescription: 'Should be at least 32 characters long'
  },
  {
    name: 'CSRF_SECRET',
    required: true,
    category: 'Admin Security',
    format: /.{32,}/,
    formatDescription: 'Should be at least 32 characters long'
  },
  {
    name: 'ADMIN_2FA_SECRET',
    required: false,
    category: 'Admin Security (Optional)',
    format: /^[A-Z2-7]{32}$/,
    formatDescription: 'Should be a 32-character base32 string (if using 2FA)'
  },
  
  // Astrology API
  {
    name: 'USER_ID',
    required: true,
    category: 'Astrology API',
    format: /^\d+$/,
    formatDescription: 'Should be a numeric ID'
  },
  {
    name: 'API_KEY',
    required: true,
    category: 'Astrology API',
    format: /.{10,}/,
    formatDescription: 'Should be at least 10 characters'
  },
  
  // App Configuration
  {
    name: 'NEXT_PUBLIC_APP_URL',
    required: true,
    category: 'App Configuration',
    format: /^https?:\/\//,
    formatDescription: 'Should be a valid URL'
  },
]

console.log('\n🔍 Environment Variables Diagnostic\n')
console.log('=' .repeat(80))

let allPassed = true
let criticalFailed = false

const categories = [...new Set(envChecks.map(c => c.category))]

for (const category of categories) {
  console.log(`\n📁 ${category}`)
  console.log('-'.repeat(80))
  
  const checks = envChecks.filter(c => c.category === category)
  
  for (const check of checks) {
    const value = process.env[check.name]
    const isSet = !!value
    const status = isSet ? '✅' : (check.required ? '❌' : '⚠️')
    
    console.log(`\n${status} ${check.name}`)
    
    if (!isSet) {
      if (check.required) {
        console.log(`   ❌ NOT SET (REQUIRED)`)
        allPassed = false
        criticalFailed = true
      } else {
        console.log(`   ⚠️  Not set (optional)`)
      }
      continue
    }
    
    // Check format if provided
    if (check.format && value) {
      const formatValid = check.format.test(value)
      if (!formatValid) {
        console.log(`   ⚠️  Format may be incorrect`)
        console.log(`   Expected: ${check.formatDescription}`)
        console.log(`   Current: ${value.substring(0, 50)}${value.length > 50 ? '...' : ''}`)
        allPassed = false
      } else {
        console.log(`   ✅ Set and format looks correct`)
        // Show preview (first 20 chars + ... + last 10 chars)
        if (value.length > 40) {
          const preview = `${value.substring(0, 20)}...${value.substring(value.length - 10)}`
          console.log(`   Preview: ${preview}`)
        }
      }
    } else {
      console.log(`   ✅ Set`)
    }
  }
}

console.log('\n' + '='.repeat(80))
console.log('\n📊 Summary\n')

const totalChecks = envChecks.length
const requiredChecks = envChecks.filter(c => c.required).length
const setChecks = envChecks.filter(c => !!process.env[c.name]).length
const setRequiredChecks = envChecks.filter(c => c.required && !!process.env[c.name]).length

console.log(`Total variables checked: ${totalChecks}`)
console.log(`Required variables: ${requiredChecks}`)
console.log(`Set variables: ${setChecks}/${totalChecks}`)
console.log(`Set required variables: ${setRequiredChecks}/${requiredChecks}`)

if (criticalFailed) {
  console.log('\n❌ CRITICAL: Some required environment variables are missing!')
  console.log('   The application will not work correctly.')
  console.log('\n📝 Action Required:')
  console.log('   1. Copy .env.example to .env.local')
  console.log('   2. Fill in all required values')
  console.log('   3. Run this script again to verify')
  process.exit(1)
} else if (!allPassed) {
  console.log('\n⚠️  WARNING: Some environment variables may have formatting issues.')
  console.log('   The application may work, but double-check the values above.')
  process.exit(0)
} else {
  console.log('\n✅ SUCCESS: All required environment variables are set correctly!')
  console.log('\n🚀 You\'re ready to:')
  console.log('   - Run the development server: npm run dev')
  console.log('   - Deploy to Vercel: vercel --prod')
  process.exit(0)
}


