import { GithubIssuesAction,GithubPRAction,GithubComments } from "@/actions/github";
export default async function Home() {
  const repo =  {
   owner: "nuxeo",
   name: "nuxeo-web-ui"
  }
  // const {message,data} = await GithubIssuesAction(repo)
  // console.log("Issues",message)
  // const {message,data} = await GithubPRAction(`https://api.github.com/repos/nuxeo/nuxeo-web-ui/pulls/1092`)
  // console.log("PRs",data)
  // const {message,data} = await GithubComments(`https://api.github.com/repos/nuxeo/nuxeo-web-ui/pulls/2249/comments`)
  // console.log("comments",message)

  return (
   <main>
      PR BOARD
   </main>
  );
}
