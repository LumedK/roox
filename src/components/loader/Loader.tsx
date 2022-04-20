import './Loader.scss'

interface Props {
    className?: string
}

const Loader = ({ className }: Props) => {
    const loaderClassName = `lds-roller ${className}`

    return (
        <div className={loaderClassName}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loader
