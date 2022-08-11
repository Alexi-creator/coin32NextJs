import React from 'react';
import Link from 'next/link';
import debounce from 'lodash.debounce';
import { ImgBlock } from '../Game/Game.styled';
import {
  SearchBlock,
  WrapInput,
  Input,
  Results,
  WrapGame,
  WrapPreloader,
} from './Search.styled';
import Close from '../../assets/images/Close';
import SearchIcon from '../../assets/images/SearchIcon';
import Preloader from '../../assets/images/Preloader';

export const Search = ({ placeholder, resultsSearch, setSearchValue }) => {
  const searchRef = React.useRef(null);
  const [value, setValue] = React.useState('');

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 500),
    []
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const clearInput = () => {
    setValue('');
    setSearchValue('');
    searchRef.current?.focus();
  };

  return (
    <SearchBlock>
      <WrapInput>
        <SearchIcon width={20} className="search" />
        <Input
          ref={searchRef}
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={onChangeInput}
        />
        {value && <Close className="close" onClick={clearInput} />}
      </WrapInput>
      {value && (
        <Results>
          {resultsSearch.length > 0 ? (
            resultsSearch.map((item) => (
              <Link href={`/games/${item.slug}`} key={item.id}>
                <a>
                  <WrapGame>
                    <ImgBlock
                      uriImg={item.background_image}
                      width="50px"
                      height="50px"
                      position="relative"
                    />
                    <div>{item.name}</div>
                  </WrapGame>
                </a>
              </Link>
            ))
          ) : (
            <WrapPreloader>
              <Preloader />
            </WrapPreloader>
          )}
        </Results>
      )}
    </SearchBlock>
  );
};
