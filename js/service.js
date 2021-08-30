import DOM from './dom.js'
import FIREBASE from './firebase.js'
import EVENT from './event.js'


const setupUI = (user) => {
    if (user) {
        FIREBASE.db.collection('users').doc(user.uid).get().then(doc => {
            const html = `
              <div>Logged in as ${user.email}</div>
              <div>${user.email}</div>
            `;
            DOM.accountDetails.innerHTML = html;
        });

        DOM.loggedInLinks.forEach(item => item.style.display = 'block');
        DOM.loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        DOM.accountDetails.innerHTML = ''
        DOM.loggedInLinks.forEach(item => item.style.display = 'none');
        DOM.loggedOutLinks.forEach(item => item.style.display = 'block');
    }
};
const setupGuides = (data) => {
    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const guide = doc.data();
            const li = `
          <li>
            <div class="collapsible-header grey lighten-4"> ${guide.title} </div>
            <div class="collapsible-body white"> ${guide.content} </div>
          </li>
        `;
            html += li;
        });
        DOM.guideList.innerHTML = html
    } else {
        DOM.guideList.innerHTML = '<h5 class="center-align">Login to view guides</h5>';
    }
};
const authStateChange = FIREBASE.auth.onAuthStateChanged(user => {
    console.log(user);
    if (user) {
        FIREBASE.db.collection('guides').onSnapshot(snapshot => {
            setupGuides(snapshot.docs);
            setupUI(user);
        }, err => {
            console.log(err.message);
        });
    } else {
        setupUI();
        setupGuides([]);
    }
});

function init() {
    EVENT
    authStateChange
}
export default {
    init
}