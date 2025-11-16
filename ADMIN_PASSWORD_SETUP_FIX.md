# Admin Password Setup - Environment Variable Fix

## 🐛 Problem

When setting up the admin password hash in `.env.local`, the bcrypt hash contains `$` symbols that Next.js interprets as shell variables, causing the hash to be truncated.

**Example of the issue:**
```env
# ❌ WRONG - This gets truncated to 10 characters
ADMIN_PASSWORD_HASH=$2b$12$MW9odM18YvA6w16yghWNZOexzvplzb2z6iMjGZ0rgR3/6eKYDIcx.
```

---

## ✅ Solution

### For Local Development (`.env.local`)

**Escape the dollar signs with backslashes:**

```env
# ✅ CORRECT - Escape $ symbols with \
ADMIN_PASSWORD_HASH=\$2b\$12\$MW9odM18YvA6w16yghWNZOexzvplzb2z6iMjGZ0rgR3/6eKYDIcx.
```

### For Vercel (Production)

**No escaping needed - paste as-is:**

```env
# ✅ CORRECT - Vercel handles $ symbols correctly
ADMIN_PASSWORD_HASH=$2b$12$MW9odM18YvA6w16yghWNZOexzvplzb2z6iMjGZ0rgR3/6eKYDIcx.
```

---

## 📝 Step-by-Step Setup

### 1. Generate Password Hash

Run the setup script:
```bash
npm run setup-admin-password
```

Enter your desired password when prompted. You'll get output like:
```
✅ Password hash generated successfully!

Password: YourPasswordHere
────────────────────────────────────────────────────────────
ADMIN_PASSWORD_HASH=$2b$12$MW9odM18YvA6w16yghWNZOexzvplzb2z6iMjGZ0rgR3/6eKYDIcx.
────────────────────────────────────────────────────────────
```

### 2. Add to `.env.local` (Local Development)

**Important:** Escape the `$` symbols with `\`:

```env
ADMIN_PASSWORD_HASH=\$2b\$12\$MW9odM18YvA6w16yghWNZOexzvplzb2z6iMjGZ0rgR3/6eKYDIcx.
```

### 3. Add to Vercel (Production)

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variable: `ADMIN_PASSWORD_HASH`
3. Paste the hash **without backslashes**:
   ```
   $2b$12$MW9odM18YvA6w16yghWNZOexzvplzb2z6iMjGZ0rgR3/6eKYDIcx.
   ```
4. Save and redeploy

---

## 🧪 Verify It's Working

### Test Locally

1. Start dev server:
   ```bash
   npm run dev
   ```

2. Visit: `http://localhost:3000/olivialimon-admin/login`

3. Enter your password and 2FA code

4. If successful, you'll be redirected to the admin dashboard

### Check Environment Variable

Run this test script:
```bash
node -e "require('dotenv').config({path:'.env.local'}); console.log('Hash length:', process.env.ADMIN_PASSWORD_HASH?.length, '(should be 60)');"
```

**Expected output:**
```
Hash length: 60 (should be 60)
```

If you see `Hash length: 10` or similar, the escaping is wrong.

---

## 🔍 Debugging

### Problem: "Invalid password" error

**Check 1: Hash length**
```bash
node -e "require('dotenv').config({path:'.env.local'}); console.log('Length:', process.env.ADMIN_PASSWORD_HASH?.length);"
```

- ✅ Should be: `60`
- ❌ If `10` or less: Dollar signs not escaped properly

**Check 2: Hash format**
```bash
node -e "require('dotenv').config({path:'.env.local'}); console.log('Starts with \$2b\$:', process.env.ADMIN_PASSWORD_HASH?.startsWith('\$2b\$'));"
```

- ✅ Should be: `true`
- ❌ If `false`: Dollar signs not escaped properly

**Check 3: Password verification**
```bash
node -e "
const bcrypt = require('bcrypt');
require('dotenv').config({path:'.env.local'});
const password = 'YourPasswordHere';
const hash = process.env.ADMIN_PASSWORD_HASH;
bcrypt.compare(password, hash, (err, result) => {
  console.log('Password matches:', result);
});
"
```

- ✅ Should be: `true`
- ❌ If `false`: Wrong password or hash

---

## 📚 Technical Details

### Why This Happens

1. **Shell Variable Expansion:** In `.env` files, `$` is used for variable substitution
2. **Next.js Processing:** Next.js uses `dotenv` which processes these files
3. **Bcrypt Hash Format:** Bcrypt hashes always contain `$` symbols (e.g., `$2b$12$...`)
4. **Result:** Without escaping, `$2b` gets interpreted as a variable, truncating the hash

### Bcrypt Hash Structure

A bcrypt hash has this format:
```
$2b$12$MW9odM18YvA6w16yghWNZOexzvplzb2z6iMjGZ0rgR3/6eKYDIcx.
│  │  │└─────────────────────────────────────────────────┘
│  │  │                  Salt + Hash (53 chars)
│  │  └─ Cost factor (12 = 2^12 iterations)
│  └─ Minor version
└─ Algorithm identifier
```

Total length: **60 characters**

---

## 🔐 Security Notes

1. **Never commit `.env.local`** - It's in `.gitignore` for a reason
2. **Use strong passwords** - Minimum 12 characters, mix of letters, numbers, symbols
3. **Keep password safe** - Store in password manager
4. **Rotate regularly** - Change password every 90 days
5. **Use 2FA** - Always enable two-factor authentication (mandatory in production)

---

## ✅ Complete Example

### `.env.local` File

```env
# Database
DATABASE_URL=postgresql://user:pass@host:5432/db

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...

# Admin Security (NOTE: Escape $ symbols with \)
ADMIN_PASSWORD_HASH=\$2b\$12\$MW9odM18YvA6w16yghWNZOexzvplzb2z6iMjGZ0rgR3/6eKYDIcx.
ADMIN_JWT_SECRET=your-jwt-secret-here
CSRF_SECRET=your-csrf-secret-here
ADMIN_2FA_SECRET=your-2fa-secret-here

# Other variables...
```

### Vercel Environment Variables

```
ADMIN_PASSWORD_HASH = $2b$12$MW9odM18YvA6w16yghWNZOexzvplzb2z6iMjGZ0rgR3/6eKYDIcx.
ADMIN_JWT_SECRET = your-jwt-secret-here
CSRF_SECRET = your-csrf-secret-here
ADMIN_2FA_SECRET = your-2fa-secret-here
```

**Note:** No backslashes in Vercel!

---

## 🆘 Still Having Issues?

1. **Clear Next.js cache:**
   ```bash
   rm -rf .next
   npm run dev
   ```

2. **Restart dev server:**
   - Stop the server (Ctrl+C)
   - Start again: `npm run dev`

3. **Verify `.env.local` syntax:**
   - No spaces around `=`
   - Backslashes before `$` symbols
   - No quotes around the value

4. **Check for typos:**
   - Hash must be exactly 60 characters
   - Must start with `$2b$` (or `\$2b\$` in .env.local)

---

## 📖 Related Documentation

- [ENV_TEMPLATE.md](./ENV_TEMPLATE.md) - All environment variables
- [ADMIN_ACCESS_GUIDE.md](./ADMIN_ACCESS_GUIDE.md) - Complete admin setup guide
- [MANDATORY_2FA_IMPLEMENTATION.md](./MANDATORY_2FA_IMPLEMENTATION.md) - 2FA setup

---

**Last Updated:** November 2024  
**Issue:** Bcrypt hash dollar sign escaping in Next.js environment variables  
**Status:** ✅ Resolved




