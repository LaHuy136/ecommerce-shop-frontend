import { useState } from "react";
import BrandSelect from "../components/selects/BrandSelect";
import CategorySelect from "../components/selects/CategorySelect";
function ProductForm({
  inputs,
  setInputs,
  handleInput,
  handleFile,
  errors,
  fileErr,
  onSubmit,
  isCreate = true,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="col-md-12">
          Product Name
        </label>
        <div className="col-md-12">
          <input
            type="text"
            name="name"
            value={inputs.name || ""}
            className="form-control form-control-line"
            onChange={handleInput}
          />
          {errors?.name && (
            <div className="invalid-feedback">{errors?.name}</div>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="price" className="col-md-12">
          Price
        </label>
        <div className="col-md-12">
          <input
            type="number"
            name="price"
            value={inputs.price || ""}
            className="form-control form-control-line"
            onChange={handleInput}
          />
          {errors?.price && (
            <div className="invalid-feedback">{errors?.price}</div>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="category_id" className="col-sm-12">
          Please choose category
        </label>
        <div className="col-sm-12">
          <select
            name="category_id"
            className="form-control form-control-line"
            onChange={handleInput}
            value={inputs.category_id}
          >
            <option value="">-- Select category --</option>
            <CategorySelect />
          </select>
          {errors?.category_id && (
            <div className="invalid-feedback">{errors?.category_id}</div>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="brand_id" className="col-sm-12">
          Please choose brand
        </label>
        <div className="col-sm-12">
          <select
            name="brand_id"
            className="form-control form-control-line"
            onChange={handleInput}
            value={inputs.brand_id}
          >
            <option value="">-- Select Brand --</option>
            <BrandSelect />
          </select>
          {errors?.brand_id && (
            <div className="invalid-feedback">{errors?.brand_id}</div>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="phone" className="col-md-12">
          Condition
        </label>
        <div className="col-md-12">
          <select
            className="form-control form-control-line"
            name="condition"
            value={inputs.condition || "new"}
            onChange={handleInput}
          >
            <option value="new">New</option>
            <option value="sale">Sale</option>
          </select>

          {errors?.condition && (
            <div className="invalid-feedback">{errors?.condition}</div>
          )}

          {inputs.condition === "sale" && (
            <div>
              <label>Sale %</label>
              <input
                type="number"
                name="sale_percent"
                min="1"
                max="100"
                value={inputs.sale_percent || ""}
                className="form-control form-control-line"
                onChange={handleInput}
              />
            </div>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="company" className="col-md-12">
          Company
        </label>
        <div className="col-md-12">
          <input
            type="text"
            name="company"
            value={inputs.company || ""}
            onChange={handleInput}
            className="form-control form-control-line"
          />
          {errors?.company && (
            <div className="invalid-feedback">{errors?.company}</div>
          )}
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-12">Product Images</label>
        <div className="col-md-12">
          <input
            type="file"
            name="images[]"
            onChange={handleFile}
            className="form-control form-control-line"
            multiple
            accept="image/*"
          />
          {fileErr && <span>{fileErr}</span>}
        </div>
      </div>

      <div className="form-group">
        <label className="col-md-12">Description</label>
        <div className="col-md-12">
          <textarea
            rows="5"
            name="description"
            value={inputs.description || ""}
            onChange={handleInput}
            className="form-control form-control-line"
          ></textarea>
          {errors?.description && (
            <div className="invalid-feedback">{errors?.description}</div>
          )}
        </div>
      </div>

      <div className="form-group">
        <div className="col-sm-12">
          <button
            type="submit"
            className="btn btn-default"
            style={{ margin: "20px 0px" }}
          >
            {isCreate ? "Create" : "Update"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default ProductForm;
