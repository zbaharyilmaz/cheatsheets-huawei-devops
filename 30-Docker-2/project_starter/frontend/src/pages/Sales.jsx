import { Button } from "@mui/material"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import useStockCall from "../hooks/useStockCall"
import SaleModal from "../components/SaleModal"
import SaleTable from "../components/SaleTable"

const Sales = () => {
  const { getStockData, getProdCatBrands } = useStockCall()
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)

  const [info, setInfo] = useState({
    brand_id: "",
    product_id: "",
    quantity: "",
    price: "",
  })

  const handleClose = () => {
    setOpen(false)
    setInfo({ brand_id: "", product_id: "", quantity: "", price: "" })
  }

  useEffect(() => {
    getProdCatBrands()
    getStockData("sales")
  }, []) // eslint-disable-line
  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Sales
      </Typography>
      <Button
        variant="contained"
        sx={{ marginBottom: "1rem" }}
        onClick={() => setOpen(true)}
      >
        New Sale
      </Button>

      <SaleModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <SaleTable handleOpen={handleOpen} setInfo={setInfo} />
    </div>
  )
}

export default Sales
