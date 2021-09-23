import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import "./styles.css";

const ModalSignIn = ({ show, handleClose }) => {
  return (
    <Modal centered show={show} onHide={handleClose}>
      <div className="signin__modal text-center">
        <h3 className="signin__title">Увійдіть у профіль</h3>
        <div className="mx-auto my-4 d-flex align-items-center flex-column">
          <input
            type="email"
            className="signin__input px-3 py-2 my-2"
            placeholder="Введіть e-mail"
          />
          <input
            type="password"
            className="signin__input px-3 py-2 my-2"
            placeholder="Введіть пароль"
          />
          <button className="signin__button signin__login my-4">Увійти</button>
          <div className='signin__line'></div>
          <button className="signin__button signin__registration my-4">Регістрація</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalSignIn;
