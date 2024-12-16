import "../styles/searchBar.css"
import { useContext } from "react";
import { DataContext } from "./App";

function SearchBar() {
	const {bgColor, search, handleSetSearch} = useContext(DataContext)

	return (
		<div className={`searchB-container ${bgColor}`}>
			<i className="fas fa-search"></i>  
			<input 
			onChange={(e) => handleSetSearch(e)}
			
			type="text" 
			placeholder="Search for a country kut jon"
			/>
		</div>
	);
}

export default SearchBar;