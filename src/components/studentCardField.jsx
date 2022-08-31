import React from "react";
import { Link } from "react-router-dom";
import StudentData from "./studentData";

function StudentCardField({ data }) {
    return (
        <>
            <h2 className="mb-4">Карточка студента</h2>
            {data.name && <StudentData data={data} />}
            {!data.name && <p>Нет данных</p>}
            <Link to={"/study-project-1/handleCard"} className="btn btn-primary">
                {data.name ? "Редактировать" : "Добавить"}
            </Link>
        </>
    );
}

export default StudentCardField;