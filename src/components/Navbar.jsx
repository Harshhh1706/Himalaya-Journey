import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Navbar() {
  return (
    <AppBar
  position="absolute"
  sx={{
    background: "transparent",
    boxShadow: "none",
    top: 0,
    left: 0,
    width: "100%",
    color: "white",
    zIndex: 9999,
  }}
>
      <Toolbar sx={{ width: "100%" }}>

      <Typography
  variant="h6"
  sx={{
    flexGrow: 1,
    fontWeight: "bold",
    letterSpacing: "2px",
  }}
> 
          Tales of Himalaya
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
        <Button color="inherit">Journey</Button>
        <Button color="inherit">Gallery</Button>
        <Button color="inherit">About</Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;