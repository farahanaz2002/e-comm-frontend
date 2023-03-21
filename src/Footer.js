/*import React from "react";
import './footer.css'
export default function Footer() {
    return (
        <div className="footer">
            FOOTER
        </div>
    )
}*/
import React from 'react'
import './footer.css'
const Footer = () => {
    const playStore = "https://raw.githubusercontent.com/meabhisingh/mernProjectEcommerce/master/frontend/src/images/playstore.png"
    const appStore = "https://raw.githubusercontent.com/meabhisingh/mernProjectEcommerce/master/frontend/src/images/Appstore.png"
    return (
        <footer id="Footer">
            <div className="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img src={playStore} alt="playstore" />
                <img src={appStore} alt="Appstore" />
            </div>

            <div className="midFooter">
                <h1>Eprinting.</h1>
                <p>High Quality is our first priority</p>

                <p>Copyrights 2023 &copy; Eprinting</p>
            </div>

            <div className="rightFooter">
                <h4>Follow Us</h4>
                link email here
                <a href="https://youtube.com">YOUTUBE</a>
            </div>
        </footer>
    )
}

export default Footer

