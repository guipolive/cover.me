import React from 'react';
import './styles.css';

import { FiMenu, FiPlusSquare, FiBell, FiUser } from 'react-icons/fi';
import { IconContext } from 'react-icons';

// import logoImg from '../../assets/logo.jpeg';

const Header = () => (
    <header>
        <IconContext.Provider value={{className:"icones-header"}} >
            <div className="content">
                <ul>
                    <li><FiMenu/></li>
                    <li>logo</li>
                </ul>

                <div className="search-bar">
                    <input type="text" placeholder="Pesquisar"/>
                </div>

                <ul>
                    <li><FiPlusSquare/></li>
                    <li><FiBell/></li>
                    <li><FiUser/></li>
                </ul>
            </div>
        </IconContext.Provider>
    </header>
);

export default Header;