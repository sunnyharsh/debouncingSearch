import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { getDetail } from "../store/features/resturantDetailSlice";

const BasicCard = ({ obj }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getDetail(obj));
  };
  return (
    <NavLink
      to={`/restaurant/details/${obj?.data?.id}`}
      state={{ obj: obj }}
      style={{ textDecoration: "none" }}
    >
      <Card
        sx={{
          minWidth: "100%",
          height: "145px",
          boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "10px",
        }}
        onClick={handleClick}
      >
        <CardContent style={{ padding: "0px", height: "100%" }}>
          <Grid
            height={"100%"}
            container
            justifyContent="space-between"
            flexDirection="column"
          >
            <Grid>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {obj?.data?.id}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {obj?.data?.name}
              </Typography>
            </Grid>
            <Grid>
              <Typography>Hotal Rating:- {obj?.data?.avgRating}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </NavLink>
  );
};
export default BasicCard;
