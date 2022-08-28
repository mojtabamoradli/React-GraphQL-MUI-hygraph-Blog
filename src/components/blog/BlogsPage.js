import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Authors from "../author/Authors";
import Blogs from "../blog/Blogs";

const BlogsPage = () => {
  return (
    <Container maxWidth="lg" xs={10} md={6}>
      <Grid container spacing={2} padding={3}>
        <Grid item>
          <Typography
            sx={{ margin: "60px auto 0px auto" }}
            component="h3"
            variant="h5"
            mb={3}
            fontWeight={700}
            style={{ textDecoration: "none", color: "#000000", textAlign: "center", marginBottom: "20px" }}
          >
            مقالات
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogsPage;
