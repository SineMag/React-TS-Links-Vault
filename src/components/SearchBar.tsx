
interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <div className="search-bar">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search your links..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
}