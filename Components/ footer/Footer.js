import React from "react";
import { styled } from "@mui/material";
import { Box, Container, Grid, List } from "@mui/material";
import Image from "next/image";
import Icon from "../ footer/ assest/sm.png";
const Head = styled("div")(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Roboto",
  fontWeight: 300,
  lineHeight: "34px",
  letterSpacing: "0px",
  fontSize: "24px",
  marginTop: "80px",

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "18px",
    letterSpacing: "0em",
    textAlign: "center",
  },
}));
const Head2 = styled("div")(({ theme }) => ({
  fontFamily: "Times",
  fontSize: "30px",
  fontWeight: 700,
  lineHeight: "36px",
  letterSpacing: "0em",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "19px",
    letterSpacing: "0em",
    textAlign: "center",
  },
}));
const Head3 = styled("div")(({ theme }) => ({
  fontFamily: "Times",
  fontSize: "30px",
  fontWeight: 700,
  lineHeight: "36px",
  letterSpacing: "0em",
  textAlign: "center",
  marginTop: "40px",

  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "17px",
    letterSpacing: "0em",
    textAlign: "center",
  },
}));
const Para = styled("div")(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: "24px",
  fontWeight: 300,
  lineHeight: "34px",
  letterSpacing: "0px",
  textAlign: "center",
  marginTop: "16px",

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "18px",
    letterSpacing: "0em",
    textAlign: "center",
  },
}));
function Footer() {
  return (
    <div>
      <Container>
        <Head>Get in touch with us</Head>

        <Grid container>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            <Head2> We are a design company that emotes and innovates.</Head2>
            <Para>
              We take responsibility to increase your business tremendously with
              technological advantage and support you to stand out uniquely and
              consistently in the market.
            </Para>
            <Head3>Address</Head3>
            <Para>
              75, S W Boag Rd, CIT Nagar East, T.Nagar, Chennai, Tamil Nadu
              600017
            </Para>
            <Head3>Contact No</Head3>
            <Para>+91 9715626138</Para>
          </Grid>
          <Grid item xs={2} sm={2}></Grid>
        </Grid>
        <Grid
          container
          sx={{
            marginTop: "20px",
          }}
        >
          <Grid item xs={3} sm={5}></Grid>
          <Grid item xs={3} sm={2}>
            <Image src={Icon} />
          </Grid>
          <Grid item xs={3} sm={5}></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
