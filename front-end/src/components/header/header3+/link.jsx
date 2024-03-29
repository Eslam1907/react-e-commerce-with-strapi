import {  ExpandMore } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function Links({title}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        ":hover .when-hover": { display: "Block" },
        ":hover": {cursor:"pointer"},
        
      }}
    >
      <Typography  sx={{ fontSize:"14px" }} variant="body1">{title}</Typography>
      <ExpandMore sx={{ ml: 1 }} />

      <Box
        className="when-hover"
        sx={{
          minWidth: "180px",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "100%",
          display: "none",
          zIndex:20,
        }}
      >
        <Paper sx={{ mt: 2 }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: "0px", px: "12px" }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "14px",
                        fontWeight: "300",
                      },
                    }}
                    primary="Dashboard"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding sx={{
                ":hover .sub-link":{display:"block"}
              }}>
                <ListItemButton sx={{ display: "flex", p: "0px", px: "12px",position:"relative" }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "14px",
                        fontWeight: "300",
                      },
                    }}
                    primary="Products"
                  />
<Box flexGrow={1}></Box>
                  <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
                </ListItemButton>


                <Box className={"sub-link"} sx={{position:"absolute",top:0 ,left:"100%",display:"none"}}>
                  <Paper sx={{minWidth:150 , ml:"5px"}}>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton sx={{p:0,px:"5px"}}>
                            <ListItemText    sx={{
                      ".MuiTypography-root": {
                        fontSize: "13px",
                        fontWeight: "300",
                      },
                    }}
                            primary="Add product" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton sx={{p:0,px:"5px"}}>
                            <ListItemText 
                               sx={{
                      ".MuiTypography-root": {
                        fontSize: "13px",
                        fontWeight: "300",
                      },
                    }}primary="Edit product" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: "0px", px: "12px" }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "14px",
                        fontWeight: "300",
                      },
                    }}
                    primary="Order"
                  />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton sx={{ display: "flex", p: "0px", px: "12px" }}>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "14px",
                        fontWeight: "300",
                      },
                    }}
                    primary="Profile"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
}

export default Links;
