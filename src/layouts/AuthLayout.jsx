import React from 'react';
import { Outlet } from 'react-router';
import ProFastLogo from '../pages/Shared/ProFastLogo';


const AuthLayout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto '>
            <ProFastLogo></ProFastLogo>
            </header>
            <main className='w-11/12 mx-auto '>
            
            <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;