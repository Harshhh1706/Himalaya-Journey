import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import LandscapeIcon from "@mui/icons-material/Landscape";


function Navbar() {

  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);


  /* =========================
     SCROLL DETECTION
  ========================= */

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  /* =========================
     NAVIGATION
  ========================= */

  const handleNavigation = (item) => {

    /* JOURNEY */

    if (item === "Journey") {

      // If already on homepage
      if (window.location.pathname === "/") {

        document
          .getElementById("journey")
          ?.scrollIntoView({
            behavior: "smooth",
          });

      } else {

        // Go home first
        navigate("/");

        setTimeout(() => {

          document
            .getElementById("journey")
            ?.scrollIntoView({
              behavior: "smooth",
            });

        }, 100);

      }

    }


    /* GALLERY */

    if (item === "Gallery") {

      if (window.location.pathname === "/") {

        document
          .getElementById("destinations")
          ?.scrollIntoView({
            behavior: "smooth",
          });

      } else {

        navigate("/");

        setTimeout(() => {

          document
            .getElementById("destinations")
            ?.scrollIntoView({
              behavior: "smooth",
            });

        }, 100);

      }

    }


    /* ABOUT */

    if (item === "About") {

      navigate("/about");

      window.scrollTo({
        top: 0,
        behavior: "auto",
      });

    }

  };


  /* =========================
     LOGO CLICK
  ========================= */

  const handleLogoClick = () => {

    if (window.location.pathname !== "/") {

      navigate("/");

    } else {

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    }

  };


  return (

    <AppBar
      position="fixed"

      sx={{
        background: scrolled
          ? "rgba(20, 25, 22, 0.85)"
          : "transparent",

        backdropFilter: scrolled
          ? "blur(10px)"
          : "none",

        boxShadow: scrolled
          ? "0 4px 20px rgba(0, 0, 0, 0.15)"
          : "none",

        top: 0,
        left: 0,

        width: "100%",

        color: "white",

        zIndex: 9999,

        transition: "all 0.4s ease",
      }}
    >

      <Toolbar
        sx={{
          width: "100%",
          padding: "18px 8%",
          position: "relative",
        }}
      >


        {/* =========================
            LOGO
        ========================= */}

        <Box
          onClick={handleLogoClick}

          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,

            cursor: "pointer",
          }}
        >

          <LandscapeIcon
            sx={{
              fontSize: 28,
              color: "#d8e6df",
            }}
          />

          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 600,

              letterSpacing: "2px",

              lineHeight: 1,
            }}
          >
            WANDER NORTH
          </Typography>

        </Box>


        {/* =========================
            CENTER NAVIGATION
        ========================= */}

        <Box
          sx={{
            background:
              "rgba(255, 255, 255, 0.08)",

            backdropFilter: "blur(8px)",

            border:
              "1px solid rgba(255, 255, 255, 0.15)",

            borderRadius: "30px",

            padding: "3px 5px",

            position: "absolute",

            left: "50%",

            transform:
              "translateX(-50%)",

            display: "flex",

            alignItems: "center",

            gap: 1,
          }}
        >


          {["Journey", "Gallery", "About"].map(
            (item) => (

              <Button
                key={item}

                color="inherit"

                onClick={() =>
                  handleNavigation(item)
                }

                sx={{
                  position: "relative",

                  minWidth: "auto",

                  padding: "8px 14px",

                  fontSize: "11px",

                  fontWeight: 500,

                  letterSpacing: "1.5px",

                  textTransform: "uppercase",

                  opacity: 0.8,

                  "&:hover": {
                    background:
                      "transparent",

                    opacity: 1,
                  },

                  "&::after": {
                    content: '""',

                    position: "absolute",

                    left: "14px",
                    right: "14px",

                    bottom: "3px",

                    height: "1px",

                    background: "white",

                    transform:
                      "scaleX(0)",

                    transformOrigin:
                      "center",

                    transition:
                      "transform 0.3s ease",
                  },

                  "&:hover::after": {
                    transform:
                      "scaleX(1)",
                  },
                }}
              >

                {item}

              </Button>

            )
          )}

        </Box>

      </Toolbar>

    </AppBar>

  );

}


export default Navbar;  