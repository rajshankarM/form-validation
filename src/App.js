import "./App.css";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from '@mui/material/Button';

const App = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .strict()
        .trim()
        .required("Name is required")
        .min(5, "Min 5 Characters required")
        .max(15, "Max 15 Characters Only"),
      email: yup
        .string()
        .email()
        .required("Email is required"),
      number:yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid")
        .required()
    }),
    onSubmit: (userInputData) => {
      console.log(userInputData);
    },
  });
  return (
    <div className="container">
      <form autoComplete="off" onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <h1 className="heading">Register Form</h1>
          <label className="lable">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name ? (
            <div className="text-danger">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label className="lable">Email</label>
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="Enter Your Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div className="text-danger">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label className="lable">Number</label>
          <input
            className="form-control"
            type="number"
            name="number"
            placeholder="Enter Your Number"
            onChange={formik.handleChange}
            value={formik.values.number}
          />
          {formik.errors.email ? (
            <div className="text-danger">{formik.errors.number}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label className="lable">Country</label>
          <input
            className="form-control"
            type="text"
            name="country"
            placeholder="Enter Your Country"
            onChange={formik.handleChange}
            value={formik.values.country}
          />
          {formik.errors.country ? (
            <div className="text-danger">{formik.errors.country}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label className="lable">State</label>
          <input
            className="form-control"
            type="text"
            name="state"
            placeholder="Enter Your State"
            onChange={formik.handleChange}
            value={formik.values.state}
          />
          {formik.errors.state ? (
            <div className="text-danger">{formik.errors.state}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label className="lable">City</label>
          <input
            className="form-control"
            type="text"
            name="city"
            placeholder="Enter Your City"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
          {formik.errors.city ? (
            <div className="text-danger">{formik.errors.city}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label className="lable">Message</label>
          <input
            className="form-control"
            type="text"
            name="message"
            placeholder="Message"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          {formik.errors.message ? (
            <div className="text-danger">{formik.errors.message}</div>
          ) : null}
        </div>
       
        <Button type="submit" className="button" variant="contained">Submit</Button>
      </form>
    </div>
  );
};

export default App;
