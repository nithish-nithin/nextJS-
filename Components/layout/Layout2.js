import React from "react";
import { styled } from "@mui/material";
import { Box, Grid, Container } from "@mui/material";
import { height } from "@mui/system";
import Image from "next/image";
import C1img1 from "./ asset/ card1/ c1img1.png";
import C1img2 from "./ asset/ card1/ c1img2.png";

const Car = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "start",
  margin: "10px",
  width: "150rem",
  backgroundColor: "pink",
  marginLeft: "150px",
  marginTop: "200px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "start",
    margin: "10px",
    width: "180rem",
    backgroundColor: "pink",
    marginTop: "100px",
  },
}));
const Care = styled("div")(({ theme }) => ({
  width: "588px",
  height: "606px",
  backgroundColor: "red",
  margin: "10px",
  cursor: "pointer",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    width: "288px",
    height: "330px",
    backgroundColor: "red",
    margin: "10px",
  },
}));
const CardHead = styled("div")(({ theme }) => ({
  fontFamily: "Times",
  fontSize: "26px",
  fontWeight: 700,
  lineHeight: "31px",
  letterSpacing: "0em",
  textAlign: "left",
  marginLeft: "40px",
  marginTop: "57px",
  color: "#000000",

  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "19px",
    letterSpacing: "0em",
    textAlign: "left",
    marginLeft: "20px",
    marginTop: "28px",
  },
}));
const CardPara = styled("div")(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "24px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "#333333",
  width: "490px",
  marginLeft: "40px",

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px;",
    fontWeight: 400,
    lineHeight: "17px",
    letterSpacing: "0em",
    textAlign: "left",
    width: "258px",
    marginLeft: "20px",
  },
}));
const CardImg1 = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
}));
const CardImg2 = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "275px",
  left: "",
  [theme.breakpoints.down("sm")]: {},
}));

function Layout2() {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "900px",
          backgroundColor: "yellow",
          overflowX: "auto",
          overflowY: "hidden",

          "&::-webkit-scrollbar": {
            width: "0.4em",
            backgroundColor: "red",
            display: "none",
          },
        }}
      >
        <Car>
          <Care>
            <CardHead>Retail Scan - In-Store Solutions</CardHead>
            <CardPara>
              With a pan India field footprint and a whole new thinking on
              delivering measurable value to our clients, we try to unearth
              every conceivable store related issue that affects execution and
              sales of our clients.
            </CardPara>
            <CardImg1>
              <Image src={C1img1} />
            </CardImg1>
            <CardImg2>
              <Image src={C1img2} />
            </CardImg2>
          </Care>
          <Care>
            <CardHead>KnoMo - Finanical Tracking</CardHead>
            <CardPara>
              Learn How to track your money like a pro. KnoMo (#knowyourmoney)
              enables you to keep track of all your transactions and also
              reduces time, energy, costs associated with it. Lets KnoMo!
            </CardPara>
            <CardImg1>
              <Image src={C1img1} />
            </CardImg1>
          </Care>
          <Care>
            <CardHead>VoxGuru - Music Learning</CardHead>
            <CardPara>
              VoxGuru is your best destination for music learning. Be it
              Carnatic, Hindustani or Voice Culture, we bring you over 600+ high
              quality lessons with an amazing audio visual experience!
            </CardPara>
          </Care>
          <Care>
            <CardHead>Busyhubs - E-Learning Platform</CardHead>
            <CardPara>
              BusyHubs connect the learners, who are consistently looking to
              enhance their knowledge, with the tutors, who are excited to share
              their expertise skills, in collaboration with us
            </CardPara>
          </Care>
        </Car>
      </Box>
    </div>
  );
}

export default Layout2;
