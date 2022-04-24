import React from "react";
import "./userlist.css";
import { DataGrid } from "@material-ui/data-grid";
import { userRows } from "../../../src/dummyData";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {useState} from 'react'
const UserList = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (rowID) => {
    setData(data.filter((row) => row.id !== rowID));
  }
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              src={params.row.avatar}
              alt="avator"
              className="userListImage"
            />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 120,
      editable: true,
    },
    {
      field: "avator",
      headerName: "Avator",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 170,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListAction">
            <Link to ={'/user/edit/' + params.row.id}>
              <button className="userListEditButton">Edit</button>
            </Link>
            <DeleteOutline className="userListDeleteButton" onClick = {()=> handleDelete(params.row.id)}/>
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
