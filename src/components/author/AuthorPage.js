import React from "react";
import { useQuery } from "@apollo/client";
import { Avatar, Container, Typography, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import sanitizeHTML from "sanitize-html";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

const AuthorPage = () => {
  const { slug } = useParams();
  const { loading, data, errors } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (errors) return <h3>Error...</h3>;
  const { author } = data;

  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid item={true} xs={12} display="flex" flexDirection="column" alignItems="center">
          <Avatar src={author.avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="p" variant="h5" color="text.secondary" mt={2}>
            {author.field}
          </Typography>
        </Grid>
        <Grid item={true} xs={12} mt={5}>
          <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(author.description.html) }}></div>
        </Grid>
        <Grid item={true} xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {author.name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {author.posts.map((post) => (
              <Grid item={true} xs={12} sm={6} md={4} key={post.id}>
                <CardEL title={post.title} slug={post.slug} coverPhoto={post.coverPhoto} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthorPage;
