import React from 'react';
import { SelectWrapper, SelectList, Selected } from './Select.styled';

export const Select = ({ selected, selectList = [], setSelected }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectRef = React.useRef(null);

  const changeSelect = (itemSelect) => {
    setIsOpen((prev) => !prev);
    setSelected(itemSelect);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !event.path.includes(selectRef.current)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <SelectWrapper ref={selectRef}>
      <Selected
        onKeyDown={() => setIsOpen((prev) => !prev)}
        onClick={() => setIsOpen((prev) => !prev)}
        role="button"
        tabIndex="0"
      >
        {selected}
      </Selected>
      {isOpen && (
        <SelectList>
          {selectList.length &&
            selectList.map((item) => (
              <div
                key={item}
                onKeyDown={(e) => changeSelect(e.target.textContent)}
                onClick={(e) => changeSelect(e.target.textContent)}
                role="button"
                tabIndex="0"
              >
                {item}
              </div>
            ))}
        </SelectList>
      )}
    </SelectWrapper>
  );
};
