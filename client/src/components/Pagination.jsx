// Component: components/Pagination.jsx

const Pagination = () => {
    return (
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
            <button className="text-blue-600">← Previous</button>
            <div>Page 1 of 10</div>
            <button className="text-blue-600">Next →</button>
        </div>
    );
};

export default Pagination; 