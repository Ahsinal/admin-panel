import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline, Edit } from "@mui/icons-material";
import { productRows, userRows } from "../assets/data/userData";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
const UserList = () => {
  const [data, setData] = useState(productRows);
  const [delteData, setDeletedata] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const handleDeleteProduct = (id) => {
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
      field: "product",
      headerName: "Product",
      width: 300,
      renderCell: (params) => (
        <div className="flex items-center space-x-4">
          <img
            src={params.row.pimg}
            alt="product img"
            className="w-8 h-8 items-center rounded-full"
          />
          <p>{params.row.pname}</p>
        </div>
      ),
    },
    { field: "price", headerName: "Price", width: 120 },
    { field: "manufactureDate", headerName: "Manufacture Date", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <div className="flex items-center justify-center space-x-2">
          <Link to={"/product/" + params.row.id}>
            <Edit className="text-green-600 cursor-pointer outline-none" />
          </Link>
          <DeleteOutline
            onClick={() => handleDeleteProduct(params.row.id)}
            className="text-red-600 cursor-pointer"
          />
        </div>
      ),
    },
  ];
  const handleCellClick = (params, event) => {
    // Prevent the default row selection behavior
    event.stopPropagation();
  };
  return (
    <section className=" p-12">
      <div className="flex items-center justify-between my-4">
        <h1 className="text-lg   my-3 ">Active Users</h1>
        <Link
          to="/product/new"
          className="bg-teal-600 px-5 py-2 rounded-md text-white outline-none  hover:bg-teal-700"
        >
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
