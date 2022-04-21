import './search-box.styles.css';

const SearchBox = ({className, placeholder, onChandeHandler}) => (
    <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChandeHandler}
    />
)

export default SearchBox;