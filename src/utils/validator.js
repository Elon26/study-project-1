const validator = (data, config) => {
    const errors = {};

    function validate(fieldName, validateMethod, data, config) {
        let statusValidate;

        if (validateMethod === "isRequired") {
            statusValidate = data.trim() === "";
        }
        if (validateMethod === "hasCapital") {
            const сapitalRegExp = /^[A-ZА-Я]/;
            statusValidate = !сapitalRegExp.test(data);
        }
        if (validateMethod === "isCorrectBirthYear") {
            statusValidate = !(Number(data) >= 1910 && Number(data) <= 2017)
        }
        if (validateMethod === "isCorrectURL") {
            const urlRegExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;
            statusValidate = !urlRegExp.test(data);
        }

        if (statusValidate) return config.message;
    }

    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                fieldName,
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );

            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    }

    return errors;
};

export default validator;
