import { useState } from "react";
function BetterSignupForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    password: "",
  });

  function handleChange(evt) {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    setFormData((currData) => {
      return {
        ...currData,
        [changedField]: newValue,
      };
    });
  }

  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <div>
      <label htmlFor="firstname">First Name </label>
      <input
        type="text"
        placeholder="first name"
        value={formData.firstname}
        onChange={handleChange}
        name="firstname"
        id="firstname"
      />
      <label htmlFor="lastname">Last Name </label>
      <input
        type="text"
        placeholder="last name"
        value={formData.lastname}
        onChange={handleChange}
        name="lastname"
        id="lastname"
      />
      <label htmlFor="password">Password </label>
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
        name="password"
        id="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BetterSignupForm;
