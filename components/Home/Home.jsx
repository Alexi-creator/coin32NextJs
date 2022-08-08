import React from 'react';
import { WrapperHome, WrapperGame } from './Home.styled';
import { Game } from '../Game/Game';
import { H1 } from '../Typography/Typography';
import { Search } from '../Search/Search';

export const Home = ({ data }) => {
  const { results } = data;
  const [stateGame, setStateGame] = React.useState(results);
  return (
    <WrapperHome>
      <Search />
      <button type="button" onClick={() => setStateGame('')}>
        button
      </button>
      <H1>super game:</H1>
      <span>choose your game</span>
      <WrapperGame>
        {stateGame.map((game) => (
          <Game key={game.id} {...game} />
        ))}
      </WrapperGame>
    </WrapperHome>
  );
};
