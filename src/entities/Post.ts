export class Post {
    private title: string;
    private description: string;
    private user_id: string;

    constructor(title: string, description: string, userId: string) {
        this.title = title;
        this.description = description;
        this.user_id = userId;
    }

    setTitle(title: string) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    setDescription(description: string) {
        this.description = description;
    }

    getDescription() {
        return this.description;
    }

    getUserId() {
        return this.user_id;
    }

    setUserId(userId: string) {
        this.user_id = userId;
    }
}