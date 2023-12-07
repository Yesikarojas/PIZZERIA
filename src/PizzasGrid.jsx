import { PizzaCard } from "./PizzaCard";
import pizza from "./pizzeria.json";
import style from "./PizzasGrid.module.css"

export function PizzasGrid() {
    return (
        <div className={style.body2}>
            {pizza.map((pizzaItem) => (
                <PizzaCard key={pizzaItem.id} pizza={pizzaItem}/>
            ))}
        </div>

    );
}
