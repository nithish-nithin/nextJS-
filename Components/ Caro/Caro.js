import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { styled } from "@mui/material";
import Image from "next/image";
import Cim1 from "../ Caro/ assest/circles.svg";
import Cim2 from "../ Caro/ assest/fff.png";

const Ic = styled("div")(({ theme }) => ({
  height: "900px",
  [theme.breakpoints.down("sm")]: {},
}));
const Cirimg = styled("div")(({ theme }) => ({
  position: "relative",
  bottom: "300px",
  [theme.breakpoints.down("sm")]: {
    position: "relative",
    bottom: "145px",
  },
}));
const Cirimg2 = styled("div")(({ theme }) => ({
  position: "relative",
  top: "10px",
  [theme.breakpoints.down("sm")]: {
    width: "80px",
    left: "160px",
    top: "40px",
  },
}));
const Chead = styled("div")(({ theme }) => ({
  fontFamily: "EB Garamond",
  fontSize: "24px",
  fontWeight: 800,
  lineHeight: "31px",
  letterSpacing: "0em",
  textAlign: "center",
  position: "relative",
  top: "190px",

  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    fontWeight: 800,
    lineHeight: "31px",
    letterSpacing: "0em",
    textAlign: "center",
    position: "relative",
    top: "160px",
  },
}));
const Cpara = styled("div")(({ theme }) => ({
  width: "300px",
  position: "relative",
  left: "570px",
  top: "300px",
  [theme.breakpoints.down("sm")]: {
    width: "100px",
    position: "relative",
    left: "150px",
    top: "280px",
    fontSize: "10px",
  },
}));

function Caro() {
  return (
    <div>
      <Carousel autoPlay showThumbs={false} infiniteLoop={true}>
        <Ic>
          <Cpara>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            perspiciatis magnam assumenda nihil. Animi asperiores sapiente
          </Cpara>
          <Chead>Osla olsen</Chead>
          <Cirimg2>
            <Image src={Cim2} />
          </Cirimg2>
          <Cirimg>
            <Image src={Cim1} />
          </Cirimg>
        </Ic>
        <Ic>
          <Cpara>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            perspiciatis magnam assumenda nihil. Animi asperiores sapiente
          </Cpara>
          <Chead>Osla olsen</Chead>
          <Cirimg2>
            <Image src={Cim2} />
          </Cirimg2>
          <Cirimg>
            <Image src={Cim1} />
          </Cirimg>
        </Ic>
        <Ic>
          <Cpara>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            perspiciatis magnam assumenda nihil. Animi asperiores sapiente
          </Cpara>
          <Chead>Osla olsen</Chead>
          <Cirimg2>
            <Image src={Cim2} />
          </Cirimg2>
          <Cirimg>
            <Image src={Cim1} />
          </Cirimg>
        </Ic>
      </Carousel>
    </div>
  );
}

export default Caro;
