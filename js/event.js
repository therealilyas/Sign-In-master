import DOM from './dom.js'
import FIREBASE from './firebase.js'

const createGuideDB = DOM.createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    FIREBASE.db.collection('guides').add({
        title: DOM.createForm.title.value,
        content: DOM.createForm.content.value
    }).then(() => {
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        DOM.createForm.reset();
    }).catch(err => {
        console.log(err.message);
    });
});
const signupDB = DOM.signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    FIREBASE.auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return FIREBASE.db.collection('users').doc(cred.user.uid).set({
            bio: DOM.signupForm['signup-bio'].value
        });
    }).then(() => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        DOM.signupForm.reset();
    });
});
const logoutDB = DOM.logout.addEventListener('click', (e) => {
    e.preventDefault();
    FIREBASE.auth.signOut().then(() => {
        console.log('user signed out');
    });
});
const loginDB = DOM.loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    FIREBASE.auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);

        const modal = document.getElementById('modal-login');
        M.Modal.getInstance(modal).close();
        DOM.loginForm.reset();
    });
});

const contentModals = document.addEventListener('DOMContentLoaded', function() {
    let modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    let items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
});


export default {
    createGuideDB,
    contentModals,
    signupDB,
    logoutDB,
    loginDB,

}