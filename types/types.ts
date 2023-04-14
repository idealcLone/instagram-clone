export interface User {
  id: number;
  username: string;
  password: string;
  followers: number[];
  following: number[];
}

export interface IPost {
  id: number;
  author: number;
  description: string;
  image: string;
  created_at: Date | string;
  user?: User;
  likes: number[];
}

export interface IFollow {
  id: number;
  follower: number;
  following: number;
  created_at: Date | string;
}
