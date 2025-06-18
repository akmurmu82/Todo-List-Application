// Component: components/Avatar.jsx

const Avatar = ({ username }) => {
    return (
        <div className="flex items-center gap-2">
            <img
                src="/placeholder-avatar.png"
                alt={username}
                className="w-9 h-9 rounded-full"
            />
            <span className="font-medium">{username}</span>
        </div>
    );
};

export default Avatar;