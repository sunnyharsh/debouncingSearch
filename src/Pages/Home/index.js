import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import BasicCard from "../../Componets/Card";
import { Backdrop, Grid, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import useDebounce from "../../hooks/useDebounce";

const Home = () => {
  const res = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const [seacrh, setSearch] = useState("");
  const [data, setDate] = useState([]);
  const [fileredData, setFilteredData] = useState([]);
  const [isFilter, setIsFilter] = useState(false);

  const deBouncedValue = useDebounce(seacrh, 1000);

  useEffect(() => {
    let getResturants = [];
    getResturants = res?.data.cards?.filter(
      (obj) => obj?.cardType === "seeAllRestaurants"
    );
    if (getResturants && getResturants.length) {
      setDate(getResturants[0]?.data?.data?.cards);
    }
  }, [res]);

  useEffect(() => {
    dispatch({ type: "FETCH_DATA" });
  }, []);

  // Debouncing search
  useEffect(() => {
    if (deBouncedValue) {
      let filteredData = data.filter((obj) => {
        return obj?.data?.name
          .toLowerCase()
          .includes(deBouncedValue.toLowerCase());
      });
      setFilteredData(filteredData);
      setIsFilter(true);
    } else {
      setIsFilter(false);
    }
  }, [deBouncedValue, data]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const resetField = () => {
    setSearch("");
    setIsFilter(false);
  };

  let finalData = [];
  finalData = isFilter ? fileredData : data;
  return (
    <div>
      
      <button>play</button>
      <button >pause</button>
      <Grid container justifyContent="center">
        <Grid
          item
          md={6}
          sm={6}
          xs={6}
          style={{ marginTop: "15px", position: "relative" }}
        >
          <input
            onChange={(e) => handleChange(e)}
            value={seacrh}
            data-testid="seacrh-input"
            placeholder="search hotal by name"
            style={{
              width: "100%",
              height: "35px",
              borderRadius: "8px",
              padding: "5px",
            }}
          />
          {seacrh && (
            <span style={{ position: "absolute", right: "5px", top: "5px" }}>
              <CloseIcon onClick={resetField} />
            </span>
          )}
        </Grid>
      </Grid>
      <Grid>
        <Typography style={{ textAlign: "center", paddingTop: "17px" }}>
          List of hotels
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        {finalData?.map((obj, index) => (
          <Grid
            key={index}
            style={{ margin: "20px" }}
            item
            md={2}
            sm={3}
            xs={8}
            data-testid="card-list"
          >
            <BasicCard obj={obj} />
          </Grid>
        ))}
      </Grid>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={res?.isLoading}
        size="lg"
      >
        <CircularProgress />
      </Backdrop>
    </div>
  );
};
export default Home;
