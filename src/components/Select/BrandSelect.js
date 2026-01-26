import axios from "axios";
import { useEffect, useState } from "react";
function BrandSelect() {
  const [listBrand, setListBrand] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/brands")
      .then((res) => {
        setListBrand(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const brandSelect = () => {
    return listBrand.map((value, key) => {
      return (
        <option key={key} value={value.id}>
          {value.name}
        </option>
      );
    });
  };

  return <>{brandSelect()}</>;
}
export default BrandSelect;
