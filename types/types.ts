export interface User {
  id: number;
  username: string;
  password: string;
  followers: number[];
  following: number[];
}

export interface Post {
  id: number;
  authorId: number;
  description: string;
  created_at: Date | string;
}

export interface Follow {
  id: number;
  follower: number;
  following: number;
  created_at: Date | string;
}
