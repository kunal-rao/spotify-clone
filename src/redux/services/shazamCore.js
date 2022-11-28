import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


    export const shazamCoreApi = createApi({
        reducerPath : 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
         baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
          prepareHeaders: (headers)=>{
            headers.set('X-RapidAPI-Key', 'b57632ef0fmsh3c207de16f8d6c4p1de659jsna03b22ba4108 ');
             return headers;
          }
        }),
        endpoints: (builder)=> ({
          getTopCharts: builder.query({ query: ()=> '/charts/world'}),
        }),
    });

    export const {
        useGetTopChartsQuery, 
    } = shazamCoreApi ;