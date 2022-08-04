import React from "react";
import { styled } from "@mui/material";
import { Box, Grid, Container } from "@mui/material";
import { height } from "@mui/system";

const Car = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "start",
  margin: "10px",
  width: "10000px",
  backgroundColor: "pink",
}));
const Care = styled("div")(({ theme }) => ({
  width: "1000px",
  height: "300px",
  backgroundColor: "red",
  margin: "10px",
}));
function Layout2() {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "700px",
          backgroundColor: "pink",
          overflowX: "auto",
        }}
      >
        <Car>
          <Care>
            <Grid Container>
              <Grid item sm={9}>
                <h1 style={{ color: "yellow", width: "600px" }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Placeat quisquam dolore nemo atque vero, delectus voluptate
                  quo culpa voluptatem commodi ea, impedit id sit, perferendis
                  modi quia temporibus itaque natus!
                </h1>
              </Grid>
            </Grid>
          </Care>
          <Care></Care>
          <Care></Care>
          <Care></Care>
          <Care></Care>
          <Care></Care>
          <Care></Care>
          <Care></Care>
          <Care></Care>
          <Care></Care>
        </Car>
      </Box>
    </div>
  );
}

export default Layout2;
