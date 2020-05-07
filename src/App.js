import React, { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import Logo from "./images/Logo.png";
import styles from "./App.module.css";
import { fetchData } from "./api";

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const getData = async () => {
      const dataResponsed = await fetchData();
      setData(dataResponsed);
    };

    getData();
  }, []);

  const handleCountryChanged = async (country) => {
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry(country);
  };

  return (
    <div className={styles.container}>
      <img src={Logo} alt="COVID-19" className={styles.image} />
      <Cards data={data} />
      <CountryPicker
        handleCountryChanged={handleCountryChanged}
        fetchData={fetchData}
      />
      <Chart country={country} data={data} />
      <span className={styles.span}>
        By{" "}
        <a href="https://mohammadqp-devcode.netlify.app/" target="_blank">
          Mohammad Ahmad 🙆
        </a>{" "}
      </span>
    </div>
  );
};

export default App;
