import { ISSUE, API_ISSUE, PR_API, PR, API_COMMENT, COMMENT } from "@/types/types"



export function extratIssuesData(data: API_ISSUE[]): ISSUE[] {
        const issues: ISSUE[] = data?.map((issue: API_ISSUE) => {
                return {
                        pr_url: issue?.url,
                        html_url: issue?.html_url,
                        title: issue?.title,
                        user_name: issue?.user?.login,
                        pr_state: issue?.state,
                        avatar_url: issue?.user?.avatar_url,
                        comments: issue?.comments,
                        created_at: issue?.created_at,
                        closed_at: issue?.closed_at,
                        updated_at: issue?.updated_at,
                }
        })
        return issues;
}

export function extractPrData(pr: PR_API): PR {
        const prData: PR = {
                html_url: pr?.html_url,
                pr_state: pr?.state,
                title: pr?.title,
                user_name: pr?.user?.login,
                avatar_url: pr?.user?.avatar_url,
                user_profile: pr?.user?.html_url,
                requested_reviewers: pr?.requested_reviewers.map(reviewer => reviewer?.login),
                review_comments_url: pr?.review_comments_url,
                repo_name: pr?.base?.repo?.name,
                repo_fullname: pr?.base?.repo?.full_name,
                merged: pr?.merged,
                review_comments: pr?.review_comments,
                additions: pr?.additions,
                deletions: pr?.deletions,
                changed_files: pr?.changed_files,
                created_at: pr?.created_at,
                updated_at: pr?.updated_at,
                closed_at: pr?.closed_at,
                merged_at: pr?.merged_at
        }
        return prData;
}

export function extractCommentsData(comments: API_COMMENT[]): COMMENT[] {
        const commentsData = comments?.map((comment: API_COMMENT) => {
                return {
                        user_name: comment?.user?.login,
                        html_url: comment?.user?.html_url,
                        avatar_url: comment?.user?.avatar_url,
                        message: comment?.body
                }
        })
        return commentsData;
}