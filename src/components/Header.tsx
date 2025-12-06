import { IoIosLink } from "react-icons/io";
import { FaHome, FaSearch, FaHistory } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header>
      <div className="header-top">
        <h1>
          <IoIosLink />
          Links Vault
        </h1>
        <div className="icon-bar">
          <FaHome size={30} />
          <FaSearch size={30}/>
          <FaUsersViewfinder size={30}/>
          <FaHistory size={30}/>
          <CgProfile size={30}/>
        </div>
      </div>
      <div className="search-bar">
        <div className="search-input">
          <input 
            type="text"
            placeholder="Search your links..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <FaSearch className="search-icon" />
        </div>
      </div>
    </header>
  );
}
