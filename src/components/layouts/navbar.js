import {React} from 'react'
import {Link} from "react-router-dom"
import logo from '../pages/logo.png'
import styles from './navbar.module.css'
function Navbar(){
    return(
    
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li className= {styles.insidelist}> <img className={styles.logoo}src={logo} height="59px" width="190px"/></li>
                <li className={styles.insidelist}> <a href="#QuemSomos"> Quem somos</a></li>
                <li className={styles.insidelist}> <a href="#Strateegiadigital">Strateegia.digital</a></li>
                <li className={styles.insidelist}><a href="#Youtube"> Youtube Tutorials</a></li>
                <Link to="/cadastro" ><li className={styles.insidelist} ><a href="#"> <button className="cadbut">Cadastre-se</button> </a> </li> </Link>
               <li className={styles.insidelist}> <Link to="/login" ><a href="#"> <button className="logbut">Login</button> </a> </Link> </li>
            </ul>
        </nav>
    )
}

export default Navbar