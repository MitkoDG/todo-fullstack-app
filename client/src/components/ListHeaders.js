import { useState } from "react";
import Modal from "./Modal";

const ListHeaders = ({ listName }) => {
    const [showModal, setShowModal] = useState(false);

    const signOut = () => {
        console.log('Signing out');
    }
    return (
        <div className="list-header">
            <h1>{listName}</h1>
            <div className="list-header-buttons">
                <button className="create" onClick={() => setShowModal(true)}>ADD NEW</button>
                <button className="signout" onClick={signOut}>SIGN OUT</button>
            </div>
            {showModal && <Modal mode={'create'} setShowModal={setShowModal}/>}
        </div >
    );
}

export default ListHeaders;