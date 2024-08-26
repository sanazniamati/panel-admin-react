/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  LoginPayloadInterface,
  LoginResponceInterface,
  PostTodoPayloadInterface,
  PostTodoResponceInterface,
} from "./apiType";

export const authApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.mv-team.ir/api/" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<LoginResponceInterface, LoginPayloadInterface>({
      query: (body) => {
        return {
          url: "users/login",
          method: "POST",
          body,
        };
      },
    }),
    // getTodoOne: builder.query<object, void>({
    //   query: () => `todos/1`,
    // }),
    // postTodo: builder.mutation<PostTodoResponceInterface, PostTodoPayloadInterface>({
    //   query: (body) => {
    //     return {
    //       url: "users/login",
    //       method: "POST",
    //       body,
    //     };
    //   },
    // }),
  }),
});

export const { useLoginUserMutation } = authApi;
// export const { usePostTodoMutation } = authApi;
