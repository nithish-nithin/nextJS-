import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Item>
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                nisi ut porro. Aperiam neque facilis enim, nulla eum provident
                vel debitis eaque inventore, modi eveniet nihil odit commodi
                culpa quaerat.
              </h1>
            </Item>
          </Grid>
          <Grid item xs={12} sm={1} />
          <Grid item xs={12} sm={5}>
            <Item>Rigth side</Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
