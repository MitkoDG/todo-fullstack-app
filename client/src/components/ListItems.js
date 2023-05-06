import ProgressBar from "./ProgressBar";
import TickIcon from "./TickIcon";

const ListItems = ({ task }) => {

    return (
        <li className="list-item">

            <div className="info-container">
                <TickIcon />
                <p className="task-title">{task.title}</p>
                <ProgressBar />
            </div>

            <div className="list-header-buttons">
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </div>


        </li>


    )
}
export default ListItems;