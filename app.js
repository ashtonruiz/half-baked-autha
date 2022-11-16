import { redirectIfLoggedIn, signInUser, signupUser } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signUpForm = document.getElementById('sign-up');

redirectIfLoggedIn();
// Wire up sign in and sign up forms to supabase
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const email = data.get('email');
    const user = await signupUser(email, data.get('password'));

    if (user) {
        location.replace('/other-page');
    }
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    const email = data.get('email');
    const user = await signInUser(email, data.get('password'));

    if (user) {
        location.replace('/other-page');
    }
});
