import React from "react";
import { Container, Typography, Grid, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import Authors from "../author/Authors";
import Blogs from "../blog/Blogs";
import Tech from "../../assets/img/Tech.svg";

const HomePage = () => {
  return (
    <>
      <img src={Tech} width={"500"} style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "40px auto 0px auto" }} />

      <Container maxWidth="lg">
        <Grid container spacing={2} padding={3}>
          <Grid item xs={12} md={3} mt={4}>
            <Typography component="h3" variant="h5" mb={3} fontWeight={700}>
              <Link to="/authors" style={{ textDecoration: "none", color: "#000000" }}>
                نویسنده‌ها
              </Link>
            </Typography>
            <Authors />
          </Grid>

          {/* React, GraphQL, Material UI Blog */}

          <Grid item xs={12} md={9} mt={4}>
            <Typography componeent="h3" variant="h5" mb={3} fontWeight={700}>
              <Link to="/blogs" style={{ textDecoration: "none", color: "#000000" }}>
                مقالات
              </Link>
            </Typography>
            <Blogs />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
