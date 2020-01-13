import React from 'react';
import './Logo.scss';

const Logo: React.FC<any> = (): any => {
    return (
        <div className="header__top__logo">
            <i className="fas fa-chevron-left" />
            <h1>Addition Elle</h1>
        </div>
    );
};

export default Logo;
