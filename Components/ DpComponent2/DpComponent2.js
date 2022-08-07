import React from "react";
import { styled } from "@mui/material";
import { Box, Grid, Container } from "@mui/material";
import Image from "next/image";
import Dp21 from "../ DpComponent2/ asset/dp2icon1.png";

const Ic = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
}));
const Sec4Head = styled("div")(({ theme }) => ({
  fontFamily: "Times",
  fontSize: "26px",
  fontWeight: 700,
  lineHeight: "31px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "#000000",

  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "19px",
    letterSpacing: "0em",
    textAlign: "left",
  },
}));
const Sec4Para = styled("div")(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "24px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "#333333",
  width: "250px",
  [theme.breakpoints.down("sm")]: {},
}));
const Sec4Grid = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
}));
function DpComponent2() {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          top: {
            sm: "240px",
            xs: "174px",
          },
          position: "relative",
          top: "90px",

          "&::-webkit-scrollbar": {
            width: "0.4em",
            backgroundColor: "red",
            display: "none",
          },
        }}
      >
        <Container>
          <Sec4Grid>
            <Grid
              container
              spacing={6}
              flexDirection={{
                sm: "row",
                xs: "row",
              }}
              style={{
                display: "flex",
                width: "150vh",
                height: "460px",
                overflowX: "auto",
              }}
            >
              <Grid item xs={3} sm={3}>
                <Ic>
                  <Image src={Dp21} />
                </Ic>
                <Sec4Head>Web Application Development</Sec4Head>
                <Sec4Para>
                  Often referred to as a web app, every company would love to
                  have it’s own web app to showcase their works and get their
                  product out there for the audience’s easy reach. Our talented
                  bunch of app developers will get that done for you in no time.
                </Sec4Para>
              </Grid>
              <Grid item xs={3} sm={3}>
                <Ic>
                  <Image src={Dp21} />
                </Ic>
                <Sec4Head>Mobile App Development (Cross-platform)</Sec4Head>
                <Sec4Para>
                  From the person living in the hills to the person living on
                  the oceans, everyone has a mobile phone and everyone has their
                  own needs. With a mobile app, you put your product to the eyes
                  farthest from you and yet get traction. Do it with us and get
                  your product to get the best of you.
                </Sec4Para>
              </Grid>
              <Grid item xs={3} sm={3}>
                <Ic>
                  <Image src={Dp21} />
                </Ic>
                <Sec4Head>Wordpress App Development</Sec4Head>
                <Sec4Para>
                  <Sec4Para>
                    Creating and customising plugins and themes that will
                    improve Wordpress itself or to create entirely new products
                    is a professional’s job with a sense of commitment - which
                    we strive to offer through our experience.
                  </Sec4Para>
                </Sec4Para>
              </Grid>
              <Grid item xs={3} sm={3}>
                <Ic>
                  <Image src={Dp21} />
                </Ic>
                <Sec4Head>Desktop App development (Electron)</Sec4Head>
                <Sec4Para>
                  In contrast to the Web-based application, desktop app can
                  stand-alone in a laptop or computer, which will give you more
                  frequency of usage and visibility. Get it done with us for
                  easier reach and professional touch.
                </Sec4Para>
              </Grid>
            </Grid>
          </Sec4Grid>
        </Container>
      </Box>
    </div>
  );
}

export default DpComponent2;
