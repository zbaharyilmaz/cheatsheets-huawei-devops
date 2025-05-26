import * as React from "react"
import Box from "@mui/material/Box"
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid"
import { useSelector } from "react-redux"
import useStockCall from "../hooks/useStockCall"
import { btnStyle } from "../styles/globalStyles"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import EditIcon from "@mui/icons-material/Edit"

export default function PurchaseTable({ handleOpen, setInfo }) {
  const { purchases } = useSelector((state) => state.stock)
  const { deleteStockData } = useStockCall()

  const columns = [
    {
      field: "createds",
      headerName: "Date",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "firm",
      valueGetter: (params) => params.row.firm_id?.name,
      headerName: "Firm",
      flex: 2,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },

    {
      field: "brand",
      valueGetter: (params) => params.row.brand_id?.name,
      headerName: "Brand",
      flex: 1.5,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "product",
      valueGetter: (params) => params.row.product_id?.name,
      headerName: "Product",
      flex: 1.5,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      minWidth: 70,
      headerAlign: "center",
      align: "center",
      flex: 1,
      type: "number",
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 70,
      headerAlign: "center",
      align: "center",
      flex: 1,
      type: "number",
    },
    {
      field: "price_total",
      headerName: "Amount",
      minWidth: 90,
      headerAlign: "center",
      align: "center",
      flex: 1,
      type: "number",
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 70,
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: ({
        id,
        row: { brand_id, product_id, quantity, price, firm_id },
      }) => [
        <GridActionsCellItem
          key={"edit"}
          icon={<EditIcon />}
          label="Edit"
          onClick={() => {
            handleOpen()
            setInfo({ id, firm_id, brand_id, product_id, quantity, price })
          }}
          sx={btnStyle}
        />,
        <GridActionsCellItem
          key="delete"
          icon={<DeleteForeverIcon />}
          label="Delete"
          onClick={() => deleteStockData("purchases", id)}
          sx={btnStyle}
        />,
      ],
    },
  ]

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      <DataGrid
        autoHeight={true}
        rows={purchases}
        columns={columns}
        pageSize={5}
        pageSizeOptions={[20, 50, 75, 100]}
        slots={{ toolbar: GridToolbar }}
        disableRowSelectionOnClick
        sx={{
          boxShadow: 4,
        }}
      />
    </Box>
  )
}
