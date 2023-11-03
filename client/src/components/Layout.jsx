import React from 'react'
import { Link,Outlet } from 'react-router-dom' 
export const Layout = () => {
    return (
        <>
     
       <nav className='nav-wrapper'>
            <h3 className='brand-logo'>Logo</h3>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to='/'>Главная</Link></li>
                <li><Link to='/auth'>Авторизация</Link></li>
                <li><Link to='/create'>Создать ссылку</Link></li>
                <li> <Link to='/detail/:id'>Детали</Link></li>
                <li> <Link to='/links'>Список ссылок</Link></li>
            </ul>
       </nav>
       <Outlet/>
       
       </>
    )
}
