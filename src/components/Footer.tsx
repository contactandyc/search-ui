// components/Footer.tsx

import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-200 text-center py-4 mt-8">
            <p>© {new Date().getFullYear()} Search and Personalization by Andy Curtis. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
