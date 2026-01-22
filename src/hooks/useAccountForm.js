import { useState } from "react";

function useAccountForm(inititalValues) {
  const [inputs, setInputs] = useState(inititalValues);
  const [fileErr, setFileErr] = useState("");
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const arrType = ["png", "jpg", "jpeg"];
    let type = file.type.split("/")[1];

    if (!arrType.includes(type)) {
      setFileErr("Please choose image (png, jpg, jpeg)");
      setFile("");
      return;
    }

    if (file.size > 1024 * 1024) {
      setFileErr("Please choose size image < 1MB");
      setFile("");
      return;
    }

    setFileErr("");
    setFile(file);
  };

  return {
    inputs,
    setInputs,
    errors,
    setErrors,
    file,
    fileErr,
    handleInput,
    handleFile,
  };
}

export default useAccountForm;
