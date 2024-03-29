import { Box, Container, IconButton, ListItem, Stack, Typography, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme/theme";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import List from '@mui/material/List';

import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
const options = [
  'Ar',
  'En',
];
function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  }; 

  const handleMenuItemClick = (
    event,
    index,
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{
      bgcolor:"#2B3445",
      by:"5px",
      borderBottomRightRadius:"5px",
      borderBottomLeftRadius:"5px",
    }}>
    <Container>
       <Stack direction={"row"} alignItems={"center"} >
      <Typography 
    sx={{
      mr:2,
      p:"3px 10px",
      bgcolor:"#D23F57",
      color:"#fff",
      fontweight:"bold",
      fontSize:"10px",
      borderRadius:"12px"
      
    }}
    variant="body2">
      HOT
    </Typography>

    <Typography 
    sx={{
      color:"#fff",
      fontweight:"300",
      fontSize:"12px",
     
      
    }}
    variant="body2">
      Free ExpressSipping
    </Typography>

    <Box flexGrow={1}></Box>
        <div>
    {theme.palette.mode === "light" ? (
      <IconButton
        onClick={() => {
          localStorage.setItem(
            "mode",
            theme.palette.mode === "dark" ? "light" : "dark"
          );
          colorMode.toggleColorMode();
        }}
        color="inherit"
      >
        <LightModeOutlined sx={{color:"#fff",fontSize:"15px"}} />
      </IconButton>
    ) : (
      <IconButton
        onClick={() => {
          localStorage.setItem(
            "mode",
            theme.palette.mode === "dark" ? "light" : "dark"
          );
          colorMode.toggleColorMode();
        }}
        color="inherit"
      >
        <DarkModeOutlined sx={{color:"#fff", fontSize:"15px"}}/>
      </IconButton>
    )}
  </div>




  <List
        component="nav"
        aria-label="Device settings"
        sx={{ p:"0px",m:"0px" }}
      >
        <ListItem
        sx={{"&:hover":{cursor:"pointer"},px:1}}
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
          sx={{".MuiTypography-root":{fontSize:"11px",color:"white"}}}
            secondary={options[selectedIndex]}
          />
          <ExpandMoreIcon sx={{fontSize:"15px",color:"#fff"}} />
        </ListItem>
      </List>
      <Menu
       sx={{ marginLeft:"6px"}}
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
                sx={{fontSize:"12px" ,p:"2px 10px",minHeight:"10px"}}

            key={option}
           
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>







  
  <TwitterIcon sx={{
    fontSize:"12px",
    color:"#fff",
    
  }}>

  </TwitterIcon>
  <FacebookIcon sx={{
    fontSize:"12px",
    color:"#fff",
    mx:1
  }}>

  </FacebookIcon>  
  <InstagramIcon sx={{
    fontSize:"12px",
    color:"#fff",
    margin:"2px"
  
  }}>

  </InstagramIcon>
  </Stack>
    </Container>
   
    
    </Box>
  
  )
}

export default Header1
