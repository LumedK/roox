import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserDataType } from '../interfaces/userData.interface'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getUserList: builder.query<UserDataType[], string>({
            query: () => 'users'
        }),
        getUserProfile: builder.query<UserDataType | undefined, string | undefined>({
            query: (id) => `users/${id}`
        })
    })
})

export const { useGetUserListQuery, useGetUserProfileQuery } = usersApi
