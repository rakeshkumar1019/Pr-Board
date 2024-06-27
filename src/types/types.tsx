export type ISSUE = {
    pr_url: string,
    html_url: string,
    title: string,
    user_name: string,
    pr_state: 'open' | 'closed',
    avatar_url: string,
    comments: number,
    created_at: string,
    closed_at: string | null,
    updated_at: string | null,
}

export type API_ISSUE = {
    url: string,
    html_url: string,
    title: string,
    user: {
        login: string,
        avatar_url: string
    },
    state: 'open' | 'closed',
    comments: number,
    created_at: string,
    closed_at: string | null,
    updated_at: string | null
}

export type REPO = {
    owner: string,
    name: string
}

export type PR_URL = string

export type PR = {
    html_url: string,
    pr_state: 'open' | 'closed',
    title: string,
    user_name: string,
    avatar_url: string,
    user_profile: string,
    requested_reviewers: string[],
    review_comments_url: string,
    repo_name: string,
    repo_fullname: string,
    merged: boolean,
    review_comments: number,
    additions: number,
    deletions: number,
    changed_files: number,
    created_at: string,
    updated_at: string,
    closed_at: string,
    merged_at: string
}
type REQUESTED_REVIEWER = {
   login:string
}
export type PR_API = {
    html_url: string,
    state: 'open' | 'closed',
    title: string,
    user: {
        login: string,
        avatar_url: string,
        html_url: string
    },
    requested_reviewers: REQUESTED_REVIEWER[],
    review_comments_url: string,
    base: {
        repo: {
            name: string,
            full_name: string
        }
    },
    merged: boolean,
    review_comments: number,
    additions: number,
    deletions: number,
    changed_files: number,
    created_at: string,
    updated_at: string,
    closed_at: string,
    merged_at: string


}

export type Comment_URL = string

export type API_COMMENT={
   user:{
    login:string,
    html_url:string,
    avatar_url:string,
   },
   body:string,
}

export type COMMENT = {
    user_name:string,
    html_url:string,
    avatar_url:string,
    message:string
}