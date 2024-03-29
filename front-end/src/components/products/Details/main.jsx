import React, { useState } from "react";
import {
  Box,
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

function Main() {
  

  const handleChange = (event, newValue) => {
    setProducts(newValue)
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
  
  const { data, error, isLoading } = useGetproductByNameQuery(products);
 
if (error){
  return(
    <Typography variant="body1">
{" "}
{
  error.message
}
    </Typography>
  )
}

if (isLoading){
  return(
    <Typography variant="body1">
lllllaaaoooooodin

    </Typography>
  )
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
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          {data.data.map((product) => {
            return (
              <Card
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
                      {product.attributes.price}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {product.attributes.description}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={handleClickOpen}
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

          <Details />
        </Dialog>
      </Container>
    );
  }
}

export default Main;
