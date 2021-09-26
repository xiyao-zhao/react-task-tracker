import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [modleIsOpen, setModleOpen] = useState(false);

    function deleteHandler() {
        setModleOpen(true);
    };
    function cancelHandler() {
        setModleOpen(false);
    };

    return (
        <div className='card'>
            <h2>{ props.text }</h2>
            <div className='actions'>
                <button className='btn' onClick={ deleteHandler }>Delete</button>
            </div>
            { modleIsOpen ? <Modal onCancel={ cancelHandler } onConfirm={ cancelHandler }/> : null }
            { modleIsOpen ? <Backdrop onCancel={ cancelHandler }/> : null }
        </div>
    );
}

export default Todo;