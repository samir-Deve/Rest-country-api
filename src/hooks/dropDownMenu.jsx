import "../styles/dropDownMenu.css";
import { useState, useContext } from "react";
import { DataContext } from "./App";

function DropDownMenu() {
  const { bgColor, selectedFilt, setSelectedFil,check } = useContext(DataContext);
  const [Menu, setMenu] = useState([
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ]);

  function handleMenuClick() {
    const menues = document.querySelectorAll(".li");

    Array.from(menues).forEach((li, index) => {
      li.addEventListener("click", () => {
        handleMenueAdd(li);
      });
    });
  }

  function handleMenueAdd(liContent) {
    setSelectedFil(liContent.innerText);
  }

  function toggleMenue() {
    const menueBtn = document.querySelector(".menue");
    const toggleMenuIconCont = document.querySelector(".F-btn");
    toggleMenuIconCont.classList.toggle("toggle");
    menueBtn.classList.toggle("show");
    handleMenuClick();
  }

  function handleFiltRegion(e) {
    setSelectedFil(e.target.id);
    toggleMenue();
    check()
  }
  return (
    <div className={`M-container ${bgColor}`}>
      <div className="F-btn" onClick={toggleMenue}>
        <p className="F-btn-text">
          {selectedFilt === "" ? "Filter by Region" : selectedFilt}
        </p>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <ul className="menue">
        {Menu.map((eachLi, i) => (
          <li
            key={i}
            onClick={(e) => handleFiltRegion(e)}
            className="li"
            id={eachLi}
          >
            {eachLi}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDownMenu;
