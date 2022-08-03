import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Eye from "next/image";
import Icon1 from "../ pro/asset/eyesicon.png";
import Bd from "../ pro/asset/Dbo.png";
const Item = styled("div")(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: "52px",
  fontWeight: 400,
  lineHeight: "68px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "white",
  position: "relative",
  top: "274px",

  [theme.breakpoints.down("sm")]: {
    fontSize: "26px",
    fontWeight: 400,
    lineHeight: "34px",
    letterSpacing: "0em",
    textAlign: "center",
    color: "white",
    position: "relative",
    top: "183px",
  },
}));
const Span = styled("span")(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: "52px",
  fontWeight: 700,
  lineHeight: "68px",
  letterSpacing: "0em",
  textAlign: "left",

  [theme.breakpoints.down("sm")]: {
    fontSize: "26px",
    fontweight: 700,
    lineHeight: "34px",
    letterSpacing: "0em",
    textAlign: "center",
  },
}));

const Para = styled("div")(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: "24px",
  fontWeight: 400,
  lineHeight: "34px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "white",
  position: "relative",
  top: "283px",

  [theme.breakpoints.down("sm")]: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "21px",
    letterSpacing: "0em",
    textAlign: "center",
    position: "relative",
    top: "193px",
  },
}));

const Boxm = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    position: "relative",
    top: "263px",
  },
}));

const Boxm1 = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "133px",
    height: "89px",
    backgroundColor: "#D02C75",
    borderRadius: "8px",
  },
}));
const Icon = styled("div")(({}) => ({
  position: "absolute",
  left: "40px",
  top: "15px",
}));
const Boxm2 = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "133px",
    height: "89px",
    backgroundColor: "#F4812E",
    borderRadius: "8px",
    position: "relative",
    left: "10px",
  },
}));
const Boxm3 = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "133px",
    height: "89px",
    backgroundColor: "#582DD2",
    borderRadius: "8px",
    position: "relative",
    top: "10px",
  },
}));

function Pro() {
  return (
    <div>
      <Box
        sx={{
          height: "799px",
          maxWidth: "100%",
          backgroundColor: "#1A0E60",
        }}
      >
        <Container>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <Item>
                Extremely intellectual <Span>& Challenging Projects</Span>
              </Item>
              <Para>
                Our ultimate moto is fulfill the demand of the buyers by making
                them satisfied with proper file delivery.
              </Para>
              <Boxm>
                <Boxm1>
                  <Icon>
                    <Eye src={Icon1} />
                  </Icon>
                </Boxm1>
                 <Boxm2></Boxm2> <Boxm3></Boxm3> 
              </Boxm>
            </Grid>
            <Grid item xs={1}></Grid>

            <Grid item xs={5}>
              pppp
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          height: "799px",
          maxWidth: "100%",
          backgroundColor: "red",
        }}
      >
        <Grid container>
          <Container>
            <Grid container>
              <Grid item xs={12} sm={2}>
                llll
              </Grid>
              <Grid item xs={12} sm={4}></Grid>
              <Grid item xs={12} sm={6}></Grid>
            </Grid>
          </Container>
        </Grid>
      </Box>
      <Box>
        <container></container>
      </Box>
    </div>
  );
}

export default Pro;
