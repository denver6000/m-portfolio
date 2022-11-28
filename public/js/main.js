document.addEventListener('DOMContentLoaded', (event) => {
    let signUpBtn = document.getElementById('signup-btn');
    let signUpWindow = document.getElementsByClassName('signup-wrapper')[0];

    let logInBtn = document.getElementById('login-btn')
    let logInWindow = document.getElementsByClassName('login-wrapper')[0];

    let menu = document.getElementsByClassName('menu')[0];
    let menuItems = menu.getElementsByClassName('menu-item');

    let toggleBtn = document.getElementsByClassName('toggle-btn')[0];
    let isToggled = true;

    const EXPAND = 'expand';
    const CONTRACT = 'contract';
    const HIDE = 'hidden';

    let toggleMenu = function () {
        menu.classList.add(HIDE);
        menu.classList.remove(EXPAND);
        menu.classList.add(CONTRACT);
    }

    let unToggleMenu = function () {
        menu.classList.remove(HIDE);
        menu.classList.remove(CONTRACT);
        menu.classList.add(EXPAND);
    }

    
    for (let index = 0; index < menuItems.length; index++) {
        menuItems[index].addEventListener('click', () => {
            toggleMenu();
            isToggled = true;
        });
        
    }

    toggleBtn.addEventListener('click', () => {
        console.log('1')
        if (isToggled) {
            unToggleMenu();
            isToggled = false;
        } else {
            toggleMenu();
            isToggled = true;
        }
    });

    
    let creds = []

    signUpBtn.addEventListener('click', (ev) => {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let rePassword = document.getElementById('re-password').value;

        if (!(username == '' || password == '' || rePassword == '')) {
            if (password === rePassword) {
                signUpWindow.classList.add('hidden');
                creds.push({
                    username: username,
                    pass: password
                });
                logInWindow.classList.remove('hidden');
            }
        } 
        console.log(`${username + password + rePassword}`);
    });

    logInBtn.addEventListener('click', (ev) => {
        let username = document.getElementById('username-login').value;
        let pass = document.getElementById('password-login').value;

        creds.forEach(element => {
            if (element.username === username) {
                if (element.pass === pass) {
                    logInWindow.classList.add('hidden');
                }
            }
        })
    })
});