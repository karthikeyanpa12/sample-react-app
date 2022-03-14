import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import axios from "axios";

const List = () => {
  const [posts, setPost] = useState([]);

  const fetchPosts = async (url) => {
    const res = await axios.get(url);
    setPost(res.data);
  };

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    //Option 1

    // fetch(url)
    //   .then((response) => response.json())
    //   .then((json) => setPost(json));

    //Option 2
    // axios
    //   .get(url)
    //   .then((response) => {
    //     setPost(response?.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    //Option 3
    fetchPosts(url);
  }, []);

  return (
    <ul>
      {posts?.map((post) => (
        <ListItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default List;
