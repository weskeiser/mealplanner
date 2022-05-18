interface ISearchBarProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<ISearchBarProps> = ({ setSearchTerm }) => {
  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input className="search-bar" type="text" onInput={(e) => handleInput(e)} />
  );
};

export default SearchBar;
