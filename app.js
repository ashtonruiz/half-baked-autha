import { redirectIfLoggedIn, signupUser } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signUpForm = document.getElementById('sign-up');

// Wire up sign in and sign up forms to supabase
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const email = data.get('email');
    const user = await signupUser(email, data.get('password'));
    // Redirect to /other-page on successful auth
    redirectIfLoggedIn();
    // Redirect to /other-page when page loads if user is authenticated
    if (user) {
        location.replace('/other-page');
    }
});
