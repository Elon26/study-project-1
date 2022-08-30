import React from "react";
import StudentCardField from "./studentCardField";
import defaultStudentData from "./defaultStudentData";

function Main() {
    const studentData = JSON.parse(localStorage.getItem('studentData')) || defaultStudentData

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <StudentCardField data={studentData} />
                </div>
            </div>
        </div>
    );
}

export default Main;