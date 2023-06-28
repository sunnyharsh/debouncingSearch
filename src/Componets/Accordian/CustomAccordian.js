import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import accordianData from "../../data/accordianData.json";

const CustomAccordian = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <Grid className="wrapper">
      <Grid className="accordian">
        {accordianData?.data?.map((obj, i) => (
          <Grid className="item" key={i}>
            <Grid className="titleContainer" onClick={() => toggle(i)}>
              <Typography className="title">{obj.label}</Typography>
              <Grid className="line" />
              <span>
                {selected === i ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowUpIcon />
                )}
              </span>
            </Grid>
            <Grid className={selected === i ? "contentShow" : "content"}>
              <Typography>Content:-</Typography>
              <Typography>{obj.content}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default CustomAccordian;
