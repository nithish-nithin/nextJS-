import React from "react";
import { styled } from "@mui/material";
import { Box, Grid, Container } from "@mui/material";
import Image from "next/image";
import Ic1 from "../ pro/asset/cd.png";
import Ic2 from "../ pro/asset/be.png";
import Ic3 from "../ pro/asset/wm.png";
import Ic4 from "../ pro/asset/dm.png";

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
function DpComponent() {
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
                height: "400px",
                overflowX: "auto",
              }}
            >
              <Grid item xs={3} sm={3}>
                <Ic>
                  <Image src={Ic1} />
                </Ic>
                <Sec4Head>Branding</Sec4Head>
                <Sec4Para>
                  We believe in creating perfect designs that are clearly
                  positioned and crafted giving an unique look that communicates
                  the right message to the target audience. Brand management,
                  Brand Identity Design, Logo Design, Art Direction, Brand
                  consulting are some of the Branding services that we do.
                </Sec4Para>
              </Grid>
              <Grid item xs={3} sm={3}>
                <Ic>
                  <Image src={Ic2} />
                </Ic>
                <Sec4Head>Development</Sec4Head>
                <Sec4Para>
                  Offering more than just website design, we indulge in
                  providing consultation from concepts to the final design. A
                  best website to represent your products or services is all
                  that we will aim at. Security, DevOps and Testing will be
                  done.
                </Sec4Para>
              </Grid>
              <Grid item xs={3} sm={3}>
                <Ic>
                  <Image src={Ic3} />
                </Ic>
                <Sec4Head>Interaction</Sec4Head>
                <Sec4Para>
                  <Sec4Para>
                    Making Client - focused interfaces and plan frameworks that
                    can give a great experience to the clients. App and Web
                    design, User Interface, Usability, User experience, Design
                    system and UX Consulting are some of the services we
                    provide.
                  </Sec4Para>
                </Sec4Para>
              </Grid>
              <Grid item xs={3} sm={3}>
                <Ic>
                  <Image src={Ic4} />
                </Ic>
                <Sec4Head>Advertising</Sec4Head>
                <Sec4Para>
                  Creating strategic campaign products and services with a plan
                  of conversion-rate-optimization in every medium; targeted
                  material designs always make the right impressions. Graphic
                  design, Videography, Photography, Animation, Motion Graphics
                  and 3D Production are few of the services we indulge in.
                </Sec4Para>
              </Grid>
            </Grid>
          </Sec4Grid>
        </Container>
      </Box>
    </div>
  );
}

export default DpComponent;
