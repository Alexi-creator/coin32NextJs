import React from 'react';
import axios from 'axios';
import { WrapperHome, WrapperGame } from './Home.styled';
import { Game } from '../Game/Game';
import { H1 } from '../Typography/Typography';
import { Search } from '../Search/Search';
import { Fetching } from '../Fetching/Fetching';

export const Home = ({ data }) => {
  const { results } = data;
  const [nextPage, setNextPage] = React.useState(data.next);
  const [stateGame, setStateGame] = React.useState(results);
  const [fetching, setFetching] = React.useState(false);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      nextPage
    ) {
      setFetching(true);
    }
  };

  const fetchData = async () => {
    if (fetching) {
      try {
        const { data: newData } = await axios.get(nextPage);
        setNextPage(newData.next);
        setStateGame([...stateGame, ...newData.results]);
      } finally {
        setFetching(false);
      }
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [fetching]);

  React.useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

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
      {fetching && <Fetching />}
    </WrapperHome>
  );
};
