import Page from "../components/Page";
//import { useQuery } from "@apollo/client";

//import ProfileList from '../components/ProfileList';
//import ProfileForm from '../components/ProfileForm';

// import { QUERY_PROFILES } from '../utils/queries';

// // how we get info from backend:
// const Home = () => {
//   const { loading, data } = useQuery(QUERY_PROFILES);

//   const profiles = data?.profiles || [];

//   return (
//     <main>
//       <div className="flex-row justify-center">
//         <div
//           className="col-12 col-md-10 mb-3 p-3"
//           style={{ border: '1px dotted #1a1a1a' }}
//         >
//           <ProfileForm />
//         </div>

//         <div className="col-12 col-md-10 my-3">
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <ProfileList
//               profiles={profiles}
//               title="Here's the current roster of friends..."
//             />
//           )}
//         </div>
//       </div>
//     </main>
//   );
// };


const headContent = (
<>
<title>Change Me! - Home</title>
<meta name="description" content="This is the home page of my app." />
</>
);

export default function Home() {
return (
<Page isProtected={false} headContent={headContent}>
  <div>Home</div>
</Page>
);
};

