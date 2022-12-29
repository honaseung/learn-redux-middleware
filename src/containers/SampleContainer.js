import { useEffect } from "react";
import { connect } from "react-redux";
import Sample from "../components/Sample";
import { getPosts, getUsers } from "../modules/sample";

const SampleContainer = ({
  loadingPosts,
  loadingUsers,
  posts,
  users,
  getPosts,
  getUsers,
}) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await getPosts(1);
        await getUsers(1);
      } catch (error) {
        alert(error);
      }
    };
    fn();
  }, [getPosts, getUsers]);
  return (
    <Sample
      loadingPosts={loadingPosts}
      loadingUsers={loadingUsers}
      posts={posts}
      users={users}
    />
  );
};

export default connect(
  (state) => ({
    loadingPosts: state.loading["sample/GET_POSTS"],
    loadingUsers: state.loading["sample/GET_USERS"],
    posts: state.sample.posts,
    users: state.sample.users,
  }),
  {
    getPosts,
    getUsers,
  }
)(SampleContainer);
