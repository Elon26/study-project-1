import React from "react";
import { Link } from "react-router-dom";

function StudentData({ data }) {
    const age = new Date().getFullYear() - data.birthYear - 1
    const setAgeWord = age => {
        const lastOne = Number(age.toString().slice(-1));
        if (age > 4 && age < 15) return "лет";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "года";
        if (lastOne === 1) return "год";
        return "лет";
    };

    return (
        <div className="mb-4">
            <p><b>Имя:</b> {data.name}</p>
            <p><b>Фамилия:</b> {data.surname}</p>
            <p><b>Год рождения:</b> {data.birthYear} ({age} {setAgeWord(age)})</p>
            <p><b>Портфолио:</b> <Link to={"/"}>{data.portfolio}</Link> </p>
        </div >
    );
}

export default StudentData;