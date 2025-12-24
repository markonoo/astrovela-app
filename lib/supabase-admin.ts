import { createClient } from '@supabase/supabase-js'

/**
 * Create a Supabase admin client with service role key
 * Bypasses RLS and has full database access
 */
export function createSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  const secretKey = process.env.SUPABASE_SECRET_KEY || '';

  // Validate JWT format (real service keys start with 'eyJ')
  const isServiceRoleKeyJWT = serviceRoleKey.startsWith('eyJ');
  const isSecretKeyJWT = secretKey.startsWith('eyJ');

  // Prefer JWT-formatted key
  const serviceKey = (secretKey && isSecretKeyJWT) ? secretKey : serviceRoleKey;

  if (!serviceKey || !serviceKey.startsWith('eyJ')) {
    throw new Error('No valid Supabase service role key found in environment variables')
  }

  return createClient(supabaseUrl, serviceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false
    }
  })
}
