import './WrapperCenter.scss'

interface Props {
    children: JSX.Element | string
}

const LoaderWrapperCenter = ({ children }: Props) => {
    return <div className="wrapper--center">{children}</div>
}

export default LoaderWrapperCenter
