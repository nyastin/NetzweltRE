import React, { useContext, useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Person, Password } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const [error, setError] = useState("");
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      //Validation of credentials
      username: Yup.string().required("A username is required."),
      password: Yup.string()
        .min(8, "Enter at least 8 characters.")
        .required("Please enter your password."),
    }),
    // handle click event of login button
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      setError(null);
      resetForm({ values: "" });
      console.log(values);
      const response = await axios
        .post("https://www.mecallapi.com/api/login", values)

        .catch((err) => {
          if (err && err.response) setError(err.response.data.message);
        });
      if (response) {
        alert("Welcome back, " + response.data.user.fname + "!");
        Cookies.set("user", "name");
        history.push("/Dashboard");
      } else {
        alert("Invalid Account Credentials!");
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <br />
        <TextField
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <IconButton>
                  <Person />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {formik.touched.username && formik.errors.username ? (
          <div>{formik.errors.username}</div>
        ) : null}
        <br />
        <TextField
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <IconButton>
                  <Password />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
        <br />
        <br />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
export default Login;
