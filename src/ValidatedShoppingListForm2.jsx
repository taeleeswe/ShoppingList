import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ValidatedShoppingListForm2({ addItem }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // Add this line to access the setValue function
  } = useForm({ mode: "onChange" });

  const handleRegistration = (formData) => {
    console.log("FORM SUBMITTED");
    console.log(formData);
    addItem(formData); // Adding the submitted form data to the shopping list
    setValue("product", ""); // Reset the product field after successful submission
    setValue("quantity", 0); // Reset the quantity field after successful submission
  };

  const handleError = (errors) => {};

  const registerOptions = {
    product: { required: "Product cannot be blank" },
    quantity: {
      required: "Quantity is required",
      min: {
        value: 1,
        message: "Quantity must be greater than 0",
      },
      max: {
        value: 10,
        message: "Quantity must be less than 10",
      },
    },
  };

  return (
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <div>
        <label htmlFor="product">Product</label>
        <input
          {...register("product", registerOptions.product)}
          type="text"
          id="product"
        />
        <small className="text-danger">
          {errors?.product && errors.product.message}
        </small>
      </div>

      <div>
        <label htmlFor="quantity">Quantity</label>
        <input
          {...register("quantity", registerOptions.quantity)}
          type="number"
          id="quantity"
        />
        <small className="text-danger">
          {errors?.quantity && errors.quantity.message}
        </small>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
