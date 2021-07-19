/*
Virar os cards
*/
import CardGame from "../CardGame";

import "./style.css";

const CardFrontBack = () => {
    return /*html*/ `
        <article class="card-front-back">
        ${CardGame()}
        ${CardGame()}
        </article>
    `;
};

export default CardFrontBack;