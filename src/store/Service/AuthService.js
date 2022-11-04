import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AuthApi = createApi({
  reducerPath: "AuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://go.contact.mmeducare.com/api/v1",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          url: "/login",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = AuthApi;
