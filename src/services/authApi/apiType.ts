/** @format */

export interface PostTodoResponceInterface {
  title: string;
  body: string;
  userId: number;
  id: number;
}

export interface PostTodoPayloadInterface {
  title: string;
  body: string;
  userId: number;
}

export interface UserInfo {
  id: string;
  name: string; // "sanaz";
  phoneNumber: string; // "09384997337";
  email: string; //"sanaz@yahoo.com";
  createdAt: string; // "2024-08-25T18:39:40.754Z";
  updatedAt: string; // "2024-08-25T18:39:40.754Z";
  loginAttempts: number; // 0;
}

export interface LoginResponceInterface {
  exp: number;
  message: string; //"Auth Passed";
  token: string;
  user: UserInfo;
}

export interface LoginPayloadInterface {
  email: string;
  password: string;
}
