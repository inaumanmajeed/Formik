import { styled } from "@mui/material/styles";

const MainContainerWrapper = styled("div")(({ theme }) => ({
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "16px",
  width: "100%",
  height: "100%",
  overflowY: "auto",
  "& .form__main": {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    padding: "8px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "4px",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "2px",
  },
}));

const FormButtons = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",

}));

export { MainContainerWrapper, FormButtons };
