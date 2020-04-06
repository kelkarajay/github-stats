export class User {
    username: String
    name: String
    avatarUrl: String
    numberOfFollowers: number

    constructor (username: String, name: String, avatarUrl: String, numberOfFollowers: number) {
        this.username = username;
        this.name = name;
        this.avatarUrl = avatarUrl;
        this.numberOfFollowers = numberOfFollowers;
    }
}

export class UserResponse {
    total_count: number = 0;
    items: User[] = []
}