import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Box sx={{ bgcolor:"#2B3445", py:1.5 ,
    borderTopLeftRadius:9,
    borderTopRightRadius:9
    }}>
    <Typography display={"flex"}
    alignItems={"center"}
    justifyContent={"center"}
    color={"HighlightText"}
    variant='h6'
    fontSize={{xs:12,sm:18}}
    > 
        Designed and developed by
<Button sx={{
    mx:1,
    fontSize:18,
    color:"#ff7790",
    textTransform:"capitalize",
}}
variant='text'
color='primary'
href='https://myportfolio1907.netlify.app'
>

    Eslam Mohamed
</Button>

        @2024
    </Typography>
    
    </Box>
  )
}

export default Footer
