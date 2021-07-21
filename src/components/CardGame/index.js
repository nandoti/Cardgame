/*
Card dos jogos
*/
import "./style.css";

const CardGame = (icon = "alura-pixel", alt = "Logo") => {
    return /*html*/ `
    <article class="card-game">
     <img src="images/${icon}.png" alt="${alt}"/>
     
    </article>
    `;
};

export default CardGame;