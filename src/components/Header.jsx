import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs>
          <Item>Logo</Item>
        </Grid>
        <Grid xs={6}>
          <Item></Item>
        </Grid>
        <Grid xs>
          <Item>Become a Seller</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
