import React from "react";
import { styled } from "@mui/material";
import { Box, Grid, Container } from "@mui/material";
import Image from "next/image";
import Cd from "./asset/cd.png";
import Wmd from "./asset/wm.png";
import Be from "./asset/be.png";
import Dm from "./asset/dm.png";

const Sec4Head = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
}));
function Dp() {
  return (
    <div>
      <Container>
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
          <Grid
            container
            spacing={5}
            flexDirection={{
              sm: "row",
              xs: "row",
            }}
            style={{
              backgroundColor: "red",
              display: "flex",
              width: "150vh",
              overflowX: "auto",
            }}
          >
            <Grid item xs={3} sm={3}>
              <Image src={Cd} />
              <Sec4Head>Branding</Sec4Head>
              We believe in creating perfect designs that are clearly positioned
              and crafted giving an unique look that communicates the right
              message to the target audience. Brand management, Brand Identity
              Design, Logo Design, Art Direction, Brand consulting are some of
              the Branding services that we do.
            </Grid>
            <Grid item xs={3} sm={3}>
              We believe in creating perfect designs that are clearly positioned
              and crafted giving an unique look that communicates the right
              message to the target audience. Brand management, Brand Identity
              Design, Logo Design, Art Direction, Brand consulting are some of
              the Branding services that we do.
            </Grid>
            <Grid item xs={3} sm={3}>
              We believe in creating perfect designs that are clearly positioned
              and crafted giving an unique look that communicates the right
              message to the target audience. Brand management, Brand Identity
              Design, Logo Design, Art Direction, Brand consulting are some of
              the Branding services that we do.
            </Grid>
            <Grid item xs={3} sm={3}>
              We believe in creating perfect designs that are clearly positioned
              and crafted giving an unique look that communicates the right
              message to the target audience. Brand management, Brand Identity
              Design, Logo Design, Art Direction, Brand consulting are some of
              the Branding services that we do.
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Dp;
