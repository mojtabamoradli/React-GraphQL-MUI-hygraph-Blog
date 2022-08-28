import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../shared/Loader";

const AuthorsPage = () => {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <Loader />;
  if (errors) return <h3>Error...</h3>;

  const { authors } = data;

  return (
    <>
      <Typography sx={{ margin: "60px auto 0px auto" }} component="h3" variant="h5" mb={3} fontWeight={700} style={{ textDecoration: "none", color: "#000000", textAlign: "center" }}>
        نویسنده‌ها
      </Typography>
      <Grid container xs={10} md={6} sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4, margin: "20px auto 100px auto" }}>
        {authors.map((author, index) => (
          <Fragment key={author.id}>
            <Grid item={true} xs={12} padding={2} key={author.id}>
              <Link to={`/authors/${author.slug}`} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
                <Avatar src={author.avatar.url} sx={{ marginLeft: 2, marginRight: 2 }} />
                <Typography component="p" variant="h6" color="text.secondary">
                  {author.name}
                </Typography>
              </Link>
              <Typography component="p" variant="p" color="text.secondary" fontWeight={300} sx={{ ml: 9 }}>
                {author.field}
              </Typography>
            </Grid>
            {index !== authors.length - 1 && (
              <Grid item={true} xs={12}>
                <Divider variant="middle" />
              </Grid>
            )}
          </Fragment>
        ))}
      </Grid>
    </>
  );
};

export default AuthorsPage;
