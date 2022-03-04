import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const flatApi = createApi({
    reducerPath: "flatApi",
    tagTypes: ["Flats"],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://powerful-shore-86223.herokuapp.com/api/",
    }),
    endpoints: (build) => ({
        getFlats: build.query({
            query: ({
                build_id,
                room_id,
                resale_id,
                area,
                price_from,
                price_to,
            }) => ({
                url: `flats`,
                params: {
                    build_id: build_id,
                    room_id: room_id,
                    resale_id: resale_id,
                    area: area,
                    price_from: price_from,
                    price_to: price_to,
                },
            }),
        }),
        getFlat: build.query({
            query: (id) => ({
                url: `flats/${id}`,
            }),
        }),
    }),
});

export const { useGetFlatsQuery, useGetFlatQuery } = flatApi;
