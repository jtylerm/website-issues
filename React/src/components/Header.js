import React from 'react';

const Header = () => {
    return(
        <div className="container" id="header">
            <div id="headerLogoContainer">
                <img id="headerLogo" src="Images/logo.svg" />
            </div>
            <div id="headerNavContainer">
                <div id="headerNavBar">
                    <div className="headerNavBarLink">HOME</div>
                    <div className="headerNavBarLink">SKILLS</div>
                    <div className="headerNavBarLink">PORTFOLIO</div>
                </div>
            </div>
        </div>
    )
};

export default Header;