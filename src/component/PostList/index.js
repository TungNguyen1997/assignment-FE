import React from "react";
import { Grid } from "@material-ui/core";
import PostItem from "../PostItem";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/action";
import { postState$ } from "../../redux/selector/index.";
export default function PostList() {
  const posts = useSelector(postState$);
  const dispatch = useDispatch();
  console.log(posts)
  React.useEffect(() => {
    dispatch(actions.getPost.getPostRequest());
  }, [dispatch]);

  return (
    <Grid container spacing={2} alignItems="stretch">
      {posts.map((post) => {
        return (
          <Grid item xs={6} sm={6}>
            <PostItem key={post._id} post={post}></PostItem>{" "}
          </Grid>
        );
      })}
    </Grid>
  );
}
