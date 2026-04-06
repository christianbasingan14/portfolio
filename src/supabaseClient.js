import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zuydecahhfrfwbxzfhip.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1eWRlY2FoaGZyZndieHpmaGlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5ODU5ODYsImV4cCI6MjA5MDU2MTk4Nn0.ngAyfKLiCi6Nct2MeBxqbfQdMuDwfdTXMQMVsqKpjxo'

export const supabase = createClient(supabaseUrl, supabaseKey)