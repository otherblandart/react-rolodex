import './search-box.styles.css'

const SearchBox = ({ className, placeholder, onChangeHandler, title }) => (
  <div className="search-box-container">
    <input
        type='search'
        placeholder={placeholder}
        className={`search-box ${className}`}
        onChange={onChangeHandler}
        defaultValue={title}
    />
  </div>
);

export default SearchBox;