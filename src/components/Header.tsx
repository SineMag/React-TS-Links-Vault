import { IoIosLink } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({ searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header>
      <div
        style={{
          color: "black",
          display: "flex",
          flexDirection:'row',
          justifyContent:'space-between'
        }}
      >
        <h1 style={{
            color:'black'
        }}>
          <IoIosLink />
          Links Vault
        </h1>
        <div className="icon-bar" style={{
            padding:'2%',
            cursor:'pointer'
        }}>
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
          <i className="fas fa-search" style={{
            color :'black'
          }}></i>
        </div>
      </div>
    </header>
  );
}
