import { Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Restaurant = (props) => {
  const res = useSelector((state) => state);
  let location = useLocation();
  let data = location.state;
  return (
    <>
      <Grid container justifyContent="center">
        <Grid>
          <Typography
            style={{ padding: "28px", fontSize: "30px", fontWeight: "bold" }}
          >
            Restauran Details
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid
          item
          xs={6}
          style={{
            border: " 1px solid grey",
            borderRadius: "7px",
            padding: "38px",
          }}
        >
          <Typography
            style={{ fontSize: "25px", fontWeight: "bold" }}
            component="p"
          >
            {data?.obj?.data?.name}
          </Typography>
          <Typography style={{ fontSize: "18px", fontWeight: 300 }}>
            Resturent id: {data?.obj?.data?.id}
          </Typography>
          <Typography style={{ fontSize: "18px", fontWeight: 300 }}>
            Average rating of {data?.obj?.data?.name} is{" "}
            <span style={{ fontWeight: "bold" }}>
              {data?.obj?.data?.avgRating}
            </span>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default Restaurant;
