import Auth from '../components/Auth.jsx';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Navbar from '../components/Navbar.jsx';

const headContent = (
  <>
    <title>Change Me! - 404</title>
    <meta name="description" content="404 Error, page not found." />
  </>
);

export default function Page404() {
  return (
    <Page isProtected={false} headContent={headContent}>
      <div>404 Page Not Found</div>
    </Page>
  );
}
