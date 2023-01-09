import { Link, NavLink } from 'react-router-dom'
// import { useContext } from 'react';

const Navbar = () => {
    function menuResponsive() {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    };
    return (
        <header className="site-header sticky-top">
            <div className="topnav" id="myTopnav">
                <Link to="/home"> ML</Link>
                <NavLink to="/products">Cervezas</NavLink>
                <NavLink to="/checkout">Carrito</NavLink>
                <NavLink to="/about">Historia</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
                {/* <NavLink to="/profile" style={{ "textDecoration": "underline" }}>{user?.name}</NavLink> */}
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="icon" onClick={menuResponsive}>
                    <i className="fa fa-bars" />
                </a>
            </div>


        </header>
    );
}

export default Navbar;