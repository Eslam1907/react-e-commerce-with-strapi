import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  Container,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Dialog from "@mui/material/Dialog";
import { Close } from "@mui/icons-material";
import Details from "./Details";
import { useGetproductByNameQuery } from "../../../redux/product";
import { AnimatePresence, motion } from "framer-motion";
function Main() {
  const handleChange = (event, newValue) => {
    if (newValue !== null) {
      setProducts(newValue);
    }
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const allProduct = "products?populate=*";
  const allProductMen = "products?populate=*&filters[category][$eq]=men";
  const allProductWOmen = "products?populate=*&filters[category][$eq]=women";

  const [products, setProducts] = useState(allProduct);
  const [productsDetails, setProductsDetails] = useState({});

  const { data, error, isLoading } = useGetproductByNameQuery(products);
  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 12 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container sx={{ my: 10, textAlign: "center" }}>
        <Box variant="body1">
          {error.error}
          please try again
        </Box>
      </Container>
    );
  }

  if (data) {
    return (
      <Container sx={{ py: 6 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{ justifyContent: "space-between" }}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box>
            <Typography variant="h5">Selected Products</Typography>

            <Typography
              variant="body1"
              sx={{
                fontWeight: 300,
              }}
            >
              All our new arrivals in aexclusive brand selection
            </Typography>
          </Box>

          <ToggleButtonGroup
            sx={{
              ".Mui-selected": {
                color: "#e94560 !important",
                border: "1px solid rgba(233,69,96, 0.5) !important",
                bgcolor: "initial !important",
              },
            }}
            color="error"
            value={products}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton className="botton" value={allProduct}>
              All Products
            </ToggleButton>
            <ToggleButton className="botton" value={allProductMen}>
              Men Catogry
            </ToggleButton>
            <ToggleButton className="botton" value={allProductWOmen}>
              Women category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{ my: 5 }}
          justifyContent={{xs:"center",sm:"center",md:"space-between"}}
          flexWrap={"wrap"}
        >

        <AnimatePresence>
  {data.data.map((product) => {
            return (
              <Card
                component={motion.section}
                layout
                animate={{ transform:"scale(1)" }}
                initial={{ transform:"scale(0)" }}
                transition={{duration: 0.8}}
                key={product.id}
                sx={{
                  maxWidth: 330,
                  ":hover .MuiCardMedia-root": {
                    transition: "0.8s",
                    transform: "rotate(3deg) scale(1.1)",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 300 }}
                  image={`${product.attributes.image.data[0].attributes.url}`}
                  title="green iguana"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {product.attributes.title}
                    </Typography>

                    <Typography gutterBottom variant="h6" component="p">
                      {product.attributes.price}$
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {product.attributes.description}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={() => {
                      handleClickOpen();
                      setProductsDetails(product);
                    }}
                    size="small"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      textTransform: "capitalize",
                      gap: "5px",
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                  >
                    <AddShoppingCartIcon sx={{ fontSize: "15px" }} />
                    Add to cart
                  </Button>
                  <Rating
                    name="read-only"
                    precision={0.5}
                    value={product.attributes.rating}
                    readOnly
                  />
                </CardActions>
              </Card>
            );
          })}


        </AnimatePresence>
        
        </Stack>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
            ".MuiPaper-root": {
              minWidth: { xs: "100%", md: 800 },
            },
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              ":hover": {
                color: "initial",
                rotate: "1000deg",
                transition: "0.3s",
              },
              position: "absolute",
              top: "0",
              right: "10px",
            }}
          >
            <Close />
          </IconButton>

          <Details productsDetails={productsDetails} />
        </Dialog>
      </Container>
    );
  }
}

export default Main;
