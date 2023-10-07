import CartWdiget from "../../CartWidget/CartWidget"
import classes from './NavBar.module.css'
const NavBar = () => {
   return (
    <nav className={classes.background}>
        <h3 className={classes.font}>Los 3 hermanos</h3>
        <section>
            <button className={classes.button}>Bebidas</button>
            <button className={classes.button}>Lacteos</button>
            <button className={classes.button}>Alcohol</button>
            <button className={classes.button}>Limpieza</button>
        </section>
        <CartWdiget />
    </nav>
   )
}

export default NavBar