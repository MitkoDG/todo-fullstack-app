import { useState } from "react";
import Modal from "./Modal";
import ProgressBar from "./ProgressBar";
import TickIcon from "./TickIcon";

const ListItems = ({ task }) => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <li className="list-item">

            <div className="info-container">
                <TickIcon />
                <p className="task-title">{task.title}</p>
                <ProgressBar />
            </div>

            <div className="list-header-buttons">
                <button className="edit" onClick={() => setShowModal(true)}>Edit</button>
                <button className="delete">Delete</button>
            </div>
            {showModal && <Modal mode={'edit'} setShowModal={setShowModal} task={task} />}

        </li>


    )
}
export default ListItems;