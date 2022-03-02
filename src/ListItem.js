import React from "react";

const ListItem = ({ post }) => {
  return (
    <div key={post.id}>
      <div> {post.title}</div>
      <div> {post.body}</div>
    </div>
  );
};

export default ListItem;
