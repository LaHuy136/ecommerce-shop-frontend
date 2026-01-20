import axios from "axios";
import { useEffect, useState } from "react";
function CountrySelect() {
  const [listCountry, setListCountry] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/countries")
      .then((res) => {
        setListCountry(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const countrySelect = () => {
    return listCountry.map((value, key) => {
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
