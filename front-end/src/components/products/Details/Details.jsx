import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";


function Details({ productsDetails }) {
  // eslint-disable-next-line no-unused-vars
  const [alignment, setAlignment] = useState("left");
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <Stack
      key={productsDetails}
      direction={{ xs: "column", sm: "row" }}
      fontSize={{ xs: "10px", sm: "16px" }}
      alignItems={"center"}
      gap={3}

    >
      <Box>
        <img
        
          src={
            productsDetails.attributes.image.data[selectedImage].attributes.url
          }
          alt=""
          width={310}
          height={380}
        />
      </Box>

      <Box textAlign={{ xs: "center", sm: "left" }} sx={{my:3}}>
        <Typography variant="h5">{productsDetails.attributes.title}</Typography>

        <Typography
          variant="p"
          sx={{
            fontSize: "22px",
            color: "crimson",
            py: 0.4,
          }}
        >
          ${productsDetails.attributes.price}
        </Typography>

        <Typography key={productsDetails.id} variant="body1">
          {" "}
          {productsDetails.attributes.description}
        </Typography>

        <Stack
          justifyContent={{ xs: "center", sm: "left" }}
          sx={{ my: 2 }}
          direction={"row"}
          gap={1}
          alignItems={"center"}
        >
          <ToggleButtonGroup
            value={selectedImage}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            
            sx={{
              display:"flex",
              flexWrap:"wrap",
              ".Mui-selected": {
                color: "#e94560 !important",
                border: "1px solid royalblue !important",
                opacity: "1",
                bgcolor: "initial",
                borderRadius: "5px !important",
              },
            }}
          >
            {productsDetails.attributes.image.data.map((item, index) => {
              return (
                <ToggleButton
                  sx={{
                   
                    p: "0",
                    width: 110,
                    height: 110,
                    opacity: 0.6,
                    mx: 1,
                  }}
                  value={index}
                  aria-label="left aligned"
                >
                  <img
                    className="imaaaage"
                    onClick={() => setSelectedImage(index)}
                    key={item.id}
                    height={95} 
                    style={{
                    
                      padding: 0,
                      width: "100%",
                      height: "100%",
                      margin: "",
                      borderRadius: "3px",
                      opacity: 0.7,
                    }}
                    src={item.attributes.url}
                    alt=""
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </Stack>

        <Button
          variant="contained"
          sx={{
            ".MuiButtonBase-root MuiButton-root MuiButton-contained": {
              margin: { xs: "10px 150px", sm: "5px" },
            },
            textTransform: "capitalize",
          }}
        >
          <AddShoppingCartIcon sx={{ mr: 1, fontSize: "15px" }} />
          Buy Now
        </Button>
      </Box>
    </Stack>
  );
}

export default Details;
