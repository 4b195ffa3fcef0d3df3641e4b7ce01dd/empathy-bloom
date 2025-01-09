import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://anmkrrboofzijanebbla.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFubWtycmJvb2Z6aWphbmViYmxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MjI0MDAsImV4cCI6MjAyNTM5ODQwMH0.7dWz1aYK9viceV5BEr8f9cWIDPQq_9VWKW6u4YMfZGY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    detectSessionInUrl: false,
    autoRefreshToken: false,
    storage: undefined,
    flowType: 'pkce'
  },
  global: {
    headers: {
      'X-Custom-Header': 'custom-value'
    }
  }
});