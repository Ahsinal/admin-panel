import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { DeleteOutline, Edit } from "@mui/icons-material";
import { userRows } from "../assets/data/userData";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
const UserList = () => {
  const [data, setData] = useState(userRows);
  const [delteData, setDeletedata] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const handleDeleteUser = (id) => {
    setModalOpen(true);
    setDeletedata(id);
  };
  //confirm delete action
  const confirmDelete = () => {
    setData(data.filter((item) => item.id !== delteData));
    setModalOpen(false);
    setDeletedata(null);
  };
  //discard delete in modal
  const discardDelete = () => {
    setModalOpen(false);
    setDeletedata(null);
  };
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
            <Link to={"/user/" + params.row.id}>
              <Edit className="text-green-600 cursor-pointer outline-none" />
            </Link>
            <DeleteOutline
              onClick={() => handleDeleteUser(params.row.id)}
              className="text-red-600 cursor-pointer"
            />
          </div>
        );
      },
    },
  ];

  const handleCellClick = (params, event) => {
    // Prevent the default row selection behavior
    event.stopPropagation();
  };
  return (
    <section className=" p-6">
      <div className="flex items-center justify-between my-4">
        <h1 className="text-lg   my-3 ">Active Users</h1>
        <Link to='/user/new' className="bg-teal-600 px-5 py-2 rounded-md text-white outline-none  hover:bg-teal-700">
          Create
        </Link>
      </div>
      <Box className="container mx-auto">
        <DataGrid
          rows={data}
          columns={columns}
          onCellClick={handleCellClick}
          sx={{
            ".MuiDataGrid-cell:focus": {
              outline: "none", // Removes focus outline
            },
            ".MuiDataGrid-row.Mui-selected": {
              backgroundColor: "transparent", // Removes row selection background
            },
            ".MuiDataGrid-row:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)", // Keeps row hover effect
            },
          }}
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
      {/* Modal */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          title="Confirm Delete"
          message="Are you sure you want to permanently delete this task? This action cannot be undone."
          onConfirm={confirmDelete}
          onCancel={discardDelete}
        />
      )}
    </section>
  );
};

export default UserList;
