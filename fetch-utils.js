// Enter Supabase Information
const SUPABASE_URL = 'https://zgixhmlshitskkemwyaf.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnaXhobWxzaGl0c2trZW13eWFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDgwODYsImV4cCI6MTk4MzY4NDA4Nn0.nMjJ-vp1PSZuD_oT9AQGKADmPu3OCZp9Uf4n2XbaBjQ';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    if (response.user) {
        return response.user;
    } else {
        response.error;
    }
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    return response.user;
}

export async function checkAuth() {
    const user = getUser();
    if (!user) location.replace('/');
}

export async function redirectIfLoggedIn() {
    const user = getUser();
    if (user) location.replace('./other-page');
}

export async function logout() {
    await client.auth.signOut();
    return (window.location.href = '/');
}
