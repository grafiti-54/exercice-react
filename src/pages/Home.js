//raccourci rsc
import React from 'react';
import Countries from '../components/Countries';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
        <Logo />
        {/* Menu de navigation */}
        <Navigation />
        <Countries />
        </div>
    );
};

export default Home;