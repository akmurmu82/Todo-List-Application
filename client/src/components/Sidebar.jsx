// Component: components/Sidebar.jsx
import FilterGroup from "./FilterGroup";

const Sidebar = () => {
    return (
        <aside className="w-64 bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <FilterGroup title="Priority" options={["High", "Medium", "Low"]} type="priority" />
            <FilterGroup title="Tags" options={["work", "coding"]} type="tags" />
        </aside>
    );
};

export default Sidebar;