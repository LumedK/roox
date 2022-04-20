import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { UserDataType } from '../../interfaces/userData.interface'
import { RootState } from '../../redux/store'
import { setValue } from '../../redux/userProfile.slice'
import Button from '../button/Button'
import Input from '../input/Input'

interface Props {
    userData?: UserDataType
    edited?: boolean
}

const UserProfileForm = ({ userData, edited = false }: Props) => {
    const dispatch = useDispatch()
    const stateUserData = useSelector((state: RootState) => state.userProfile.userData)
    const formRef = useRef<null | HTMLFormElement>(null)

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        const response = JSON.stringify(stateUserData)
        console.log(response)
        event.preventDefault()
    }

    return (
        <React.Fragment>
            <form id="user-profile-form" ref={formRef} onSubmit={submitHandler}>
                <div className="required-fields">
                    <Input
                        title="Name"
                        value={userData?.name}
                        required={true}
                        readonly={!edited}
                        setValue={(value: any) => {
                            dispatch(setValue({ key: 'name', value }))
                        }}
                    />
                    <Input
                        title="User name"
                        value={userData?.username}
                        required={true}
                        readonly={!edited}
                        setValue={(value: any) => {
                            dispatch(setValue({ key: 'username', value }))
                        }}
                    />
                    <Input
                        title="E-mail"
                        value={userData?.email}
                        type="email"
                        required={true}
                        readonly={!edited}
                        setValue={(value: any) => {
                            dispatch(setValue({ key: 'email', value }))
                        }}
                    />
                    <Input
                        title="Street"
                        value={userData?.address.street}
                        required={true}
                        readonly={!edited}
                        setValue={(value: any) => {
                            dispatch(setValue({ key: 'address.street', value }))
                        }}
                    />
                    <Input
                        title="City"
                        value={userData?.address.city}
                        required={true}
                        readonly={!edited}
                        setValue={(value: any) => {
                            dispatch(setValue({ key: 'address.city', value }))
                        }}
                    />
                    <Input
                        title="Zip code"
                        value={userData?.address.zipcode}
                        required={true}
                        readonly={!edited}
                        setValue={(value: any) => {
                            dispatch(setValue({ key: 'address.zipcode', value }))
                        }}
                    />
                    <Input
                        title="Phone"
                        value={userData?.phone}
                        type="tel"
                        required={true}
                        readonly={!edited}
                        setValue={(value: any) => {
                            dispatch(setValue({ key: 'phone', value }))
                        }}
                    />
                    <Input
                        title="Website"
                        value={userData?.website}
                        required={true}
                        readonly={!edited}
                        setValue={(value: any) => {
                            dispatch(setValue({ key: 'website', value }))
                        }}
                    />
                </div>
                <Input
                    title="Comment"
                    value={''}
                    isTextarea={true}
                    readonly={!edited}
                    setValue={(value: any) => {
                        dispatch(setValue({ key: 'comment', value }))
                    }}
                />
            </form>
            <Button
                className="btn-submit"
                title="Отправить"
                type={edited ? 'submit' : 'disabled'}
                form="user-profile-form"
            />
        </React.Fragment>
    )
}

export default UserProfileForm
