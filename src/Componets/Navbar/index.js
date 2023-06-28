import { Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Grid className="header" container justifyContent="space-between">
        <Grid item>
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/insta"> Instamart</NavLink>
        </Grid>
        <Grid>
          <Typography>Sunny</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;
