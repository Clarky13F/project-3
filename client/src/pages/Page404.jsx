import Page from "../components/Page";

const headContent = (
  <>
    <title>This is a 404 E̵̡̧̧̬̞̣̯̺̠͉͉̝̟̥̝͗̀R̵̢̝͇̻͍̻̭͕̣̹̖̺̰̣̾̊͌̈́͊͂͂͊́R̸̼͉̠̫͔͉̓́̊̇͑̋͠͠Ờ̷̢̛̹̥͚̫̰̬̹̦̋͒̆̑̒̐̕͝Ṟ̶̢̡̝̫̝̗̭͕̬͎̪̾̈̇̉͗͐͋̽̍͌  message: this page is temporarily unresponsive.</title>
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
