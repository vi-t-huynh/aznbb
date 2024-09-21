const Field = (props) => {
    const { field, value, onChange } = props;

    return (
        <div className="flex flex-col space-y-1 mb-6">
            <label htmlFor={field.label} className="text-gray-500">
                {field.label}
            </label>
            <input
                className="border border-gray-300 bg-gray-50 rounded px-2 py-1 w-64"
                id={field.label}
                type={field.type}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Field;
