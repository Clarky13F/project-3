// Profile.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Page from "../components/Page";
import { getUserPosts, updateUserInfo } from "../api"; // Import functions to fetch user posts and update user info

const headContent = (
  <>
    <title>Lost and Found - Profile</title>
    <meta name="description" content="User profile with posts and account information." />
  </>
);

const Profile = () => {
  const { userId } = useParams();
  const [userPosts, setUserPosts] = useState([]);
  const [userInfo, setUserInfo] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    fetchUserPosts();
    fetchUserInfo();
  }, [userId]);

  const fetchUserPosts = async () => {
    try {
      const posts = await getUserPosts(userId); // Function to fetch user posts from server
      setUserPosts(posts);
    } catch (error) {
      console.error("Error fetching user posts:", error);
    }
  };

  const fetchUserInfo = async () => {
    try {
      // Fetch user info based on userId and set it to userInfo state
      // This is where you would make a GraphQL query to get user information
      const user = await getUserInfo(userId);
      setUserInfo(user);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleUpdateInfo = async () => {
    try {
      // Update user info based on the userInfo state
      // This is where you would make a GraphQL mutation to update user information
      await updateUserInfo(userId, userInfo);
      console.log("User information updated successfully!");
    } catch (error) {
      console.error("Error updating user info:", error);
    }
  };

  return (
    <Page isProtected={true} headContent={headContent}>
      <div>
        <div style={{ float: "left", width: "50%" }}>
          <h2>Your Posts</h2>
          <ul>
            {userPosts.map((post) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <p>{post.time}</p>
                <p>{post.location}</p>
                {/* Add other post details as needed */}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ float: "right", width: "50%" }}>
          <h2>Update Account Information</h2>
          <form>
            {/* <label>
              Username:
              <input
                type="text"
                name="username"
                value={userInfo.username}
                onChange={handleInputChange}
              />
            </label> */}

            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={userInfo.firstName}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
              />
            </label>

            <label>
              Password:
              <input
                type="password"
                name="password"
                value={userInfo.password}
                onChange={handleInputChange}
              />
            </label>

            <button type="button" onClick={handleUpdateInfo}>
              Update Information
            </button>
          </form>
        </div>

        <div style={{ clear: "both" }}></div>
      </div>
    </Page>
  );
};

export default Profile;
