import React from 'react';
import LoginForm from './components/LoginForm';
import HomePage from './containers/HomePage'
import RegisterForm from './components/RegisterForm';
import Mail from './components/Mail';
import Compose from './components/Compose/Compose';
//import Read from './components/Read/Read'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    }, {
        path: '/login',
        exact: false,
        main: () =>
            <div>
                <LoginForm />
            </div>
    }, {
        path: '/register',
        exact: false,
        main: () =>
            <div>
                <RegisterForm />
            </div>
    }, {
        path: '/mail',
        exact: true,
        main: () =>
            <div>
                <Mail />
            </div>
    }, {
        path: '/mail/compose',
        exact: false,
        main: () =>
            <div>
                <Compose />
            </div>
    }, {
        path: '/mail/:id/read',
        exact: false,
        main: () => <div><Mail /></div>
    }, {
        path: '/mail/trash',
        exact: false,
        main: () =>
            <div>
                <Mail />
            </div>
    }, {
        path: '/mail/draft',
        exact: false,
        main: () =>
            <div>
                <Mail />
            </div>
    }, {
        path: '/mail/sent',
        exact: false,
        main: () =>
            <div>
                <Mail />
            </div>
    }
];

export default routes;