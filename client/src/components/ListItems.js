const ListItems = ({ task }) => {

    return (
        <div className="list-item">
            <div className="info-container">

                <p className="task-title">{task.title}</p>
                
            </div>
        </div>
    )
}
export default ListItems;