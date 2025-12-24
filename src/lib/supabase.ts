import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://your-project-url.supabase.co';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key';

// This is a placeholder client. 
// To use Supabase, add PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY to your .env file.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
