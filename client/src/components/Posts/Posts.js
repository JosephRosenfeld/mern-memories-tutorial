import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import { Grid, CircularProgress } from "@material-ui/core";

import useStyles from "./styles";

const Posts = ({ setCurrentId, delCount, setDelCount }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems='stretch'
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post
            post={post}
            setCurrentId={setCurrentId}
            delCount={delCount}
            setDelCount={setDelCount}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
