import React, { useEffect, useState } from "react";
import FormTextField from "./formTextField";
import defaultStudentData from "./defaultStudentData";
import validator from "../utils/validator";
import { Link } from "react-router-dom";
import Modal from "./modal";

function HandleCard() {
    const studentData = JSON.parse(localStorage.getItem('studentData'))
    const [data, setData] = useState(studentData ? studentData : defaultStudentData);
    const [freshData, setFreshData] = useState(true);
    const [errors, setErrors] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const isValid = !Object.keys(errors).length;

    useEffect(() => {
        if (!freshData) {
            validate();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const handleChange = ({ target }) => {
        setFreshData(false);
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        name: {
            isRequired: {
                message: `Поле "Имя" обязательно для заполнения`
            },
            hasCapital: {
                message: `Поле "Имя" должно начинаться с заглавной буквы`
            }
        },
        surname: {
            isRequired: {
                message: `Поле "Фамилия" обязательно для заполнения`
            },
            hasCapital: {
                message: `Поле "Фамилия" должно должна начинаться с заглавной буквы`
            }
        },
        birthYear: {
            isRequired: {
                message: `Поле "Год рождения" обязательно для заполнения`
            },
            isCorrectBirthYear: {
                message: "Введите корректный год рождения (от 1910 до 2017 гг.)"
            }
        },
        portfolio: {
            isRequired: {
                message: `Поле "Портфолио" обязательно для заполнения`
            },
            isCorrectURL: {
                message: "Ссылка должна быть введена в формате https://xxx.xx"
            }
        },
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);

        setErrors(errors);
        return !Object.keys(errors).length;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (isValid) {
            localStorage.setItem('studentData', JSON.stringify(data))
            setOpenModal(true)
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <h2 className="mb-4">{studentData ? "Редактировать" : "Создать"}</h2>
                        <form onSubmit={handleSubmit}>
                            <FormTextField
                                label={"Имя"}
                                name={"name"}
                                type={"text"}
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <FormTextField
                                label={"Фамилия"}
                                name={"surname"}
                                type={"text"}
                                value={data.surname}
                                onChange={handleChange}
                                error={errors.surname}
                            />
                            <FormTextField
                                label={"Год рождения"}
                                name={"birthYear"}
                                type={"number"}
                                value={data.birthYear}
                                onChange={handleChange}
                                error={errors.birthYear}
                            />
                            <FormTextField
                                label={"Портфолио"}
                                name={"portfolio"}
                                type={"text"}
                                value={data.portfolio}
                                onChange={handleChange}
                                error={errors.portfolio}
                            />
                            <div>
                                {studentData && <Link
                                    className="mt-2 me-2 btn btn-secondary mx-auto"
                                    to={"/"}
                                >
                                    Назад
                                </Link>}
                                <button
                                    className="mt-2 btn btn-primary mx-auto"
                                    type="submit"
                                    disabled={!isValid}
                                >
                                    {studentData ? "Обновить" : "Создать"}
                                </button>
                            </div>
                        </form>
                    </div >
                </div >
            </div >
            {openModal && <Modal onCloseModal={e => setOpenModal(false)} />}
        </>
    );
}

export default HandleCard;