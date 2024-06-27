'use server';
import { extratIssuesData, extractPrData,extractCommentsData } from "@/utils/github-utils";
import { REPO, PR_URL,Comment_URL } from "@/types/types";


export async function GithubIssuesAction({ owner, name }: REPO) {
    try {
        const resp = await fetch(`https://api.github.com/repos/${owner}/${name}/issues`);
        const data = await resp.json();
        const issues = extratIssuesData(data)
        return {
            message: "Issues fetched successfully",
            data: issues
        }

    } catch (err) {
        return {
            message: "Error while fetching issues",
            data: []
        }
    }

}

export async function GithubPRAction(pr_url: PR_URL) {
    try{
        const resp = await fetch(pr_url);
        const data = await resp.json();
        const pr = extractPrData(data)
        return{
            message: "PR fetched successfully",
            data: pr
       }
    }catch(err){
       return{
            message: "Error while fetching PR",
            data: {}
       }
    }
}

export async function GithubComments(comment_url:Comment_URL){
    try{
        const resp = await fetch(comment_url);
        const data = await resp.json();
        const comments = extractCommentsData(data);
        return {
            message: "Comments fetched successfully",
            data: comments
        }
    }catch(err){
        return {
            message: "Error while fetching comments",
            data: []
        }
    }
}