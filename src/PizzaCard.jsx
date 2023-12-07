import style from "./PizzaCard.module.css"

export function PizzaCard({pizza}){
    return (
        <div className={style.card}>
            <div className={style.cardHeader}>
                <h3>{pizza.Name}</h3>
            </div>
            <div className={style.cardBody}>
                <p>Type: {pizza.Type}</p>
                <p>Size: {pizza.Size}</p>
                <p>Price: {pizza.Price}</p>
            </div>
            <div className={style.cardFooter}>
                <button className={style.btn}>Pedir</button>
            </div>
        </div>

    );
    

}