import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import { getLostPosts, getFoundPosts } from "../api/api.js"; // Import functions to fetch posts

const headContent = (
  <>
    <title>Lost and Found - Home</title>
    <meta name="description" content="Welcome to the Lost and Found platform." />
  </>
);

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("all"); // "all", "lost", "found"


  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      let fetchedPosts = [];
      if (filter === "all" || filter === "lost") {
        const lostPosts = await getLostPosts(); // Function to fetch lost posts from server
        fetchedPosts = [...fetchedPosts, ...lostPosts];
      }
      if (filter === "all" || filter === "found") {
        const foundPosts = await getFoundPosts(); // Function to fetch found posts from server
        fetchedPosts = [...fetchedPosts, ...foundPosts];
      }
      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const toggleFilter = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <Page isProtected={false} headContent={headContent}>
      <div>
      <h2>Report Lost or Found Items Here</h2>
        <p>
          Report lost items on the {" "} form 
          <Link to="/LostItems">HERE</Link>.
        </p>
        <p>
          Report found items on the {" "} form 
          <Link to="/FoundItems">HERE</Link>.
        </p>
        <h2>View What Other Users Have Lost or Found</h2>
        <div>
          <button onClick={() => toggleFilter("all")}>All Posts</button>
          <button onClick={() => toggleFilter("lost")}>Lost Posts</button>
          <button onClick={() => toggleFilter("found")}>Found Posts</button>
        </div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p>{post.time}</p>
              <p>{post.location}</p>
            </li>
          ))}
          </ul>
      </div>
    </Page>
  );
};

export default Home;
