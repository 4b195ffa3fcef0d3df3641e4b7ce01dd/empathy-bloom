import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://anmkrrboofzijanebbla.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFubWtycmJvb2Z6aWphbmViYmxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzMTg2NDgsImV4cCI6MjA1MTg5NDY0OH0.hory8ODIVjyaG70_Exhu31UUML3vuLPDUO-QcDIZPfQ',
  {
    auth: {
      persistSession: false,
      detectSessionInUrl: false,
      autoRefreshToken: false,
      storage: undefined // Disable storage to prevent LockManager errors
    }
  }
);