import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Details() {
    const image = "https://github.com/alielrayes/t-shirts/blob/products/1/final.png?raw=true"
  return (
    <Stack direction={{xs:"column",sm:"row"}} alignItems={"center"} gap={3} >
      <Box
      >
        <img src={image} alt="" width={310}   />
      </Box>

      <Box textAlign={{xs:"center",sm:"left"}}>
        <Typography variant="h5" >WOMENS FASHION</Typography>

        <Typography variant="p" sx={{
            fontSize:"22px",
            color:"crimson",
            py:0.4
        }}>$12.99</Typography>

        <Typography variant="body1">  Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica</Typography>

              <Stack justifyContent={{xs:"center",sm:"left"}}  sx={{my:2}} direction={"row"} gap={1} alignItems={"center"}>
              {
                    [image,image,image].map((item)=> {
                        return(
                            <img key={item} height={95} style={{width:90,height:90 , margin:"" , borderRadius:'3px'}}  src={item} alt="" />
                        )
                    } )
                }
               
              </Stack>

              <Button  variant="contained"    sx={{".MuiButtonBase-root MuiButton-root MuiButton-contained":{margin:{xs:"10px 150px", sm:"5px"}} ,textTransform:"capitalize" }}>
            <AddShoppingCartIcon sx={{mr:1, fontSize:"15px"}} />
            Buy Now</Button>



      </Box>
    </Stack>
  );
}

export default Details;
