'use client'
import Link from 'next/link';
import {NavbarItem, Link as NextUILink} from '@nextui-org/react';
import { usePathname } from 'next/navigation';


type TnaveLinks = {
    id: number
    title: string
    href: string
}

const navLinks: TnaveLinks[] = [
    { id: 1, title: 'Home', href: '/' },
    { id: 2, title: 'About', href: '/about' },
    { id: 3, title: 'Contact', href: '/contact' },
    { id: 4, title: 'Blog', href: '/blog' },
];

function Links() {

    const pathName = usePathname()

    return (
        <>
            {navLinks.map((link) => (
                <NavbarItem key={link.id} isActive={pathName===link.href}>
                    <NextUILink color='secondary' as={Link} href={link.href}>
                        {link.title}
                    </NextUILink>
                </NavbarItem>
            ))}
        </>
    );
}

export default Links;
