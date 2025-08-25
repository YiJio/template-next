// packages
import { createClient } from '@supabase/supabase-js';

// important
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// export if necessary
// if no, then only export functions below

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// better to put all api functions here
// if no, then export above

export async function getSomething(id: string) {
	return '';
}

export async function setSomething(id: string) {
	return '';
}