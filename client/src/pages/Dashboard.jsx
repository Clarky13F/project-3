import React, { useState } from "react";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import { getLostPosts, getFoundPosts } from "../api/api.js"; // Import functions to fetch posts

const headContent = (
  <>
    <title>Live:Interactive - Dashboard</title>
    <meta name="description" content="Welcome to the Lost and Found platform." />
  </>
);

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("all"); // "all", "lost", "found"

  // Fetch posts when component mounts
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
        <h1>Welcome to the Lost and Found Platform!</h1>
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
              {/* Add other post details as needed */}
            </li>
          ))}
        </ul>
        <div>
        <h1>Welcome to the Lost and Found Platform!</h1>
        <p>
          Report lost or found items and connect with others to recover your belongings.
        </p>
        <div>
          <Link to="./LostItems">
            <button>Report Lost Item</button>
          </Link>
          <Link to="/FoundItems">
            <button>Report Found Item</button>
          </Link>
        </div>
      </div>
      </div>
    </Page>
  );
};

export default Dashboard;
