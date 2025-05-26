import { useEffect, useState } from "react"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { useSelector } from "react-redux"
import useStockCall from "../hooks/useStockCall"
import ProductModal from "../components/ProductModal"
import ProductTable from "../components/ProductTable"

const Products = () => {
  const { getStockData, getProdCatBrands } = useStockCall()
  const { products } = useSelector((state) => state.stock)

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    // getStockData("products")
    // getStockData("categori")
    // getStockData("brands")

    //! Promise.all ile es zamanli istek atilan fonks.
    getProdCatBrands()
  }, [])

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={3}>
        Products
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        NEW PRODUCT
      </Button>

      <ProductModal open={open} handleClose={handleClose} />
      <ProductTable />
    </div>
  )
}

export default Products
