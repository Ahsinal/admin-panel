import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "fullName", headerName: "Full Name", width: 150, editable: true },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    type: "email",
    width: 160,
    editable: true,
  },
  {
    field: "avatar",
    headerName: "Image",
    width: 150,
    editable: false,
    renderCell: (params) => {
      return (
        <img
          src={params.row.avatar}
          alt="avatar"
          className="w-10 h-10 items-center rounded-full"
        />
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 110,
    editable: true,
    renderCell: (params) => {
      const status =  params.value ? params.value.toLowerCase() : "null "; // default to 'unknown' if undefined
      const statusClass =
        status === "active"
          ? " bg-green-500 text-white "
          : status === "blocked"
          ? "bg-red-500 text-white"
          : " text-gray-700";
      return (
        <span
          className={` w-40   items-center rounded-full px-2 py-1 ${statusClass}`}
        >
          {status}
        </span>
      );
    },
  },
  {
    field: "transaction",
    headerName: "Transaction",
    type: "number",
    width: 110,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    fullName: "Snow Jon",
    age: 14,
    email: "xyz@gmail.com",
    avatar:
      "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_hybrid",
    status: "active",
    transaction: "13300 $",
  },
  { id: 2, fullName: "Lannister Cersei", age: 31, email: "xyz@gmail.com",
  avatar:
    "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg?semt=ais_hybrid",
  status: "blocked",
  transaction: "13300 $", },
  { id: 3, fullName: "Lannister Jaime", age: 31, email: "xyz@gmail.com" },
  { id: 4, fullName: "Stark Arya", age: 11, email: "xyz@gmail.com" },
  { id: 5, fullName: "Targaryen Daenerys", age: null, email: "xyz@gmail.com" },
  { id: 6, fullName: "Melisandre ull", age: 150, email: "xyz@gmail.com" },
  { id: 7, fullName: "Clifford Ferrara", age: 44, email: "xyz@gmail.com" },
];

const UserList = () => {
  return (
    <section className=" p-6">
      <h1 className="text-lg px-4 py-2  my-3 text-white  w-auto bg-green-600 inline-block">
        Active Users
      </h1>
      <Box className="container mx-auto">
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        ></DataGrid>
      </Box>
    </section>
  );
};

export default UserList;
