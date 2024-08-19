import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  age: Yup.number().required("Age is required").positive().integer(),
});

export default ValidationSchema;
