import './UserCard.scss'
import UserCardField from './UserCardField'
import { Link } from 'react-router-dom'
import { UserDataType } from '../../interfaces/userData.interface'

interface Props {
    userData: UserDataType
}

const UserCard = ({ userData }: Props) => {
    return (
        <div className="user-card">
            <UserCardField key="name" title="ФИО" value={userData.name} />
            <UserCardField key="city" title="город" value={userData.address.city} />
            <UserCardField key="company" title="компания" value={userData.company.name} />
            <Link className="link" to={`/${userData.id}`}>
                Подробнее
            </Link>
        </div>
    )
}

export default UserCard
