import React from 'react'
import './Header.css';
import Avatar from '@material-ui/core/Avatar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useStateValue} from './StateProvider';

function Header() {
    const [{user}]=useStateValue();
    return (
        <div className="header">
             <div className="header__left">
             <Avatar src={user?.photoURL} alt={user?.displayName} />
             <AccessTimeIcon />
             </div>

            <div className="header__search">
                <input type="text" placeholder="product engineering"/>
                <SearchIcon />
            </div>

            <div className="header__right">
                    <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
