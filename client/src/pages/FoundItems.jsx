// FoundItems.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Page from "../components/Page";

const headContent = (
  <>
    <title>Lost and Found - Report Found Item</title>
    <meta name="description" content="Report a found item to help in returning it to the owner." />
  </>
);

const FoundItems = () => {
  const [itemDetails, setItemDetails] = useState({
    itemName: "",
    description: "",
    time: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send the itemDetails to the server (via GraphQL mutation)
    // This is where you would make a GraphQL mutation to save the found item details
    console.log("Item details submitted:", itemDetails);
  };

  return (
    <Page isProtected={false} headContent={headContent}>
      <div>
        <h1>Report Found Item</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Item Name:
            <input
              type="text"
              name="itemName"
              value={itemDetails.itemName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Description:
            <textarea
              name="description"
              value={itemDetails.description}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Time of Finding:
            <input
              type="datetime-local"
              name="time"
              value={itemDetails.time}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Location of Finding:
            <input
              type="text"
              name="location"
              value={itemDetails.location}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Report Found Item</button>
        </form>

        
      </div>
    </Page>
  );
};

export default FoundItems;