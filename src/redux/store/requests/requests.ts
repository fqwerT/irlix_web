import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Vacation,
  VacationsTypes,
} from "../../../types & interfaces/vacations";

import { baseUrl } from "../../../utils/helpers";

export const requestsApi = createApi({
  reducerPath: "requestsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getVacations: builder.query<VacationsTypes[], void>({
      query: () => `initial_data`,
    }),
    getVacationsList: builder.query<Vacation[], void>({
      query: () => ``,
    }),
    getVacactionById: builder.query<Vacation, string | null>({
      query: (id) => `single?reqnumber=${id}`,
    }),
    vacationStatus: builder.mutation({
      query: (payload) => ({
        url: `request?reqnumber=${payload.id}`,
        method: "POST",
        body: JSON.stringify({ status: payload.status }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    postVacation: builder.mutation({
      query: (data) => ({
        url: "",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetVacationsQuery,
  useGetVacationsListQuery,
  useGetVacactionByIdQuery,
  useVacationStatusMutation,
  usePostVacationMutation,
} = requestsApi;
