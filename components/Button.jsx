import React from 'react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Button({ children, isActive = false, className = '', onActive = '', notActive = '', ...props }) {
    return <button className={classNames(isActive ? (className + ' ' + onActive) : (className + ' ' + notActive))} {...props}>{children}</button>
}