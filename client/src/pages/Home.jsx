import Page from "../components/Page";
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
// import { QUERY_MATCHUPS } from '../utils/queries';
import Auth from '../components/Auth.jsx';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Navbar from '../components/Navbar.jsx';

const Home = () => {
//   const [matchupList, setMatchupList] = useState([]);
//   // the Outlet component will conditionally swap between the different pages according to the URL
//   const matchupList = data?.matchups || [];
// // how we get info from backend:
//   const { loading, data } = useQuery(QUERY_MATCHUPS, {
//     fetchPolicy: "no-cache"
//   });

//   useEffect(() => {
//     const getMatchupList = async () => {
//       try {
//         const res = await getAllMatchups();
//         if (!res.ok) {
//           throw new Error('No list of matchups');
//         }
//         const matchupList = await res.json();
//         setMatchupList(matchupList);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     getMatchupList();
//   }, []);

  return (
<header className="live:interactive-hub">ᗷE IᑎTEᖇᗩᑕTIᐯE ƪ(˘⌣˘)ʃ</header>
  )};
  
export default Home;

{/* 
  // style={{ border: '1px dotted #1a1a1a' }} */}

{/* <div id="tagLine">
      <h3>ᗷE IᑎTEᖇᗩᑕTIᐯE ƪ(˘⌣˘)ʃ</h3>
  </div> */}