export interface LoginResponse {
  succes: boolean;
  user: User;
  token: string;
}

export interface User {
  name: string;
  avatar: string;
  level: number;
  points: number;
  archivements: any[];
  _id: string;
  type: string;
  user: string;
  email: string;
}
