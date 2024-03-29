import {
  Container,
  IconButton,
  InputBase,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SearchIcon from "@mui/icons-material/Search";
import { styled, useTheme } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import List from "@mui/material/List";
//import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ExpandMore } from "@mui/icons-material";

function Header2() {
  const options = ["All categories", "Car", "Clothes", "Electronics"];

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid #777",
    flexGrow: "0.6",
    "&:hover": {
      border: "1px solid #555",
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    Width: "260px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "330px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(3),
      width: "180px",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#777",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  return (
    <Container sx={{ display: "flex", py: 3, justifyContent: "space-between" }}>
      <Stack sx={{ alignItems: "center" ,fontSize:"10px"}}>
        <LocalGroceryStoreIcon />
        <Typography sx={{fontSize:"18px"}} variant="body2">E-commerce</Typography>
      </Stack>
      <Search sx={{ borderRadius: "22px", display: "flex",justifyContent
      :"space-between" }}>
        <SearchIconWrapper>
          <SearchIcon sx={{}} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <div>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              bgcolor: theme.palette.mycolor.main,
              borderTopRightRadius: "22px",
              p: "0px",
              borderBottomRightRadius: "22px",
            }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ fontSize: "3px" }}
            >
              <ListItemText
                sx={{
                  width: 90,
                  textAlign: "center",
                  cursor: "pointer",
                  fontSize: "10px",
                }}
                // className="border"
                secondary={options[selectedIndex]}
              />
              <ExpandMore />
            </ListItem>





            
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
            sx={{ marginLeft: "65.5%", marginTop: "90px", minHeight: "20px" }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "13px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Search>

      <Stack direction={"row"}>
        <IconButton>
          <PersonIcon />
        </IconButton>

        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCartIcon sx={{}} />
          </StyledBadge>
        </IconButton>
      </Stack>
    </Container>
  );
}

export default Header2;
