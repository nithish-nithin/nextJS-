import React from "react";
import { Box, Container, Grid, List } from "@mui/material";
import { styled } from "@mui/material/styles";
import Eye from "next/image";
import Icon1 from "../ pro/asset/eyesicon.png";
import Bd1 from "../ pro/asset/Dbo.png";
import Bd2 from "../ pro/asset/dbox2.png";
import Bd3 from "../ pro/asset/dbox3.png";
import Image from "next/image";
import Webimgm from "./asset/ mwebicon.png";
import Webimgd from "./asset/dwebicon.png";
import Cd from "./asset/cd.png";
import Wmd from "./asset/wm.png";
import Be from "./asset/be.png";
import Dm from "./asset/dm.png";
import Layout2 from "../layout/Layout2";
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

const Boxd = styled("div")(({ theme }) => ({
  position: "relative",
}));
const Boxd1 = styled("div")(({ theme }) => ({
  width: "205px",
  position: "absolute",
  top: "300px",

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
const Boxd2 = styled("div")(({ theme }) => ({
  width: "205px",
  position: "absolute",
  top: "180px",
  left: "200px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
const Boxd3 = styled("div")(({ theme }) => ({
  width: "205px",
  position: "absolute",
  top: "398px",
  left: "200px",

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
const SubPara = styled("div")(({ theme }) => ({
  fontfamily: "Times New Roman",
  fontSize: "24px",
  fontweight: 400,
  lineheight: "34px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "#26EAF6",
  position: "relative",
  top: "640px",

  [theme.breakpoints.down("sm")]: {
    fontWeight: 400,
    fontSize: "13px",

    lineHeight: "18px",
    letterSpacing: "0em",
    textAlign: "center",
    position: "relative",
    top: "330px",
  },
}));
const Sec3Head = styled("div")(({ theme }) => ({
  fontSize: "24px",

  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    fontSize: "24px",
  },
}));
const Sec3Para = styled("div")(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: "28px",
  fontWeight: 300,
  lineHeight: "38.2px",
  letterSpacing: "0px",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    fontWeight: 300,
    lineHeight: "20px",
    letterSpacing: "0px",
    textAlign: "center",
    position: "relative",
    top: "10px",
  },
}));
const Sec3Para2 = styled("div")(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "30px",
  letterSpacing: "0px",
  textAlign: "center",
  color: "#555555",

  [theme.breakpoints.down("sm")]: {
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "17px",
    letterSpacing: "0px",
    textAlign: "center",
    position: "relative",
    top: "20px",
  },
}));
const Sec3imgM = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
    width: "275px",
    marginTop: "43px",
  },
}));
const Sec3imgd = styled("div")(({ theme }) => ({
  marginTop: "43px",

  display: "block",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
const Lis = styled("div")(({ theme }) => ({
  marginTop: "43px",

  [theme.breakpoints.down("sm")]: {
    marginTop: "13px",
  },
}));
const Sec3Span = styled("span")(({ theme }) => ({
  position: "relative",
  left: "10px",
  bottom: "15px",
  fontFamily: "Times New Roman",
  fontSize: "24px",
  fontWeight: 700,
  lineHeight: "29px",
  letterSpacing: "0em",
  textAlign: "left",

  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "19px",
    letterSpacing: "0em",
    textAlign: "left",
    left: "5px",
    position: "relative",
  },
}));
const Sec3Para3 = styled("span")(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "24px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "#333333",
  position: "relative",
  left: "50px",

  [theme.breakpoints.down("sm")]: {
    position: "relative",
    left: "0px",
    fontsize: "12px",
    fontWeight: 400,
    lineHeight: "18px",
    letterSpacing: "0em",
    textAlign: "left",
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
            <Grid item xs={1} sm={1}></Grid>

            <Grid item xs={12} sm={5}>
              <Boxd>
                <Boxd1>
                  <Image src={Bd1} />
                </Boxd1>
                <Boxd2>
                  <Image src={Bd2} />
                </Boxd2>
                <Boxd3>
                  <Image src={Bd3} />
                </Boxd3>
              </Boxd>
              <SubPara>
                A Global Design Agency that enables solutions through Research,
                Design & Development
              </SubPara>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          height: "199px",
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
      <Box
        sx={{
          height: "199px",
          maxWidth: "100%",
          backgroundColor: "white",
        }}
      >
        <container></container>
      </Box>
      <Box
        sx={{
          height: "709px",
          maxWidth: "100%",
          backgroundColor: "white",
        }}
      >
        <Container>
          <Sec3Head>Our Service</Sec3Head>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Sec3Para>
                Taking high level concepts & turning them into functional,
                engaging products.
              </Sec3Para>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={8}>
              <Sec3Para2>
                The breadth and depth of our experience allows us to create
                tailor-made user interface design that lead to increased user
                retention, engagement & loyality.
              </Sec3Para2>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={1} sm={1}></Grid>
            <Grid item xs={10} sm={5}>
              <Sec3imgM>
                <Image src={Webimgm} />
              </Sec3imgM>
              <Lis>
                <Image src={Cd} />
                <Sec3Span>Creative Design</Sec3Span>
              </Lis>
              <Sec3Para3>
                Eyes grab more colours and have more attention than anything
                else. Bright colours and appealing designs can make you want to
                buy/ think more about the product. To put a design together with
                the colours, our team of experts will help you.
              </Sec3Para3>
              <Lis>
                <Image src={Wmd} />
                <Sec3Span>Web & Mobile Development</Sec3Span>
              </Lis>
              <Lis>
                <Image src={Be} />
                <Sec3Span>Backend</Sec3Span>
              </Lis>
              <Lis>
                <Image src={Dm} />
                <Sec3Span>Digitial Marketing</Sec3Span>
              </Lis>
            </Grid>
            <Grid item xs={1} sm={1}></Grid>

            <Grid item sm={5}>
              <Sec3imgd>
                <Image src={Webimgd} />
              </Sec3imgd>
            </Grid>
            <Grid item xs={1} sm={1}></Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          height: "700px",
          width: "100%",
          backgroundColor: "red",
        }}
      >
        <Layout2 />
      </Box>
    </div>
  );
}

export default Pro;
