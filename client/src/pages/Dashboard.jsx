import React, { useState } from "react";
import { Link } from "react-router-dom";
import Page from "../components/Page";
import PostForm from '../components/PostForm';
import '../PostFormModal.css';
import { Link } from 'react-router-dom';

import { CREATE_POST_MUTATION } from "../graphql/mutations";
import { GET_ALL_POSTS } from "../graphql/queries";

import { useMutation, useQuery } from "@apollo/client";

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  postList: {
    listStyle: 'none',
    padding: 0,
  },
  postItem: {
    marginBottom: '20px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    transition: 'transform 0.2s ease-in-out',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  postLink: {
    textDecoration: 'none',
    color: '#333',
    display: 'block',
  },
  postTitle: {
    fontSize: '1.2rem',
    marginBottom: '8px',
    color: '#333',
  },
  postAuthor: {
    fontSize: '0.9rem',
    color: '#888',
  },
  addButton: {
    padding: '10px',
    background: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

const headContent = (
  <>
    <title>Live:Interactive - Dashboard</title>
    <meta name="description" content="Welcome to the Lost and Found platform." />
    <title>Dashboard</title>
    <meta name="description" content="This is the home page of my app." />
  </>
);

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("all"); // "all", "lost", "found"
}

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
  const handlePostClick = (postId) => {
    getPostById({ variables: { postId } });
  };

  return (
    <Page isProtected={false} headContent={headContent}>
      <div>
        <h1>Welcome to the Lost and Found Platform!</h1>
    <Page isProtected={true} headContent={headContent}>
      <div style={styles.container}>
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
          <h2>All Posts</h2>
          <button style={styles.addButton} onClick={() => setIsFormOpen(true)}>
            Add New Post
          </button>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {!loading && !error && (
            <ul style={styles.postList}>
              {posts.map((post) => (
                <li key={post._id} style={styles.postItem}>
                  <Link to={`/post/${post._id}`} style={styles.postLink} onClick={() => handlePostClick(post._id)}>
                    <div>
                      <h3 style={styles.postTitle}>{post.concertName}</h3>
                      <p style={styles.postAuthor}>By {post.user.firstName} {post.user.lastName}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        {isFormOpen && <PostForm onSubmit={handlePostSubmit} />}
      </div>
    </Page>
  );
};

export default Dashboard;

};