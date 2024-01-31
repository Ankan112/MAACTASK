import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://staging-api.erpxbd.com/api/v1",
  }),
  tagTypes: ["user"],
  endpoints: () => ({}),
});

export default api;
