import Sidebar from '../../sidebar/Sidebar'
import './PageLayout.scss'

interface Props {
    children: JSX.Element
}

const PageLayout = ({ children }: Props) => {
    return (
        <div className="page">
            <Sidebar />
            <div className="page-context">{children}</div>
        </div>
    )
}

export default PageLayout
