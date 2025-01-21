import React from 'react';


const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full bg-orange-500 text-black-700 py-4 border-t ">
            <div className="container mx-auto text-center">
                <p className="text-sm font-medium">
                    &copy; {new Date().getFullYear()} Kim Gwang Jin. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;