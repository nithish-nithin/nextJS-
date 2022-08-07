import React from "react";
import { styled } from "@mui/material";
import { Box, Grid, Container } from "@mui/material";
import { height } from "@mui/system";
import Image from "next/image";
import C1img1 from "./ asset/ card1/ c1img1.png";
import C1img2 from "./ asset/ card1/ c1img2.png";
import C2img1 from "./ asset/ card2/ c2img1.png";
import C2img2 from "./ asset/ card2/ c2img2.png";
import C3img1 from "./ asset/ card3/ card3img1.png";
import C3img2 from "./ asset/ card3/ c3img2.png";
import C4img1 from "./ asset/ card4/ cardimg1.png";
import C4img2 from "./ asset/ card4/ c4img2.png";

const Car = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "start",
  margin: "10px",
  width: "150rem",
  marginLeft: "150px",
  marginTop: "90px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "start",
    margin: "10px",
    width: "75rem",
    marginTop: "70px",
  },
}));
const Care1 = styled("div")(({ theme }) => ({
  width: "588px",
  height: "606px",
  backgroundColor: "#EEF1FE",
  margin: "10px",
  cursor: "pointer",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    width: "288px",
    height: "330px",
    backgroundColor: "#EEF1FE",

    margin: "10px",
  },
}));
const Care2 = styled("div")(({ theme }) => ({
  width: "588px",
  height: "606px",
  backgroundColor: "#F9F5E8",
  margin: "10px",
  cursor: "pointer",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    width: "288px",
    height: "330px",
    backgroundColor: "#F9F5E8",

    margin: "10px",
  },
}));
const Care3 = styled("div")(({ theme }) => ({
  width: "588px",
  height: "606px",
  margin: "10px",
  cursor: "pointer",
  position: "relative",
  backgroundColor: "#FFF6ED",

  [theme.breakpoints.down("sm")]: {
    width: "288px",
    height: "330px",
    backgroundColor: "#FFF6ED",

    margin: "10px",
  },
}));
const Care4 = styled("div")(({ theme }) => ({
  width: "588px",
  height: "606px",
  backgroundColor: "#FFF6F8",
  margin: "10px",
  cursor: "pointer",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    width: "288px",
    height: "330px",
    backgroundColor: "#FFF6F8",

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
const Card1Img1 = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "230px",
  left: "40px",
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    top: "150px",
    left: "20px",
  },
}));
const Card1Img2 = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "326px",
  left: "390px",
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    top: "180px",
    left: "185px",
    width: "100px",
  },
}));
const Card2Img1 = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "280px",
  left: "0px",
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    top: "144px",
    left: "0px",
    width: "200px",
  },
}));
const Card2Img2 = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "217px",
  left: "250px",
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    top: "120px",
    left: "100px",
  },
}));
const Card3Img1 = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "250px",
  left: "10px",
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    top: "140px",
    left: "0px",
    width: "190px",
  },
}));
const Card3Img2 = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "217px",
  left: "250px",

  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    top: "117px",
    left: "100px",
  },
}));
const Card4Img1 = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "200px",
  left: "10px",

  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    top: "140px",
    left: "0px",
  },
}));
const Card4Img2 = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "325px",
  left: "320px",

  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    top: "177px",
    left: "140px",
    width: "150px",
  },
}));
function Layout2() {
  return (
    <div>
      <Car>
        <Care1>
          <CardHead>Retail Scan - In-Store Solutions</CardHead>
          <CardPara>
            With a pan India field footprint and a whole new thinking on
            delivering measurable value to our clients, we try to unearth every
            conceivable store related issue that affects execution and sales of
            our clients.
          </CardPara>
          <Card1Img1>
            <Image src={C1img1} />
          </Card1Img1>
          <Card1Img2>
            <Image src={C1img2} />
          </Card1Img2>
        </Care1>
        <Care2>
          <CardHead>KnoMo - Finanical Tracking</CardHead>
          <CardPara>
            Learn How to track your money like a pro. KnoMo (#knowyourmoney)
            enables you to keep track of all your transactions and also reduces
            time, energy, costs associated with it. Lets KnoMo!
          </CardPara>
          <Card2Img1>
            <Image src={C2img1} />
          </Card2Img1>
          <Card2Img2>
            <Image src={C2img2} />
          </Card2Img2>
        </Care2>
        <Care3>
          <CardHead>VoxGuru - Music Learning</CardHead>
          <CardPara>
            VoxGuru is your best destination for music learning. Be it Carnatic,
            Hindustani or Voice Culture, we bring you over 600+ high quality
            lessons with an amazing audio visual experience!
          </CardPara>
          <Card3Img1>
            <Image src={C3img1} />
          </Card3Img1>
          <Card3Img2>
            <Image src={C3img2} />
          </Card3Img2>
        </Care3>
        <Care4>
          <CardHead>Busyhubs - E-Learning Platform</CardHead>
          <CardPara>
            BusyHubs connect the learners, who are consistently looking to
            enhance their knowledge, with the tutors, who are excited to share
            their expertise skills, in collaboration with us
          </CardPara>
          <Card4Img1>
            <Image src={C4img1} />
          </Card4Img1>
          <Card4Img2>
            <Image src={C4img2} />
          </Card4Img2>
        </Care4>
      </Car>
    </div>
  );
}

export default Layout2;
