/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICustomer, ICustomerPayload } from "../../models/customerType";

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

    getCustomerById: builder.query<ICustomer, string>({
      query: (id) => `customers/${id}`,
      transformResponse(res: ICustomerPayload) {
        const birthDateArr = res.birthDayDate.split("/");
        console.log(birthDateArr);
        console.log("getCustomerById: ", res.id);

        return {
          id: res.id,
          firstName: res.firstName,
          lastName: res.lastName,
          idNumber: res.idNumber,
          day: birthDateArr[0],
          month: birthDateArr[1],
          year: birthDateArr[2],
          phoneNumber: res.phoneNumber,
          status: res.status,
          email: res.email,
        };
      },
    }),

    editCustomerById: builder.mutation<void, ICustomerPayload>({
      query: ({ id, ...rest }) => ({
        method: "PUT",
        url: `customers/${id}`,
        body: rest,
      }),
    }),
  }),
});

export const {
  useGetAllCustomersQuery,
  useLazyGetAllCustomersQuery,
  useGetCustomerByIdQuery,
  useLazyGetCustomerByIdQuery,
  useEditCustomerByIdMutation,
} = customerApi;
