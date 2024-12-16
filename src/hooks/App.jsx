import { useState, useEffect, createContext } from "react";
import Header from "./header";
import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Countries from "./countries";
import IndividualC from "./individualC";
import Creator from "./personelInfo";

export const DataContext = createContext(null);

function App() {
  const [data, setData] = useState();
  const [bgColor, setBgColor] = useState("Dark");
  const [search, setSearch] = useState("");
  const [selectedFilt, setSelectedFil] = useState("");
  const [filtData, setFiltData] = useState(null)

  useEffect(() => {
    fetch("/public/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  function handleBgColor() {
    setBgColor(bgColor === "Dark" ? "Light" : "Dark");
  }


  function handleSetSearch(e) {
    setSearch(e.target.value);
    const res = data.filter((item) =>
      e.target.value.toLowerCase() === ""
        ? item
        : item.name.toLowerCase().includes(e.target.value)
    );
    setFiltData(res)
  }

  function check() {
    setFiltData(data.filter((coutry) => coutry.region === selectedFilt))
  }



  return (
    <BrowserRouter>
      <DataContext.Provider
        value={{
          data,
          bgColor,
          handleBgColor,
          search,
          handleSetSearch,
          selectedFilt,
          setSelectedFil,
          filtData,
          check,
        }}
      >
        <div className={`main-container ${bgColor}`}>
          <Header />
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route path={`/:Id`} element={<IndividualC />}/>
          </Routes>
          <Creator />
        </div>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
