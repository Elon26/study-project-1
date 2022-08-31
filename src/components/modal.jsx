import React from "react";
import { Link } from "react-router-dom";

function Modal({ onCloseModal }) {
    return (
        <div className="modal-background">
            <div className="modal-area">
                <p>Обновлено</p>
                <hr />
                <div>
                    <button
                        className="mt-2 me-2 btn btn-secondary mx-auto"
                        onClick={onCloseModal}
                    >
                        Назад к форме
                    </button>
                    <Link
                        className="mt-2 btn btn-primary mx-auto"
                        to={"/study-project-1/"}
                    >
                        Вернуться на главную
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Modal;