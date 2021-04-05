import React from 'react';
import './TodoApp.css'

const Modal = ({todos, editedValue, showModal , closeModal, setEditedValue}) => {
  return (
    <div className={showModal ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        <h1>MODAL</h1>
        <div>
          <input type="text" value={editedValue} onChange={(e) => setEditedValue(e.target.value)} />
          <button type="button"  onClick={closeModal}> Save </button>
        </div>
        <button type="button" className="close" onClick={closeModal}> Close </button>
      </section>
    </div>
  )
}

export default Modal;