import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { productRows } from "../assets/data/userData";
import { DeleteOutline, Edit } from "@mui/icons-material";
import Modal from "../components/Modal";

const ProductList = () => {
  const [data, setData] = useState(productRows);
  const [deleteData, setDeleteData] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDeleteProduct = (id) => {
    setModalOpen(true);
    setDeleteData(id);
  };

  const confirmDelete = () => {
    setData(data.filter((item) => item.id !== deleteData.id));
    setModalOpen(false);
    setDeleteData(null);
  };

  const discardDelete = () => {
    setModalOpen(false);
    setDeleteData(null);
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
          <Link to={"/user/" + params.row.id}>
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
    event.stopPropagation();
  };

  return (
    <section className="p-12">
      <div className="flex items-center justify-between my-4">
        <h1 className="text-lg my-3">Product List</h1>
        <Link
          to="/product/new"
          className="bg-teal-600 px-5 py-2 rounded-md text-white outline-none hover:bg-teal-700"
        >
          Add Product
        </Link>
      </div>
      <Box className="container mx-auto">
        <DataGrid
          rows={data}
          columns={columns}
          onCellClick={handleCellClick}
          sx={{
            ".MuiDataGrid-cell:focus": {
              outline: "none",
            },
            ".MuiDataGrid-row.Mui-selected": {
              backgroundColor: "transparent",
            },
            ".MuiDataGrid-row:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
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
        />
      </Box>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          title="Confirm Delete"
          message="Are you sure you want to permanently delete this product? This action cannot be undone."
          onConfirm={confirmDelete}
          onCancel={discardDelete}
        />
      )}
    </section>
  );
};

export default ProductList;
