import React from 'react';
import axios from 'axios';
import { gamesAPI } from '../../helpers/api';
import { WrapperHome, WrapperGame, WrapFilters } from './Home.styled';
import { Game } from '../Game/Game';
import { H1, Ptag } from '../Typography/Typography';
import { Search } from '../Search/Search';
import { Fetching } from '../Fetching/Fetching';
import { Select } from '../Select/Select';

const FILTER_RELEASE_DESC = 'Date Release (DESC)';
const FILTER_RELEASE_ASC = 'Date Release (ASC)';
const FILTER_RATING_DESC = 'Rating (DESC)';
const FILTER_RATING_ASC = 'Rating (ASC)';

const FILTER_PLATFORMS_PC = 'PC';
const FILTER_PLATFORMS_XBOX_SX = 'Xbox Series S/X';
const FILTER_PLATFORMS_XBOX_360 = 'Xbox 360';
const FILTER_PLATFORMS_XBOX_ONE = 'Xbox One';
const FILTER_PLATFORMS_PLAYSTATION_5 = 'PlayStation 5';
const FILTER_PLATFORMS_PLAYSTATION_4 = 'PlayStation 4';
const FILTER_PLATFORMS_PLAYSTATION_3 = 'PlayStation 3';
const FILTER_PLATFORMS_NINTENDO_SWITCH = 'Nintendo Switch';
const FILTER_PLATFORMS_LINUX = 'Linux';
const FILTER_PLATFORMS_MACOS = 'macOS';

export const Home = ({ data }) => {
  const { next, results, count } = data;

  const selectListFilter = [
    FILTER_RELEASE_DESC,
    FILTER_RELEASE_ASC,
    FILTER_RATING_DESC,
    FILTER_RATING_ASC,
  ];

  const selectListPlatforms = [
    FILTER_PLATFORMS_PC,
    FILTER_PLATFORMS_XBOX_SX,
    FILTER_PLATFORMS_XBOX_360,
    FILTER_PLATFORMS_XBOX_ONE,
    FILTER_PLATFORMS_PLAYSTATION_5,
    FILTER_PLATFORMS_PLAYSTATION_4,
    FILTER_PLATFORMS_PLAYSTATION_3,
    FILTER_PLATFORMS_NINTENDO_SWITCH,
    FILTER_PLATFORMS_LINUX,
    FILTER_PLATFORMS_MACOS,
  ];

  const [selectedFilter, setSelectedFilter] = React.useState(
    selectListFilter[0]
  );
  const [selectedPlatform, setSelectedPlatform] = React.useState(
    selectListPlatforms[0]
  );
  const [stateSearchValue, setSearchValue] = React.useState('');
  const [resultsSearch, setResultsSearch] = React.useState('');

  const [nextPage, setNextPage] = React.useState(next);
  const [stateGames, setStateGames] = React.useState(results);
  const [fetching, setFetching] = React.useState(false);

  const getTimeStamp = (date) => new Date(date.split('-').join(',')).getTime();

  const search = async (str) => {
    const { results: resSearch } = await gamesAPI.getGamesSearch(str);
    setResultsSearch(resSearch);
  };

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
    if (stateSearchValue) {
      search(stateSearchValue);
    } else setResultsSearch([]);
  }, [stateSearchValue]);

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
      <Search
        resultsSearch={resultsSearch}
        setSearchValue={setSearchValue}
        placeholder={`Search ${count
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} games`}
      />
      <H1>super games</H1>
      <Ptag>choose your game:</Ptag>
      <WrapFilters>
        <Select
          selected={selectedFilter}
          setSelected={setSelectedFilter}
          selectList={selectListFilter}
        />
        <Select
          selected={selectedPlatform}
          setSelected={setSelectedPlatform}
          selectList={selectListPlatforms}
        />
      </WrapFilters>
      <WrapperGame>
        {stateGames
          .filter((item) => {
            let isPlatform = false;
            for (let i = 0; i < item.platforms.length; i += 1) {
              if (item.platforms[i].platform.name === selectedPlatform) {
                isPlatform = true;
                break;
              }
            }
            return isPlatform;
          })
          .map((game) => (
            <Game key={game.id} {...game} />
          ))}
      </WrapperGame>
      {fetching && <Fetching />}
    </WrapperHome>
  );
};
