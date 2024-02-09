import Page from "../components/Page";

const headContent = (
  <>
    <title>Live:Interactive</title>
    <meta name="description" content="This is the home page of my app." />
  </>
);

export default function Home() {
  return (
    <Page isProtected={false} headContent={headContent}>
      <h2>WELCOME</h2>
      <div>Live:Interactive is a streamlined platform enabling event attendees to efficiently report and track lost items. Users are able to provide brief description, the time, and location of the loss items. Users are also able to report items that they have found at event and try to help return them to the items owner.</div>
    </Page>
  );
}
