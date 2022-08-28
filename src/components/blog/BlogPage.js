import React from "react";
import { useQuery } from "@apollo/client";
import { Avatar, Container, Typography, Grid, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { GET_POST_INFO } from "../../graphql/queries";
import Loader from "../shared/Loader";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import sanitizeHTML from "sanitize-html";
import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";

const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, data, errors } = useQuery(GET_POST_INFO, { variables: { slug } });

  if (loading) return <Loader />;
  if (errors) return <h3>Error...</h3>;
  //   const { author } = data;
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item={true} xs={12} mt={9} display="flex" justifyContent="space-between">
          <Typography component="h2" variant="h4" color="primary" fontWeight={700}>
            {data.post.title}
          </Typography>
          <ArrowBackRoundedIcon onClick={() => navigate(-1)} />
        </Grid>
        <Grid item={true} xs={12} mt={6}>
          <img src={data.post.coverPhoto.url} alt={data.post.slug} width="100%" style={{ borderRadius: 15 }} />
          <Grid item={true} xs={12} mt={7} display="flex" alignitem={true} s="center">
            <Avatar src={data.post.author.avatar.url} sx={{ width: 80, height: 80, marginLeft: 2 }} />
            <Box component="div" m={2}>
              <Typography component="p" variant="h5" fontWeight={700}>
                {data.post.author.name}
              </Typography>
              <Typography component="p" variant="p" color="text.secondary">
                {data.post.author.field}
              </Typography>
            </Box>
          </Grid>
          <Grid item={true} xs={12} mt={5}>
            <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(data.post.content.html) }}></div>
          </Grid>
        </Grid>
        <Grid ietm xs={12}>
          <CommentForm slug={slug} />
        </Grid>
        <Grid ietm xs={12}>
          <Comments slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPage;
