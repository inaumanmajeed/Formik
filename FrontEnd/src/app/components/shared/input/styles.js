import { styled } from "@mui/material/styles";

const CustomInputMainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  width: "48%",
  minWidth: "350px",
  position: "relative",
  marginBottom: "12px",

  "& label": {
    fontSize: "14px",
    fontWeight: "400",
    color: "#49759C",
  },
  "& input": {
    padding: "8px",
    fontSize: "1rem",
    border: "1px solid #CED4DA",
    borderRadius: "8px",
    outline: "none",
    marginbottom: "4px",
    "&::placeholder": {
        color: "#6C757D80",
        fontSize: "12px",
    },
  },
  "& .error": {
    fontSize: "10px",
    color: "red",
    position: "absolute",
    bottom: "-15px",
    zIndex: "1",
  },
}));

export { CustomInputMainContainer };
