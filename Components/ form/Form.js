import React from "react";
import { Input, styled } from "@mui/material";
import { Box, Container, Grid, List } from "@mui/material";
import Image from "next/image";
import Ice from "../ form/img/icon.png";
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
const Ic = styled("div")(({ theme }) => ({
  position: "relative",
  top: "110px",
  width: "50px",
  [theme.breakpoints.down("sm")]: {
    position: "relative",
    top: "50px",
    left: "16px",
    width: "50px",
  },
}));
const Spa = styled("span")(({ theme }) => ({
  position: "relative",
  top: "78px",
  left: "45px",
  [theme.breakpoints.down("sm")]: {
    position: "relative",
    top: "19px",
    left: "59px",
    width: "50px",
  },
}));

const Btn = styled("button")(({ theme }) => ({
  height: "54px",
  width: "184px",
  borderRadius: "0px",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "26px",
  letterSpacing: "0em",
  backgroundColor: "#0f9d58",
  color: "white",
  position: "relative",
  top: "103px",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    position: "relative",
    top: "63px",
    left: "30px",
    width: "274px",
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
            <Inputo type={"text"} placeholder="Name" />
            <Inputo type={"text"} placeholder="Company" />
            <Inputo type={"gmail"} placeholder="email" />
            <Inputo type={"text"} placeholder="budget" />
            <Inputo2
              type={"text"}
              placeholder="Tell us something about your project"
            ></Inputo2>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Ic>
                  <Image src={Ice} />
                </Ic>
                <Spa>File size should not exceed 10MB</Spa>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Btn>Send </Btn>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Form;
