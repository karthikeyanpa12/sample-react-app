import { useState, useEffect } from "react";
import ListItem from "./ListItem";

const List = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <ListItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default List;
