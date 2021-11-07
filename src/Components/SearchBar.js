import { useState } from "react";
import { MdSearch } from "react-icons/md";
import "../Styles/SearchBar.css"
import sidehustle from "../Assets/SideHustleImage.jpg"
import Voice from "../Assets/Voicesearch.png"




function SearchBar() {
  const [search, setSearch] = useState("")
  console.log(search)

  return (
    <>
      <div className="wrapper">
            <div className="logo">
              {search !== ""? search: <img src={sidehustle} alt="goole" width="310px" />}
            </div>
            <div className="search">
              <MdSearch className={` serachIcon ${search!== "" ? "hide": ""}`} />
              <input type="text" placeholder="Search Here" onChange={(e)=>setSearch(e.target.value)}/>
              <img src={Voice} alt="voiceimage" width="30px" className={`voiceButton ${search!== "" ? "hide": ""}`} />
            </div>

            <div className="btn">
              <button>Google Search</button>
              <button>I'm Felling Lucky</button>
            </div>

            <div className="languages">
              <span className="element-1">Google is offered in:</span>
              <span className="element-2">
               <a href="www.google.com"> <span>Hausa</span> <span>Igbo</span> <span>Ede</span> <span>Yoruba</span> <span>Nigerian</span> <span>Pidgin</span></a>
              </span>
            </div>
      </div>
    </>
  );
}

export default SearchBar;
