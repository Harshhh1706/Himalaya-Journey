import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Navbar() {
  return (
    <AppBar position="absolute"
    sx={{
      background: "transparent",
      boxShadow: "none"
    }}>
      <Toolbar>

        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
           Tales of Himalaya
        </Typography>

        <Box>
          <Button color="inherit">Overview</Button>
          <Button color="inherit">Journey</Button>
          <Button color="inherit">Gallery</Button>
          <Button color="inherit">Places</Button>
          <Button color="inherit">Expenses</Button>
          <Button color="inherit">Memories</Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;