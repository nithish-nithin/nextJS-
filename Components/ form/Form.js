import React from "react";
import { Input, styled } from "@mui/material";
import { Box, Container, Grid, List } from "@mui/material";
import Image from "next/image";
import styles from "../ form/Form.module.css";
const Head = styled("div")(({ theme }) => ({
  fontFamily: "Times New Roman",
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "29px",
  letterSpacing: "0em",
  textAlign: "left",
  marginTop: "80px",

  [theme.breakpoints.down("sm")]: {
    fontFamily: "Times",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: "22px",
    letterSpacing: "0em",
    textAlign: "center",
  },
}));
const Headpara = styled("div")(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: "28px",
  fontWeight: 300,
  lineHeight: "39px",
  letterSpacing: "0px",
  textAlign: "left",
  marginTop: "10px",

  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    fontWeight: 300,
    lineHeight: "20px",
    letterSpacing: "0px",
    textAlign: "center",
  },
}));
const Inputo = styled("input")(({ theme }) => ({
  border: "none",
  outline: "none",
  background: "transparent",
  borderBottom: "solid 1px",
  width: "285.8px",
  fontSize: "14px",
  paddingBottom: "10px",
  marginLeft: "24px",
  position: "relative",
  top: "90px",
  left: "48px",
  margin: "17px",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "14px",
    position: "relative",
    top: "40px",
    left: "18px",
  },
}));
const Inputo2 = styled("input")(({ theme }) => ({
  border: "none",
  outline: "none",
  background: "transparent",
  borderBottom: "solid 1px",
  width: "598.8px",
  fontSize: "14px",
  paddingBottom: "10px",
  marginLeft: "24px",
  position: "relative",
  top: "90px",
  left: "48px",
  margin: "17px",
  [theme.breakpoints.down("sm")]: {
    width: "285.8px",
    position: "relative",
    top: "40px",
    left: "16px",
  },
}));
function Form() {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <Head>Let's talk</Head>
            <Headpara>
              Is there a challenge your organization or company needs help
              solving? We’d love to discuss it.
            </Headpara>
          </Grid>
          <Grid item xs={12} sm={1}></Grid>
          <Grid item xs={12} sm={8}>
            <Inputo type={"text"} placeholder="Name"></Inputo>
            <Inputo type={"text"} placeholder="Company"></Inputo>
            <Inputo type={"gmail"} placeholder="email"></Inputo>
            <Inputo type={"text"} placeholder="budget"></Inputo>
            <Inputo2
              type={"text"}
              placeholder="Tell us something about your project"
            ></Inputo2>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Form;
