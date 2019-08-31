import React from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import '../../styles/navbar/styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Navbar extends React.Component {
    render() {
        return (
            <ResponsiveMenu
                menuOpenButton={<FontAwesomeIcon icon="bars" size="2x"/>}
                menuCloseButton={<FontAwesomeIcon icon="window-close" size="2x"/>}
                changeMenuOn="500px"
                largeMenuClassName="large-menu-classname large-navbar-styling"
                smallMenuClassName="small-menu-classname small-navbar-styling"
                menu={
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Profile</li>
                    </ul>
                }
            />
        );
    }
}