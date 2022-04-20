import Button from '../button/Button'
import './Sidebar.scss'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="title">Сортировка</div>
            <Button key={1} title="по городу" />
            <Button key={2} title="по компании" />
        </div>
    )
}

export default Sidebar
