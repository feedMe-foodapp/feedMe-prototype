/* React */
import React from 'react';

/* Util(s) */
import HomePageWrapper from 'src/utils/wrapper/home/HomePageWrapper';

/* Component(s) */
import LoginContainer from 'src/components/login/login-container/LoginContainer';

/* Stylesheet */
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
    return (
        <HomePageWrapper>
            <></>
            <LoginContainer />
        </HomePageWrapper>
    );
};

export default HomePage;