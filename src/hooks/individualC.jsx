import { useParams, Link } from "react-router";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../hooks/App.jsx";

import "../styles/individualC.css";

function IndividualC() {
  const { Id } = useParams();
  const { data, bgColor } = useContext(DataContext);
  const [corresData, setCorresData] = useState(null);

  const numericId = Id;

  useEffect(() => {
    if (data) {
      const foundData = data.find(
        (item) => Number(item.numericCode) === Number(numericId)
      );
      setCorresData(foundData || null);
    }
  }, [data, numericId]);

  function borderCId(alph3code) {
    const borderCountry = data
      ? data.filter((country) => country.alpha3Code === alph3code)
      : null;
    const pulledOb = borderCountry ? borderCountry[0] : null;
    console.log(pulledOb ? pulledOb.numericCode : null);
    return pulledOb ? pulledOb.numericCode : null;
  }
  borderCId();

  return corresData ? (
    <div className={`indi-C-container ${bgColor}`}>
      <Link className="link-component" to="/">
        <button className="back-btn single-btn">
          <i className="fa-solid fa-arrow-left"></i>
          <p>Back</p>
        </button>
      </Link>
      <div className="indi-C-subContainer">
        <div className="indi-C-img">
          <img
            src={corresData.flags.svg}
            alt={`${corresData.name} flag`}
          />
        </div>
        <div className="indi-C-info">
          <div className="sub-info">
            <div className="info-text-cont">
              <h1 className="C-name">{corresData.name}</h1>
              <div>
                <h5>Native Name:</h5> {corresData.nativeName}
              </div>
              <div>
                <h5>Population:</h5> {corresData.population.toLocaleString()}
              </div>
              <div>
                <h5>Region:</h5> {corresData.region}
              </div>
              <div>
                <h5>Subregion:</h5> {corresData.subregion}
              </div>
              <div>
                <h5>Capital:</h5> {corresData.capital}
              </div>
            </div>
            <div className="languages-container info-text-cont">
              <div>
                <h5>Top Level Domain:</h5>{" "}
                {corresData.topLevelDomain.join(", ")}
              </div>
              <div>
                <h5>Currencies:</h5>
                {corresData.currencies?.map((currency, i) => (
                  <p key={i}>
                    {currency.name} ({currency.code})
                  </p>
                )) || <p>No currencies available</p>}
              </div>
              <div className="languages">
                <h5>Languages:</h5>{" "}
                {corresData.languages?.map((each, i) => (
                  <p key={i}>{each.name}</p>
                )) || <p>No languages available</p>}
              </div>
            </div>
          </div>
          <div className="bordering-C">
            <p className="bordering-C-text">Border Countries:</p>
            {corresData.borders?.map((border, i) => (
              <Link to={`/${borderCId(border)}`} key={i}>
                <button key={i} className="single-btn">
                  {border}
                </button>
              </Link>
            )) || <p>No bordering countries available</p>}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>No Data</h1>
  );
}

export default IndividualC;
