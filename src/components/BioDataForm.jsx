import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { formDefaultValue } from "../constants";
import { formFields } from "../utils";

const BioDataForm = ({ onCreate, selectedUser, resetSelectedUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: formDefaultValue });
  const {
    firstName,
    lastName,
    email,
    phone1,
    phone2,
    phone3,
    address1,
    address2,
    city,
    state,
    zipCode,
    country,
    qualification,
    comments,
  } = formFields;

  useEffect(() => {
    if (selectedUser) {
      const { phoneNumber, ...formData } = selectedUser;
      reset({
        ...formData,
        phone1: phoneNumber.substring(0, 3),
        phone2: phoneNumber.substring(3, 7),
        phone3: phoneNumber.substring(7, 10),
      });
    }
  }, [selectedUser, reset]);

  console.log(errors, Object.keys(errors).length);

  const onSubmit = (data) => {
    onCreate(data, reset);
  };

  return (
    <>
      <h1 className="display-5">
        <strong>Bio Data</strong>
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-2">
          <label>
            Name <span className="text-danger">*</span>
          </label>
          <div className="row">
            <div className="col-6">
              <input
                {...register(firstName.key, firstName.validation)}
                type="text"
                className="form-control"
                placeholder="First"
              />
            </div>
            <div className="col-6">
              <input
                {...register(lastName.key, lastName.validation)}
                type="text"
                className="form-control"
                placeholder="Last"
              />
            </div>
          </div>
        </div>

        <div className="form-group mb-2">
          <label>
            Email <span className="text-danger">*</span>
          </label>
          <input
            {...register(email.key, email.validation)}
            type="email"
            className="form-control"
            placeholder="E-mail"
          />
        </div>

        <div className="form-group mb-2">
          <label>
            Phone Number <span className="text-danger">*</span>
          </label>
          <div className="row">
            <div className="col-3">
              <input
                {...register(phone1.key, phone1.validation)}
                type="tel"
                className="form-control"
              />
            </div>
            <div className="col-1">-</div>
            <div className="col-4">
              <input
                {...register(phone2.key, phone2.validation)}
                type="tel"
                className="form-control"
              />
            </div>
            <div className="col-1">-</div>
            <div className="col-3">
              <input
                {...register(phone3.key, phone3.validation)}
                type="tel"
                className="form-control"
              />
            </div>
          </div>
        </div>

        <div className="clearfix"></div>

        <div className="form-group mb-2">
          <label>
            Address <span className="text-danger">*</span>
          </label>
          <div className="row g-3">
            <div className="col-12">
              <input
                {...register(address1.key, address1.validation)}
                type="text"
                className="form-control"
                placeholder="Line 1"
              />
            </div>
            <div className="col-12">
              <input
                {...register(address2.key, address2.validation)}
                type="text"
                className="form-control"
                id=""
                placeholder="Line 2"
              />
            </div>
            <div className="col-6">
              <input
                {...register(city.key, city.validation)}
                type="text"
                className="form-control"
                placeholder="City"
              />
            </div>
            <div className="col-6">
              <input
                {...register(state.key, state.validation)}
                type="text"
                className="form-control"
                placeholder="State"
              />
            </div>
            <div className="col-6">
              <input
                {...register(zipCode.key, zipCode.validation)}
                type="text"
                className="form-control"
                placeholder="Zip Code"
              />
            </div>
            <div className="col-6">
              <input
                {...register(country.key, country.validation)}
                type="text"
                className="form-control"
                placeholder="Country"
              />
            </div>
          </div>
        </div>

        <div className="form-group mb-2">
          <label>
            Write Your qualification <span className="text-danger">*</span>
          </label>
          <div className="col-12">
            <input
              {...register(qualification.key, qualification.validation)}
              type="text"
              className="form-control"
              id=""
              placeholder="Add your qualification"
            />
          </div>
          {/* <!-- <input type="text" className="form-register text" id="" placeholder="Add your qualification"> <span><img alt="" src="images/plus.png" className="add"></span> --> */}
        </div>

        <div className="form-group mb-2">
          <label>
            Comment <span className="text-danger">*</span>
          </label>
          <div className="col-12">
            <textarea
              {...register(comments.key, comments.validation)}
              className="form-control"
            ></textarea>
          </div>
        </div>

        <div className="col-12 my-4">
          <button type="submit" className="btn btn-success w-100">
            Submit
          </button>
        </div>
      </form>
      {!!Object.keys(errors).length && (
        <div className="alert alert-danger">
          {Object.keys(formDefaultValue).map((field) => (
            <ErrorMessage
              key={field}
              errors={errors}
              name={field}
              render={({ message }) => <p>{message}</p>}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default BioDataForm;
