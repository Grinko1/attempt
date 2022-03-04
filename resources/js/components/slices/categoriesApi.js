import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
    reducerPath: "categoriesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://powerful-shore-86223.herokuapp.com/api/",
    }),
    endpoints: (builder) => ({
        getAllBalcony: builder.query({
            query: () => "balconies",
        }),
    }),
});

export const { useGetAllBalconyQuery } = categoriesApi;
