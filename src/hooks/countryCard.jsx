import { Link } from "react-router";
import "../styles/countryCard.css";
import { useContext } from "react";
import { DataContext } from "./App";

function CountryCard(props) {

  const {bgColor} = useContext(DataContext)
  
  return (
    <div className={`countryC-container ${bgColor}`}>
      <Link to={`/${props.id}`}>
        <img src={`${props.flag.png}`} alt={`${props.name} flag`} />
      </Link>

      <div className="country-info">
        <h4 className="Name">{props.name}</h4>
        <div className="other-infos">
          <p className="population">Population: {props.population.toLocaleString()}</p>
          <p className="Region">Region: {props.region}</p>
          <p className="Capital">Capital: {props.capital}</p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
