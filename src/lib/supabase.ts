import { createClient } from '@supabase/supabase-js';

const metaEnv = (import.meta as any).env || {};
const supabaseUrl = metaEnv.VITE_SUPABASE_URL || 'https://mlvseppspsstyrpzehbm.supabase.co';
const supabaseAnonKey = metaEnv.VITE_SUPABASE_ANON_KEY || 'sb_publishable_MQhZ2oIg4B7qSs3UiynMhg_8mT01O1l';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
