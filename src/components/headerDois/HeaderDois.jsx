import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../context/Context";
import './HeaderDois.css';

function NavBar() {
    const [active, setActive] = useState('nav_menu');
    const { isTranslate } = useContext(Context);
    const navToggle = () => {
        active === 'nav_menu' 
        ? setActive('nav_menu nav_active') 
        : setActive('nav_menu');
    }
    return (
        <div className="nav_pai">
        <nav className="nav">
            <a href="#" className="nav_brand">{isTranslate ? 'Portfólio' : 'Portfolio'}</a>
            <ul className={ active }>
                <li className="nav_item"> <Link to="/" className="nav_link">Home</Link></li>
                <li className="nav_item"> <a href='#about-me' className="nav_link">{isTranslate ? 'Sobre mim' : 'About me'}</a></li>
                <li className="nav_item"><a href="#projects" className="nav_link">{isTranslate ? 'Projetos' : 'Projects'}</a></li>
                <li className="nav_item"><a href='#title-hardss' className="nav_link">Hards Skills</a></li>
                <li className="nav_item"><Link to='/certificates' className="nav_link">{isTranslate ? 'Certificados' : 'Certificates'}</Link></li>
                <li className="nav_item"><a href="#footer" className="nav_link">{isTranslate ? 'Contatos' : 'Contact'}</a></li>
            </ul>
            <div onClick={ navToggle } className="nav_toggler">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
        </div>
    )
}

export default NavBar;
