import * as React from "react"
import Box from "@mui/material/Box"
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid"
import { useSelector } from "react-redux"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import { btnStyle } from "../styles/globalStyles"
import useStockCall from "../hooks/useStockCall"

export default function ProductTable() {
  const { products } = useSelector((state) => state.stock)
  const { deleteStockData } = useStockCall()

  const columns = [
    {
      field: "id",
      headerName: "#",
      headerAlign: "center",
      align: "center",
      flex: 0.5,
    },
    {
      field: "category",
      valueGetter: (params) => params.row.category_id?.name,
      headerName: "Category",
      flex: 2,
      headerAlign: "center",
      align: "center",
      minWidth: 80,
    },
    {
      field: "brand",
      valueGetter: (params) => params.row.brand_id?.name,
      headerName: "Brand",
      flex: 2,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      flex: 1,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      flex: 1,
      headerAlign: "center",
      align: "center",
      getActions: (props) => [
        <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          label="Delete"
          sx={btnStyle}
          onClick={() => deleteStockData("products", props.id)}
        />,
      ],
    },
  ]

  //? api'Den gelmeyen colum bilgileri icin getActions veya renderCell islevleri kullanilabilir.
  //? bu islevler aslinda isimsiz bir fonksiyon cagirirlar ve bu fonksiyon aldigi parametre (params) ile bir cok veriye (rows,columns gibi) erisebilir.

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        pageSizeOptions={[20, 50, 75, 100]} //? sayfa basina satir sayisi
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  )
}
