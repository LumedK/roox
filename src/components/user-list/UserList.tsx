import { useGetUserListQuery } from '../../redux/users.api'
import WrapperCenter from '../containers/wrapper/WrapperCenter'
import Loader from '../loader/Loader'
import UserCard from '../user-card/UserCard'
import style from './UserList.module.scss'

const UserList = () => {
    const { data, isLoading } = useGetUserListQuery('')

    let main
    if (isLoading) {
        main = (
            <WrapperCenter>
                <Loader />
            </WrapperCenter>
        )
    } else {
        main = data?.map((userData) => <UserCard key={userData.id} userData={userData} />)
    }

    return (
        <div className={style['user-list']}>
            <header>Список пользователей</header>
            <main>{main}</main>
            {isLoading ? '' : <footer>Найдено {data?.length} пользователей</footer>}
        </div>
    )
}

export default UserList
