/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
   import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

   // Define a service using a base URL and expected endpoints
   export const Api = createApi({
     reducerPath: "Api",
     baseQuery: fetchBaseQuery({
       baseUrl: "http://localhost:8000/api",
       prepareHeaders: async (headers) => {
         return new Promise((resolve) => {
           async function checkToken() {
             const clerk = window.Clerk;
             if (clerk) {
               const token = await clerk.session?.getToken();
               headers.set("Authorization", `Bearer ${token}`);
               resolve(headers);
             } else {
               setTimeout(checkToken, 500);
             }
           }
           checkToken();
         });
       },
     }),
     endpoints: (build) => ({
       getAllProducts: build.query({
         query: () => `/products`,
       }),
       getProductsBySearch: build.query({
         query: (query) => `/products/search?search=${query}`,
       }),
<<<<<<< HEAD
       getProductsByCategory: build.query({
          query: (categoryId) => `/products?categoryId=${categoryId}`,
        }),
=======
>>>>>>> b7a5b0cd68064a6f6d0633e1b399adced1cbcb91
       getAllCategories: build.query({
         query: () => `/categories`,
       }),
       createProduct: build.mutation({
         query: (product) => ({
           url: "/products",
           method: "POST",
           body: product,
         }),
       }),
       createOrder: build.mutation({
         query: (order) => ({
           url: "/orders",
           method: "POST",
           body: order,
         }),
       }),
     }),
   });
   
   // Export hooks for usage in functional components, which are
   // auto-generated based on the defined endpoints
<<<<<<< HEAD
   export const { useGetAllProductsQuery, useGetProductsBySearchQuery, useGetProductsByCategoryQuery, useCreateOrderMutation, useCreateProductMutation, useGetAllCategoriesQuery } = Api;
=======
   export const { useGetAllProductsQuery, useGetProductsBySearchQuery, useCreateOrderMutation, useCreateProductMutation, useGetAllCategoriesQuery } = Api;
>>>>>>> b7a5b0cd68064a6f6d0633e1b399adced1cbcb91
