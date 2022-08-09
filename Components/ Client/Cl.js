import React from "react";
import { styled } from "@mui/material";
import { Box, Grid, Container } from "@mui/material";
import Image from "next/image";
import Ic1 from "../ Client/ sec6-assets/child1.png";
import Ic2 from "../ Client/ sec6-assets/child2.png";
import Ic3 from "../ Client/ sec6-assets/child3.png";
import Ic4 from "../ Client/ sec6-assets/child4.png";
import Ic5 from "../ Client/ sec6-assets/child5.png";
import Ic6 from "../ Client/ sec6-assets/child6.png";
import Ic7 from "../ Client/ sec6-assets/ps.png";
import Ic8 from "../ Client/ sec6-assets/ai.png";
import Ic9 from "../ Client/ sec6-assets/fig.png";
import Ic10 from "../ Client/ sec6-assets/ax.png";
import Ic11 from "../ Client/ sec6-assets/sk.png";
import Ic12 from "../ Client/ sec6-assets/inv.png";
import Ic13 from "../ Client/ sec6-assets/ae.png";
import Ic14 from "../ Client/ sec6-assets/pr.png";

const Sec5right = styled("div")(({ theme }) => ({
  fontFfamily: "Times",
  fontSize: "28px",
  fontWeight: 400,
  lineHeight: "36px",
  letterSpacing: "0em",
  textAlign: "left",

  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "23px",
    letterSpacing: "0em",
    textAlign: "center",
  },
}));
const Head51 = styled("div")(({ theme }) => ({
  fontFamily: "Helvetica",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "18px",
  letterSpacing: "0em",
  textAlign: "left",
  position: "relative",
  bottom: "40px",

  [theme.breakpoints.down("sm")]: {},
}));
const Head52 = styled("div")(({ theme }) => ({
  fontFamily: "Helvetica",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "18px",
  letterSpacing: "0em",
  textAlign: "left",
  position: "relative",
  bottom: "40px",

  [theme.breakpoints.down("sm")]: {},
}));
const Head53 = styled("div")(({ theme }) => ({
  fontFamily: "Helvetica",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "18px",
  letterSpacing: "0em",
  textAlign: "left",
  position: "relative",
  bottom: "40px",

  [theme.breakpoints.down("sm")]: {},
}));
const Head54 = styled("div")(({ theme }) => ({
  fontFamily: "Helvetica",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "18px",
  letterSpacing: "0em",
  textAlign: "left",
  position: "relative",
  bottom: "40px",

  [theme.breakpoints.down("sm")]: {},
}));
const Head55 = styled("div")(({ theme }) => ({
  fontFamily: "Helvetica",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "18px",
  letterSpacing: "0em",
  textAlign: "left",
  position: "relative",
  bottom: "40px",

  [theme.breakpoints.down("sm")]: {},
}));
const Head56 = styled("div")(({ theme }) => ({
  fontFamily: "Helvetica",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "18px",
  letterSpacing: "0em",
  textAlign: "left",
  position: "relative",
  bottom: "40px",

  [theme.breakpoints.down("sm")]: {},
}));
const Iconimg = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
}));
const Sec5span = styled("span")(({ theme }) => ({
  fontFamily: "Times",
  fontSize: "20px",
  fontweight: 700,
  lineheight: "24px",
  letterSpacing: "0em",
  textAlign: "left",
  position: "relative",
  left: "70px",
  bottom: "60px",

  [theme.breakpoints.down("sm")]: {},
}));
const Desimg = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
}));

