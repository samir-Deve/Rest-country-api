import { useState, useContext } from "react";
import SearchBar from "./searchBar";
import DropDownMenu from "./dropDownMenu";
import CountryCard from "./countryCard";
import { DataContext } from "./App";

function Countries() {
  const [filt, setFilt] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const {
    data,
    bgColor,
    handleBgColor,
    search,
    handleSetSearch,
    selectedFilt,
    setSelectedFil,
    filtData,
  } = useContext(DataContext);

  return (
    <div className="body">
      <div className="searchB-filtering">
        <SearchBar />
        <DropDownMenu />
      </div>
      <div className="country-cards">
        {filtData  ? (
          filtData.map((each) => {
            
            return (
              <CountryCard
                key={each.numericCode}
                id={each.numericCode}
                flag={each.flags}
                name={each.name}
                population={each.population}
                region={each.region}
                capital={each.capital}
              />
            );
          })
        ) : data  ? (
          data.map((each, index) => {
            const { flags, name, population, region, capital, numericCode} = each;
            return (
              <CountryCard
                key={numericCode}
                id={numericCode}
                flag={flags}
                name={name}
                population={population}
                region={region}
                capital={capital}
              />
            );
          })
        ) : (
          <h1>No Data</h1>
        )}
      </div>
    </div>
  );
}

export default Countries;
