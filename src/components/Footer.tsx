import React from 'react';

function Footer() {
    return (
        <div className="w-full text-center bg-cream p-4">
            &copy; Copyright Joerg Leser {new Date().getFullYear()}. All rights reserved
        </div>
    );
}

export default Footer;
