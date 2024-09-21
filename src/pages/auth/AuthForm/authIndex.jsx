import Field from "./Field";
import { useState } from "react";

const AuthForm = (props) => {
    const { fields, submitButtonText } = props;
    const [fieldValues, setFieldValues] = useState(() =>
        fields.reduce((acc, field) => ({ ...acc, [field.label]: "" }), {})
    );

    const fieldItems = fields.map((field) => {
        return (
            <Field
                key={field.label}
                field={field}
                value={fieldValues[field.label]}
                onChange={(e) => {
                    setFieldValues({
                        ...fieldValues,
                        [field.label]: e.target.value,
                    });
                }}
            />
        );
    });

    return (
        <form className="flex flex-col border p-8 border-gray-200 bg-white rounded-lg mt-4">
            {fieldItems}
            <button className="bg-emerald-700 text-white p-2 rounded">
                {submitButtonText}
            </button>
        </form>
    );
};

export default AuthForm;
