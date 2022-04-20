import { useParams } from 'react-router-dom'
import { useGetUserProfileQuery } from '../../redux/users.api'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { RootState, store } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import './UserProfile.scss'
import Button from '../button/Button'
import Loader from '../loader/Loader'
import UserProfileForm from './UserProfileForm'
import { setUserData as setUserDataAction } from '../../redux/userProfile.slice'
import { UserDataType } from '../../interfaces/userData.interface'

const UserProfile = () => {
    const { id } = useParams()
    const { data, isLoading, isError, isSuccess } = useGetUserProfileQuery(id)
    const [edited, setEdited] = useState(false)
    const stateUserData = useSelector((state: RootState) => state.userProfile.userData)
    const [userData, setUserData] = useState<undefined | UserDataType>(stateUserData)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isSuccess) {
            setUserData(stateUserData)
            dispatch(setUserDataAction(stateUserData ? stateUserData : data))
        }
    }, [isSuccess, data, dispatch, stateUserData])

    const editHandler = () => {
        if (edited) {
            setUserData(undefined)
            dispatch(setUserDataAction(Object.assign({}, data)))
            setEdited(!edited)
        } else setEdited(!edited)
    }

    let main
    if (isError) {
        main = <span className="center">Пользователь не найден</span>
    } else if (isLoading || !userData) {
        main = <Loader className="center" />
    } else {
        main = <UserProfileForm userData={userData} edited={edited} />
    }

    return (
        <Provider store={store}>
            <div className="user-profile">
                <header>
                    <div className="title">Профиль пользователя</div>
                    {isSuccess ? (
                        <Button title="Редактировать" onClick={editHandler} pressed={edited} />
                    ) : (
                        ''
                    )}
                </header>
                <main>{main}</main>
            </div>
        </Provider>
    )
}

export default UserProfile
