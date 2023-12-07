import { PizzasGrid } from "./PizzasGrid";
import style from "./PizzasGrid.module.css"

export function App(){
    return(
        <div className={style.body1}>
            <div className={style.row}>
                <h1 className={style.title}>Ordenar en Deli Pizza</h1>
                <img src={require('./assets/logo.png')} className={style.logo}/>
            </div>
            <main>
                <PizzasGrid />
            </main>
        </div>
    );

}