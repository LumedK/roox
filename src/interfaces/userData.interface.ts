export type UserDataFields =
    | 'id'
    | 'name'
    | 'username'
    | 'email'
    | 'address'
    | 'address.street'
    | 'address.suite'
    | 'address.city'
    | 'address.zipcode'
    | 'geo'
    | 'geo.lat'
    | 'geo.lng'
    | 'phone'
    | 'website'
    | 'company'
    | 'company.name'
    | 'company.catchPhrase'
    | 'company.bs'
    | 'comment'

export interface UserDataType {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    }
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
    comment?: string
}
