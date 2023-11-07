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
    created_at: string;
    user: User;
  };