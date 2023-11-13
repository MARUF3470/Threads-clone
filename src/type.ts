export type AuthStateType = {
    email?: string
    name?: string
    username?: string
    password?: string
    password_confirmation?: string
}
export type AuthErrorType = {
    email?: string
    name?: string
    username?: string
    password?: string
}

export type PostErrorType = {
    content?: string;
    image?: string;
};


export type User = {
    id: number;
    name: string;
    username: string;
    email?: string;
    image?: string;
};

export type PostType = {
    id: number;
    user_id: number;
    content: string;
    image?: string;
    comment_count: number;
    Comment?: Array<CommentType> | []
    likes_count: number;
    created_at: string;
    user: User;
    Likes: Array<PostLikeType> | [];
};
export type CommentType = {
    id: number;
    user_id: number;
    post_id: number;
    content: string;
    created_at: string;
    user: User;
};

export type ShowUserType = {
    id: number;
    name: string;
    username: string;
    email: string
    Post: Array<PostType> | []
    Comment: Array<CommentType> | []

}

export type NotificationType = {
    id: number;
    user_id: number;
    toUser_id: number;
    content: string;
    created_at: string;
    user: User
}

export type PostLikeType = {
    id: number,
    post_id: number,
    user_id: number
}

export type LikeType = {
    post_id: string
    toUser_id: string
    status: string
}