import { styled } from "@mui/material/styles";

const Container = styled("div")(({ theme }) => ({
  minHeight: "100dvh",
  height: "100%",
  minWidth: "100dvw",
  width: "100%",
}));

const NavBar = styled("div")(({ theme }) => ({
  height: "60px",
  width: "100%",
  backgroundColor: "#495057",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  padding: "0 16px",
  fontSize: "16px",
  fontWeight: 500,
  letterSpacing: "0.5px",
  textTransform: "uppercase",
  userSelect: "none",
  "& a": {
    color: "#fff",
    textDecoration: "none",
    margin: "0 8px",
    transition: "color 0.3s",
    "&:hover": {
      color: "#ddd",
    },
  },
  [theme.breakpoints.down("md")]: {
    height: "56px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "48px",
  },
  [theme.breakpoints.down("xs")]: {
    height: "40px",
  },
}));

const SideBar = styled("div")(({ theme }) => ({
  height: "calc(100% - 60px)",
  width: "100px",
  backgroundColor: "#495057",
  color: "#fff",
  position: "fixed",
  bottom: 0,
  left: 0,
  zIndex: 1000,
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  padding: "16px",
  fontSize: "16px",
  fontWeight: 500,
  letterSpacing: "0.5px",
  textTransform: "uppercase",
  userSelect: "none",
  [theme.breakpoints.down("md")]: {
      width: "80px",
      height: "calc(100% - 56px)",
  },
  [theme.breakpoints.down("sm")]: {
      width: "60px",
        height: "calc(100% - 48px)",
  },
  [theme.breakpoints.down("xs")]: {
      width: "40px",
        height: "calc(100% - 40px)",
  },
}));

const ChildrenWrapper = styled("div")(({ theme }) => ({
  width: "calc(100% - 100px)",
  height: "calc(100% - 60px)",
  position: "fixed",
  bottom: 0,
  right: 0,
  zIndex: 0,
  backgroundColor: "#f9f9f9",
  [theme.breakpoints.down("md")]: {
    width: "calc(100% - 80px)",
    height: "calc(100% - 56px)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "calc(100% - 60px)",
    height: "calc(100% - 48px)",
  },
  [theme.breakpoints.down("xs")]: {
    width: "calc(100% - 40px)",
    height: "calc(100% - 40px)",
  },
}));

export { Container, NavBar, SideBar, ChildrenWrapper };
