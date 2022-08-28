import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../shared/Loader";

const Authors = () => {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <Loader />;
  if (errors) return <h3>Error...</h3>;

  const { authors } = data;

  return (
    <div>
      <Grid container sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
        {authors.map((author, index) => (
          <Fragment key={author.id}>
            <Grid item={true} xs={12} padding={2} key={author.id}>
              <Link to={`/authors/${author.slug}`} style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
                <Avatar src={author.avatar.url} sx={{ marginLeft: 2, marginRight: 2 }} />
                <Typography component="p" variant="p" color="text.secondary">
                  {author.name}
                </Typography>
              </Link>
            </Grid>
            {index !== authors.length - 1 && (
              <Grid item={true} xs={12}>
                <Divider variant="middle" />
              </Grid>
            )}
          </Fragment>
        ))}
      </Grid>
    </div>
  );
};

export default Authors;
