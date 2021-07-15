/*
 Mostrar player 1 e 2 no cardgame e seu conteúdo.
*/

import "./style.css";

const PlayerName = (content) => {
    return /*html*/`
        <p class="player-name">${content}</p>
    `;
}

export default PlayerName;