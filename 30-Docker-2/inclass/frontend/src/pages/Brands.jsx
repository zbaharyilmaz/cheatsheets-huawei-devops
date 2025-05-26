import { Typography, Box, Grid, Alert, Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import BrandCard from "../components/BrandCard"
import BrandModal from "../components/BrandModal"
import useStockCall from "../hooks/useStockCall"
import { flex } from "../styles/globalStyles"

const Brands = () => {
  const { getStockData } = useStockCall()
  const { brands, loading } = useSelector((state) => state.stock)
  const [open, setOpen] = useState(false)
  const [info, setInfo] = useState({})

  useEffect(() => {
    getStockData("brands")
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box>
      <Typography variant="h4" color="error" mb={2}>
        Brands
      </Typography>

      <Button
        variant="contained"
        onClick={() => {
          setInfo({})
          setOpen(true)
        }}
      >
        New Brand
      </Button>

      <BrandModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} />

      {!loading && !brands?.length && (
        <Alert severity="warning" sx={{ mt: 4, width: "50%" }}>
          There is no brand to show
        </Alert>
      )}

      {brands?.length > 0 && (
        <Grid container sx={flex} mt={4}>
          {brands?.map((brand) => (
            <Grid item key={brand.id}>
              <BrandCard brand={brand} setOpen={setOpen} setInfo={setInfo} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}

export default Brands
