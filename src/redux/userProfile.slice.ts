import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserDataFields, UserDataType } from '../interfaces/userData.interface'

const initialState: { userData?: UserDataType } = {
    userData: undefined
}

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        setUserData(state, action: PayloadAction<UserDataType>) {
            const userData = action.payload
            state.userData = userData
        },
        setValue(state, action: PayloadAction<{ key: UserDataFields; value: any }>) {
            const { key, value } = action.payload
            switch (key) {
                case 'name':
                    state.userData!.name = value
                    break
                case 'username':
                    state.userData!.username = value
                    break
                case 'email':
                    state.userData!.email = value
                    break
                case 'address.street':
                    state.userData!.address.street = value
                    break
                case 'address.city':
                    state.userData!.address.city = value
                    break
                case 'address.zipcode':
                    state.userData!.address.zipcode = value
                    break
                case 'phone':
                    state.userData!.phone = value
                    break
                case 'website':
                    state.userData!.website = value
                    break
                case 'comment':
                    state.userData!.comment = value
            }
        }
    }
})

export const { setUserData, setValue } = userProfileSlice.actions

export default userProfileSlice.reducer
