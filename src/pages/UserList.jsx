import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { DeleteOutline, Edit } from "@mui/icons-material";
import { userRows } from "../assets/data/userData";
import { Link } from "react-router-dom";

const columns = [
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
        <div className="flex items-center justify-center space-x-2">
          <Link to={'/user/'+params.row.id}>
            <button>
              <Edit className="text-green-600 cursor-pointer" />
            </button>
          </Link>
          <DeleteOutline className="text-red-600 cursor-pointer" />
        </div>
      );
    },
  },
];

const UserList = () => {
  return (
    <section className=" p-6">
      <h1 className="text-lg px-4 py-2  my-3 text-white  w-auto bg-green-600 inline-block">
        Active Users
      </h1>
      <Box className="container mx-auto">
        <DataGrid
          rows={userRows}
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