function Cl() {
  return (
    <div>
      <Container>
        <Grid container spacing={6} flexDirection={{}} style={{}}>
          <Grid item xs={12} sm={3}>
            <Sec5right>
              We’re all pissed-off optimists. That’s what motivates us to do our
              best work.
            </Sec5right>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Box
              sx={{
                width: "100%",
                overflowX: "auto",
                top: {
                  sm: "240px",
                  xs: "174px",
                },

                "&::-webkit-scrollbar": {
                  width: "0.4em",
                  display: "none",
                },
              }}
            >
              <Grid
                container
                spacing={4}
                flexDirection={{
                  xs: "row",
                }}
                style={{
                  display: "flex",
                  overflowX: "auto",
                  overflowY: "hidden",
                }}
                sx={{
                  width: {
                    sm: "100vh",
                    xs: "200vh",
                  },
                  height: {
                    sm: "500px",
                    xs: "280px",
                  },
                }}
              >
                <Grid item xs={2} sm={4}>
                  <Iconimg>
                    <Image src={Ic1} />
                  </Iconimg>
                  <Sec5span>
                    Initials & <br />
                    Consultation
                  </Sec5span>

                  <Head51>
                    Discuss and share the information about your business
                    including scope, timeline, and budget tell us about your
                    business goals.
                  </Head51>
                </Grid>
                <Grid item xs={2} sm={4}>
                  <Iconimg>
                    <Image src={Ic2} />
                  </Iconimg>
                  <Sec5span>
                    Define & <br />
                    Research
                  </Sec5span>
                  <Head52>
                    Do a brief research on your project and define the best
                    project solution for you. We will work together to create
                    the website contents, If you have an existing website, its
                    time for you to give us your content.
                  </Head52>
                </Grid>
                <Grid item xs={2} sm={4}>
                  <Iconimg>
                    <Image src={Ic3} />
                  </Iconimg>
                  <Sec5span>
                    Concept &<br /> Planning
                  </Sec5span>
                  <Head53>
                    Define a concept base on defined outcome form step, we will
                    build a website architecture and a sitemap.
                  </Head53>
                </Grid>
                <Grid item xs={2} sm={4}>
                  <Iconimg>
                    <Image src={Ic4} />
                  </Iconimg>
                  <Sec5span>
                    Production &<br /> Prototype
                  </Sec5span>
                  <Head54>
                    Design a prototype site (in some cases including custom
                    codes) and graphic elements.
                  </Head54>
                </Grid>
                <Grid item xs={2} sm={4}>
                  <Iconimg>
                    <Image src={Ic5} />
                  </Iconimg>
                  <Sec5span>
                    Reviews &<br /> Revisions
                  </Sec5span>
                  <Head55>
                    Revise your website to meet your best concerns. We review
                    your idea to make sure is best for layout.
                  </Head55>
                </Grid>
                <Grid item xs={2} sm={4}>
                  <Iconimg>
                    <Image src={Ic6} />
                  </Iconimg>
                  <Sec5span>
                    Finishing & <br />
                    Lauch
                  </Sec5span>

                  <Head56>
                    Final review of your website to make sure all works better &
                    Its time to go live.
                  </Head56>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          sx={{
            marginLeft: {
              sm: "70px",
            },
          }}
        >
          <Grid item xs={3} sm={1}>
            <Desimg>
              <Image src={Ic7} />
            </Desimg>
          </Grid>
          <Grid item xs={3} sm={1}>
            <Desimg>
              <Image src={Ic8} />
            </Desimg>
          </Grid>
          <Grid item xs={3} sm={1}>
            <Desimg>
              <Image src={Ic9} />
            </Desimg>
          </Grid>
          <Grid item xs={3} sm={1}>
            <Desimg>
              <Image src={Ic10} />
            </Desimg>
          </Grid>
          <Grid item xs={3} sm={1}>
            <Desimg>
              <Image src={Ic11} />
            </Desimg>
          </Grid>
          <Grid item xs={3} sm={1}>
            <Desimg>
              <Image src={Ic12} />
            </Desimg>
          </Grid>
          <Grid item xs={3} sm={1}>
            <Desimg>
              <Image src={Ic13} />
            </Desimg>
          </Grid>
          <Grid item xs={3} sm={1}>
            <Desimg>
              <Image src={Ic14} />
            </Desimg>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Cl;
