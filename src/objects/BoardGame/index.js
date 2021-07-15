/* 
Organização dos cartões
*/

import CardGame from "../../components/CardGame";

const BoardGame = (amoutCards) => {
  const $htmlCardGame = CardGame();
  const $htmlBoardGame = $htmlCardGame.repeat(amoutCards);

  return $htmlBoardGame;
};

export default BoardGame;