import { useState } from "react";
import Modal from "./Modal";
import ProgressBar from "./ProgressBar";
import TickIcon from "./TickIcon";

const ListItems = ({ task, getData }) => {
    const [showModal, setShowModal] = useState(false);

    const deleteItem = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/todos/${task.id}`, {
                method: "DELETE",
                // headers: {
                //     "Content-Type": "application/json",
                // },
            })
            if (response.status === 200) {
                getData();
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <li className="list-item">

            <div className="info-container">
                <TickIcon />
                <p className="task-title">{task.title}</p>
                <ProgressBar />
            </div>

            <div className="list-header-buttons">
                <button className="edit" onClick={() => setShowModal(true)}>Edit</button>
                <button className="delete" onClick={deleteItem}>Delete</button>
            </div>
            {showModal && <Modal mode={'edit'} setShowModal={setShowModal} task={task} getData={getData} />}

        </li>


    )
}
export default ListItems;