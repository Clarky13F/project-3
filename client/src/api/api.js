// api.js
import axios from "axios";

const API_BASE_URL = "http://localhost:3001/graphql";
export const getLostPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/lost-posts`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching lost posts: " + error.message);
  }
};

export const getFoundPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/found-posts`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching found posts: " + error.message);
  }
};
