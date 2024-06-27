# Rows
[] Release
[] Review Comment
[] Jira ID
[x] Assigne
[] Dependency
[x] Status
[] Review Done(peer)
[] Arch Signoff
[x] Comments
[] Actions
[x] Links
[] LOC
[] File Counts
[x] Start Date
[x] End Date
[x] DOD
EXTRA
[] Peer Observation
[] PR Observation by peer


```bash
https://api.github.com/repos/nuxeo/nuxeo-web-ui/pulls/2249
```
[] Release
[] Review Comment   => title(sub string)
[x] Jira ID         => title(sub string)
[x] Assigne        => user.login
[] Dependency
[x] Status          => state
[] Review Done(peer)  => requested_reviewers[{login},{login}]
[] Arch Signoff  => requested_reviewers[{login},{login}]
[x] Comments     => review_comments(count) + => body https://api.github.com/repos/nuxeo/nuxeo-web-ui/pulls/2249/comments   
[x] Actions      => User
[x] Links        => html_url(Issues URL)
[X] LOC           => additions + => deletions
[x] File Counts  => changed_files
[x] Start Date   => created_at
[x] End Date     => merged_at
[X] DOD          => User