import './NavBar.css'
import CardWidget from "../CardWidget/CardWidget"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className='NavBar'>
            <Link to='/'>
            <h3>Ecommerce</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/celular`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>celular</NavLink>
                <NavLink to={`/category/tablet`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>tablet</NavLink>
                <NavLink to={`/category/laptop`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>laptop</NavLink>
            </div>
            <CardWidget />
        </nav>
    )
}

export default NavBar