export const userColumns = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "user",
        headerName: "User",
        width: 250,
        renderCell: (params) => {
            return (
                <div className="flex items-center space-x-4">
                    <img
                        src={params.row.avatar}
                        alt="avatar"
                        className="w-8 h-8 items-center rounded-full"
                    />
                    <p>{params.row.user}</p>
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        type: "email",
        width: 160,
    },
    {
        field: "status",
        headerName: "Status",
        width: 110,
        renderCell: (params) => {
            const status = params.value ? params.value.toLowerCase() : "null "; // default to 'unknown' if undefined
            const statusClass =
                status === "active"
                    ? " text-green-500  "
                    : status === "blocked"
                        ? "text-red-500 "
                        : " text-gray-700";
            return <button className={`  ${statusClass}`}>{status}</button>;
        },
    },
    {
        field: "transaction",
        headerName: "Transaction",
        width: 110,
    },
    {
        field: "action",
        headerName: "Action",
        type: "number",
        width: 150,
        renderCell: (params) => {
            return (
                <div className="flex items-center justify-center space-x-4">
                    <Edit className="text-green-600 cursor-pointer" />
                    <DeleteOutline className="text-red-600 cursor-pointer" />
                </div>
            );
        },
    },
];

export const userRows = [
    {
        id: 1,
        user: "Snow Jon",
        age: 14,
        email: "xyz@gmail.com",
        avatar:
            "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_hybrid",
        status: "active",
        transaction: "13300 $",
    },
    {
        id: 2,
        user: "Lannister Cersei",
        age: 31,
        email: "xyz@gmail.com",
        avatar:
            "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_hybrid",
        status: "blocked",
        transaction: "13300 $",
    },
    {
        id: 3,
        user: "Lannister Jaime",
        age: 31,
        email: "xyz@gmail.com",
        avatar:
            "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_hybrid",
        status: "blocked",
        transaction: "13300 $",
    },
    { id: 4, user: "Stark Arya", age: 11, email: "xyz@gmail.com" },
    { id: 5, user: "Targaryen Daenerys", age: null, email: "xyz@gmail.com" },
    { id: 6, user: "Melisandre ull", age: 150, email: "xyz@gmail.com" },
    { id: 7, user: "Clifford Ferrara", age: 44, email: "xyz@gmail.com" },
];
