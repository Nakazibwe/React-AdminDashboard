
import React from 'react';
import './productlist.css';
import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../../src/dummyData";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {useState} from 'react';


const Products = () => {
  const [data,setData] = useState(productRows);
  const handleDelete = (rowID) => {
    setData(data.filter((row) => row.id !== rowID));
  }
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "product",
      headerName: " Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              src={params.row.photo}
              alt="product"
              className="productListImage"
            />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 170,
      
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      
    },
    {
      field: "price",
      headerName: "Price",
      width: 200,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="productListAction">
            <Link to ={'/product/edit/' + params.row.id}>
              <button className="productListEditButton">Edit</button>
            </Link>
            <DeleteOutline className="productListDeleteButton" onClick = {()=> handleDelete(params.row.id)}/>
          </div>
        );
      },
    },
  ];
  return (
    <div className = "productList">
     <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default Products