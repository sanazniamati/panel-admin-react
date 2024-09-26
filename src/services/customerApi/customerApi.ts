/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICustomerPayload } from "../../models/customerType";

export const customerApi = createApi({
  reducerPath: "customerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    // builder.query<ResponceInterface,payloadInterface>
    //paload ==> string & Responce ==>ICustomerPayload[]
    getAllCustomers: builder.query<ICustomerPayload[], string>({
      query: (searchQuery) => {
        if (searchQuery.length > 2) return `customers?firstName=${searchQuery}`;
        return "customers";
      },
    }),
  }),
});

export const { useGetAllCustomersQuery, useLazyGetAllCustomersQuery } = customerApi;
