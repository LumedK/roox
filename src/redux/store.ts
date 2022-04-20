import { configureStore } from '@reduxjs/toolkit'
import userProfileSlice from './userProfile.slice'
import { usersApi } from './users.api'

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        userProfile: userProfileSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
