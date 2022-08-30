import React from "react";

const FormTextField = ({
    label,
    name,
    type,
    value,
    onChange,
    error
}) => {
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };

    return (
        <div className="mb-4">
            <label className="" htmlFor={name}>
                {label}
            </label>
            <div className="input-group has-validation">
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    className={getInputClasses()}
                />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

export default FormTextField;
