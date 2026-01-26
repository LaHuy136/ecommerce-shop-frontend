import { useState } from "react";

function useForm(inititalValues) {
  const [inputs, setInputs] = useState(inititalValues);
  const [fileErr, setFileErr] = useState("");
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleFile = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) {
      setFileErr("");
      setInputs((prev) => ({
        ...prev,
        images: [],
      }));
      return;
    }

    const arrType = ["png", "jpg", "jpeg"];

    for (let file of files) {
      const type = file.type.split("/")[1];

      if (!arrType.includes(type)) {
        setFileErr("Please choose image (png, jpg, jpeg)");
        return;
      }

      if (file.size > 1024 * 1024) {
        setFileErr("Please choose size image < 1MB");
        return;
      }
    }
    const oldImages = inputs.old_images || [];
    const deleteImages = inputs.delete_images || [];

    const total = oldImages.length - deleteImages.length + files.length;

    if (total > 3) {
      setFileErr("Maximum 3 images per product");
      return;
    }

    setFileErr("");
    setInputs((prev) => ({
      ...prev,
      images: files,
    }));
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

export default useForm;
