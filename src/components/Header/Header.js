import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink'
import "./Header.css"

const Header = () => {
    return (
        <div>
            <h2>Welcome to TShirt mania</h2>
            <nav>
                <CustomLink className='customLink' to='/home'> Home</CustomLink>
                <CustomLink className='customLink' to='/orderReview'>OrderReview</CustomLink>

            </nav>
        </div>
    );
};

export default Header;