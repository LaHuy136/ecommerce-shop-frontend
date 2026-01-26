import axios from "axios";
import { useEffect, useState } from "react";
function CountrySelect() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/countries")
      .then((res) => {
        setCountries(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const countrySelect = () => {
    return countries.map((value, key) => {
      return (
        <option key={key} value={value.id}>
          {value.name}
        </option>
      );
    });
  };

  return <>{countrySelect()}</>;
}
export default CountrySelect;
