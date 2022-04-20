import React from 'react'

interface Props {
    title: string
    value: string
}

const UserCardField = ({ title, value }: Props) => {
    return (
        <div className="field">
            <div className="title">{`${title}:`}</div>
            <div className="value">{value}</div>
        </div>
    )
}

export default UserCardField
