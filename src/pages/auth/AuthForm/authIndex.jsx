import Field from "./Field";
import { useState } from "react";

const AuthForm = (props) => {
    const { fields, submitButtonText, onSubmit } = props;
    const [loading, setLoading] = useState(false);
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
        <form
            className="flex flex-col border p-8 border-gray-200 bg-white rounded-lg mt-4"
            onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                await onSubmit(fieldValues);
                setLoading(false);
            }}
        >
            {fieldItems}
            <button className="bg-emerald-700 text-white p-2 rounded relative">
                {submitButtonText}
                {loading && (
                    <div className="top-0 right-4 absolute flex items-center h-full">
                        <i className="text-lg fa-solid fa-spinner-third animate-spin text-white"></i>
                    </div>
                )}
            </button>
        </form>
    );
};

export default AuthForm;
