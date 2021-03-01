import React from 'react';
import './Header.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return (
        <div className="container d-flex p-3">
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3gIHWC8ybh4GmW_RiCM_CTUs4O4se2G7JA&usqp=CAU" alt=""/>
            </div>
            <div className="navigation ">
                <ul>
                    <li> <a className='btn' href="/">Home</a></li>
                    <li> <a className='btn' href="/">Player</a></li>
                    <li> <a className='btn' href="/">Contact</a></li>
                </ul>
            </div>
          
        </div>
    );
};

export default Header;