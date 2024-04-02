import {
  Box,
  Container,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { useTheme } from "@emotion/react";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import { Close } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Links from "./header3+/link";

function Header3() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt:5,
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            bgcolor: theme.palette.mycolor.main,
            width: 222,
            color: theme.palette.text.secondary,
          }}
        >
        
          <WindowOutlinedIcon />
          <Typography
            sx={{
              p: "0px",
              textTransform: "capitalize",
            }}
          >
            Categories
          </Typography>
          <Box flexGrow={8} />
          <KeyboardArrowRightOutlinedIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: 222,
              bgcolor: theme.palette.mycolor.main,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>

      {useMediaQuery('(min-width:1123px)') &&  
     <Stack direction={"row"} alignItems={"center"} gap={5}>
       <Links title={"Home"}/>
       <Links title={"Mega Menu"}/>
       <Links title={"Full Screen Menu"}/>
       <Links title={"Pages"}/>
       <Links title={"User account"}/>
       <Links title={"Vendor Account"}/>
     </Stack >
      }
     
      {useMediaQuery('(max-width:1123px)') && <IconButton onClick={toggleDrawer("top", true)}>
        <MenuOutlinedIcon />
      </IconButton>}
      
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },".css-1qdun2q-MuiPaper-root-MuiDrawer-paper":{  height: "100%",}
        }}
      >
        <Box
          
          sx={{
            width: 440,
            mt: 10,
            mx: "auto",
            paddingTop: 10,
            position: "relative",
    
          }}
        >
          <IconButton
            onClick={toggleDrawer("top", false)}
            sx={{":hover":{color:"initial",rotate:"1000deg",transition:"0.3s"}, position: "absolute", top: "0", right: "10px" }}
          >
            <Close />
          </IconButton>

          {[
            { mainlink: "Home", sublink: ["link1", "link2", "link3"] },
            { mainlink: "Mega menu", sublink: ["link1", "link2", "link3"] },
            {
              mainlink: "Full screen menu",
              sublink: ["link1", "link2", "link3"],
            },
            { mainlink: "Pages", sublink: ["link1", "link2", "link3"] },
            { mainlink: "User account", sublink: ["link1", "link2", "link3"] },
            {
              mainlink: "Vendor account",
              sublink: ["link1", "link2", "link3"],
            },
          ].map((item) => {
            return (
              <Accordion key={item.sublink} elevation={0} sx={{ bgcolor: "initial" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>{item.mainlink}</Typography>
                </AccordionSummary>

              {item.sublink.map((link)=>{
                return(
                  <List sx={{ py: "0px", my: "0px",}}>
                  <ListItem sx={{ py: "0px", my: "0px" }}>
                  
                    <ListItemButton>
                      <ListItemText primary={link} />
                    </ListItemButton>
                  </ListItem>
                  
                </List>
                )
              })}
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
}

export default Header3;
