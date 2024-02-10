import React, { useState, useEffect } from 'react';
import Page from "../components/Page";
import PostForm from '../components/PostForm';
import '../PostFormModal.css';
import { CREATE_POST_MUTATION } from "../graphql/mutations";
import { GET_ALL_POSTS } from "../graphql/mutations";

import { useMutation, useQuery } from "@apollo/client";

const headContent = (
  <>
    <title>Change Me! - Home</title>
    <meta name="description" content="This is the home page of my app." />
  </>
);

export default function Dashboard() {
  const [createPostMutation] = useMutation(CREATE_POST_MUTATION);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  useEffect(() => {
    if (!loading && data) {
      setPosts(data.getAllPosts);
    }
  }, [loading, data]);

  const handlePostSubmit = async (postData) => {
    try {
      if (!postData?.image) {
        console.log(postData);
        throw Error("No image detected");
      }

      postData.image = postData.image.name;

      const response = await createPostMutation({
        variables: { ...postData },
      });

      console.log(response);

      setPosts([...posts, response.data.createPost]);

      setIsFormOpen(false);

    } catch (error) {
      console.error('Error saving post:', error.message);
    }
  };


  return (
    <Page isProtected={true} headContent={headContent}>
      <div>Dashboard
        <button onClick={() => setIsFormOpen(true)}>Open Post Form</button>
        {isFormOpen && <PostForm onSubmit={handlePostSubmit} />}
        <div>
          <h2>Posts</h2>
          <ul>
            {posts.map(post => (
              <li key={post._id}>
                <strong>{post.concertName}</strong>: {post.message}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Page>
  );
}