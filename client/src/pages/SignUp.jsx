import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../graphql/mutations";
import { useSelector } from "react-redux";
import { getUser } from "../redux/slices/userSlice";
import { Navigate } from "react-router-dom";
import Auth from '../components/Auth.jsx';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Navbar from '../components/Navbar.jsx';

const styles = {
  form: {
    display: "flex",
    flexDirection: "Column",
    width: "300px",
  },
  submitBtn: {
    cursor: "pointer",
  },
};

const headContent = (
  <>
    <title className="SignUp">Sign Up Here !</title>
    <meta
      name="description"
      content="Sign Up page for Project-3 Starter Code."
    />
  </>
);

export default function SignUp() {
  const [addUser, { error, data, loading }] = useMutation(ADD_USER);
  const { isAuthenticated } = useSelector(getUser());

  const [formState, setFormState] = useState({
    firstName: "first",
    lastName: "last",
    email: "first_last@gmail.com",
    userID: "userID",
    password: "123",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      AuthService.login(data.addUser.token);
    } catch (e) {

      if (error?.graphQLErrors) {
        const userInputError = error.graphQLErrors.find(
          (err) => err.extensions.code === "BAD_USER_INPUT"
        );

        if (userInputError) {
          //console.error('User input error:', userInputError.message);
        } else {
          console.error('Other GraphQL error:', error.message);
        }
      } else {
        //console.error(e);
      }
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <Page isProtected={false} headContent={headContent}>
      <div>Sign Up</div>
      <form style={styles.form} onSubmit={handleFormSubmit}>
        <input
          placeholder="First Name"
          name="firstName"
          type="text"
          value={formState.firstName}
          onChange={handleChange}
        />
        <input
          placeholder="Last Name"
          name="lastName"
          type="text"
          value={formState.lastName}
          onChange={handleChange}
        />
        <input
          placeholder="Email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          placeholder="userID"
          name="userID"
          type="userID"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
        {loading ? (
          <button type="submit" disabled={true} style={styles.submitBtn}>
            Loading...
          </button>
        ) : (
          <button type="submit" style={styles.submitBtn}>
            Submit
          </button>
        )}
      </form>
      {error && <h3>{error.message}</h3>}
    </Page>
  );
}
