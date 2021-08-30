const guideList = document.getElementById('guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');
const createForm = document.querySelector('#create-form');
const signupForm = document.querySelector('#signup-form');
const logout = document.getElementById('logout');
const loginForm = document.getElementById('login-form');


export default {
    guideList,
    loggedOutLinks,
    loggedInLinks,
    accountDetails,
    createForm,
    signupForm,
    logout,
    loginForm,

}