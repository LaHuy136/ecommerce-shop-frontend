import axios from "axios";
import { useEffect, useState } from "react";
function CategorySelect() {
  const [listCategory, setListCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/categories")
      .then((res) => {
        setListCategory(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const categorySelect = () => {
    return listCategory.map((value, key) => {
      return (
        <option key={key} value={value.id}>
          {value.name}
        </option>
      );
    });
  };

  return <>{categorySelect()}</>;
}
export default CategorySelect;
