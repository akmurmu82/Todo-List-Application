// Component: components/FilterGroup.jsx

const FilterGroup = ({ title, options, type }) => {
    return (
        <div className="mb-4">
            <h4 className="font-semibold mb-2">{title}</h4>
            <div className="flex flex-col gap-2">
                {options.map((opt) => (
                    <label key={opt} className="flex items-center gap-2">
                        <input type="checkbox" value={opt.toLowerCase()} />
                        {opt}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default FilterGroup;