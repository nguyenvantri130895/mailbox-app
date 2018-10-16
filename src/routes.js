import React from 'react';
import LoginForm from './components/LoginForm';
import HomePage from './containers/HomePage'
import RegisterForm from './components/RegisterForm';
import Mail from './components/Email/Mail';
import Compose from './components/Compose';
//import Read from './components/Read';

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
        main: ({ match, history }) => <div><Mail match={match} history={history} /></div>
    }, {
        path: '/mail/trash',
        exact: false,
        main: () =>
            <div>
                <Mail />
            </div>
    }
];

export default routes;