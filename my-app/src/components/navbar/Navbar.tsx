import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyles.css';
import image_account from '../../images/image_account.svg';

const Navbar = () => {
    return (
        <nav>
            <div className="nav_navbar">
                <ul className="nav_catalog">
                    <li>
                        <Link to='/catalog'>Каталог</Link>
                    </li>
                </ul>
                <ul className="nav_account">
                    <li>
                        <Link to='/translator'>Сравнение</Link>
                    </li>
                    <li>
                        <Link to='/account'>Личный кабинет </Link>
                    </li>
                    <li>
                        <img src={image_account} alt="" className="small_img" />
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
