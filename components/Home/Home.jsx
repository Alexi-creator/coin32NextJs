import React from 'react';
import axios from 'axios';
import { WrapperHome, WrapperGame } from './Home.styled';
import { Game } from '../Game/Game';
import { H1 } from '../Typography/Typography';
import { Search } from '../Search/Search';
import { Fetching } from '../Fetching/Fetching';
import { Select } from '../Select/Select';

const FILTER_RELEASE_DESC = 'Date Release(DESC)';
const FILTER_RELEASE_ASC = 'Date Release(ASC)';
const FILTER_RATING_DESC = 'Rating(DESC)';
const FILTER_RATING_ASC = 'Rating(ASC)';

export const Home = ({ data }) => {
  const selectList = [
    FILTER_RELEASE_DESC,
    FILTER_RELEASE_ASC,
    FILTER_RATING_DESC,
    FILTER_RATING_ASC,
  ];
  const [selectedFilter, setSelectedFilter] = React.useState(selectList[0]);

  const [nextPage, setNextPage] = React.useState(data.next);
  const [stateGames, setStateGames] = React.useState(data.results);
  const [fetching, setFetching] = React.useState(false);

  const getTimeStamp = (date) => new Date(date.split('-').join(',')).getTime();

  const sort = () => {
    if (selectedFilter === FILTER_RELEASE_DESC) {
      setStateGames((prev) =>
        [...prev].sort((a, b) =>
          getTimeStamp(a.released) > getTimeStamp(b.released) ? -1 : 1
        )
      );
    }
    if (selectedFilter === FILTER_RELEASE_ASC) {
      setStateGames((prev) =>
        [...prev].sort((a, b) =>
          getTimeStamp(a.released) > getTimeStamp(b.released) ? 1 : -1
        )
      );
    }
    if (selectedFilter === FILTER_RATING_DESC) {
      setStateGames((prev) =>
        [...prev].sort((a, b) => (a.rating > b.rating ? -1 : 1))
      );
    }
    if (selectedFilter === FILTER_RATING_ASC) {
      setStateGames((prev) =>
        [...prev].sort((a, b) => (a.rating > b.rating ? 1 : -1))
      );
    }
  };

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
        setStateGames([...stateGames, ...newData.results]);
        sort();
      } finally {
        setFetching(false);
      }
    }
  };

  React.useEffect(() => {
    sort();
  }, [selectedFilter]);

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
      <H1>super games</H1>
      <span>choose your game:</span>
      <Select
        selected={selectedFilter}
        setSelected={setSelectedFilter}
        selectList={selectList}
      />
      <WrapperGame>
        {stateGames.map((game) => (
          <Game key={game.id} {...game} />
        ))}
      </WrapperGame>
      {fetching && <Fetching />}
    </WrapperHome>
  );
};
