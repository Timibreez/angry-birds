import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "../styles/navigation.css"

const Navigation = () => {
    return (
        <div className="all">

            <div className="navMobile">
                <div className="mobileLink"><a href="#"><FontAwesomeIcon icon={faBars}/></a></div>
                <div className="mobileLink mobileLink--text active"><a href="#">ALL</a></div>
                <div className="mobileLink mobileLink--text"><a href="#">IMAGES</a></div>
            </div>
            
            <div className="navContainer">
                <div className="navLink navLink--text"><a href="#">Gmail</a></div>
                <div className="navLink navLink--text"><a href="#">Images</a></div>
                <div className="navLink navLink--icon"><a href="#"><FontAwesomeIcon icon={faTh}/></a></div>
                <div className="navLink navLink--user"><a href="#">A</a></div>
            </div>
        </div>
    );
}
 
export default Navigation;
