export class GithubUserModel{
    login: String
	id: number
	node_id: String
	avatar_url: String
	gravatar_id?: String
	url: String
	html_url: String
	followers_url: String
	following_url: String
	gists_url: String
	starred_url: String
	subscriptions_url: String
	organizations_url: String
	repos_url: String
	events_url: String
	received_events_url: String
	type: String
	site_admin: boolean
    score: number
}

export class GithubUserDetailModel{ 
	login: String
	id: number
	node_id: String
	avatar_url: String
	gravatar_id: String
	url: String
	html_url: String
	followers_url: String
	following_url: String
	gists_url: String
	starred_url: String
	subscriptions_url: String
	organizations_url: String
	repos_url: String
	events_url: String
	received_events_url: String
	type: String
	site_admin: boolean
	name: String
	company?: String
	blog: String
	location: String
	email: String
	hireable?: String
	bio: String
	public_repos: number
	public_gists: number
	followers: number
	following: number
	created_at: String
	updated_at: String
}

export class GithubUserCollectionModel{
    total_count: number = 0
    incomplete_results: boolean = false;
    items: GithubUserModel[] = []
}