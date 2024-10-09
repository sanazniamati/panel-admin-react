/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginPayloadInterface, LoginResponceInterface } from "./apiType";

export const authApi = createApi({
  reducerPath: "authApi",
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

    getMe: builder.query<void, string>({
      query: (token) => ({
        url: "users/me",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useLoginUserMutation, useGetMeQuery, useLazyGetMeQuery } = authApi;
