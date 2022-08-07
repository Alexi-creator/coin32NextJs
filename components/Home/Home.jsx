import { WrapperHome, WrapperGame } from './Home.styled';
import { Game } from '../Game/Game';
import { H1 } from '../Typography/Typography';
import { Search } from '../Search/Search';

export const Home = ({ data }) => {
  const { results } = data;
  return (
    <WrapperHome>
      <Search />
      <H1>super game:</H1>
      <span>choose your game</span>
      <WrapperGame>
        {results.map((game) => (
          <Game key={game.id} {...game} />
        ))}
      </WrapperGame>
    </WrapperHome>
  );
};
