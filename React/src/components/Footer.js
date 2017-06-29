import React from 'react';

const Footer = () => {
    // const inlineStyle = {
    //     display: "inline-block",
    //     color: ""
    // };
    return(
        <div>
            <div className="container" id="footer">
                <div id="footerTextContainer">
                    <p id="footerText">© 2017 Tyler Mayberry</p>
                </div>
                <div id="footerNavContainer">
                    <div id="footerNavBar">
                        <div className="footerNavBarLink">Home</div>
                        <div className="footerSeparator"> | </div>
                        <div className="footerNavBarLink">Skills</div>
                        <div className="footerSeparator"> | </div>
                        <div className="footerNavBarLink">Portfolio</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;