import './Nav.css'
import Link from './NavItem'


import React from 'react'

export default props =>
    <aside className="menu-area">
    <nav className="menu">
        <Link link="/" icon="home" title="Início" />
        <Link link="/users" icon="users" title="Usuários" />
    </nav>
    </aside>