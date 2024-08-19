import { styled } from "@mui/material/styles";

const FormContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "8px",
  width: "100%",
  flexGrow: 1,
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
}));

export { FormContainer };
