import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nemo. Eveniet dignissimos rerum eius nam repellendus ad molestiae optio fugit?</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;