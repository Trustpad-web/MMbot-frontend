import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface NavLinkProps {
    children: React.ReactNode;
    to?: string;
    className?: string;
    onActive?: string;
    notActive?: string;
}

function classNames(...classes: (string | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function NavLink({ children, to = '/', className = '', onActive = '', notActive = '' }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === to;
    return <Link href={to} className={isActive ? classNames(className, onActive) : classNames(className, notActive)} > {children}</Link >
}

