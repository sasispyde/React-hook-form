import { useState } from "react";
import { useForm } from "react-hook-form";

const BasicReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();

  const [state, setState] = useState({});

  const handleFormSubmit = (formData) => {
    console.log(formData);
    setState(formData);
  };

  return (
    <>
      <div className="row">
        <div className="col" style={{ overflowY: "scroll", maxHeight: "85vh" }}>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="form-group">
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                {...register("username")}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                {...register("password")}
              />
            </div>
            <div className="form-group">
              <label>Profile</label>
              <input
                className="form-control"
                type="file"
                {...register("profile")}
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                className="form-control"
                type="number"
                {...register("age")}
              />
            </div>
            <div className="form-group">
              <label>Favourite color</label>
              <select className="form-control" {...register("fav_color")}>
                <option value="">Select Favourite Color</option>
                <option value="1">Rose</option>
                <option value="2">Pink</option>
                <option value="3">Orange</option>
                <option value="4">Tan</option>
                <option value="5">Gray</option>
                <option value="6">Black</option>
              </select>
            </div>
            <div className="form-group form-check">
              <input
                className="form-check-input"
                type="checkbox"
                {...register("terms_and_condition")}
              />
              <label>Accept Terms & Condition</label>
            </div>
            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
        <div className="col" style={{ overflowY: "scroll", maxHeight: "85vh" }}>
          <pre>{JSON.stringify(state, " ", 6)}</pre>
        </div>
      </div>
    </>
  );
};

export default BasicReactHookForm;
