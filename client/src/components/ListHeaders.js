import Modal from "./Modal";

const ListHeaders = ({ listName }) => {

    const signOut = () => {
        console.log('Signing out');
    }
    return (
        <div className="list-header">
            <h1>{listName}</h1>
            <div className="list-header-buttons">
                <button className="create" onClick={() => console.log('ADD NEW')}>ADD NEW</button>
                <button className="signout" onClick={signOut}>SIGN OUT</button>
            </div>
            <Modal />
        </div >
    );
}

export default ListHeaders;