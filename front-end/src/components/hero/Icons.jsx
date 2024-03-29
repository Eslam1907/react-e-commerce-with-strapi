import React from "react";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import AlarmIcon from "@mui/icons-material/Alarm";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function Icons() {
    const media = useMediaQuery("(min-width:600px)")
  const theme = useTheme();
  const myInfo = [
    {
      icon: <ElectricBoltIcon sx={{ fontSize: "35px" }} />,
      title: "Fast Delivery",
      subtitle: "start from 10$",
    },
    {
      icon: <WorkspacePremiumIcon sx={{ fontSize: "35px" }} />,
      title: "Money Guarantee",
      subtitle: "7 DAys Back",
    },
    {
      icon: <AlarmIcon sx={{ fontSize: "35px" }} />,
      title: "365 Days",
      subtitle: "for Free return",
    },
    {
      icon: <CreditScoreIcon sx={{ fontSize: "35px" }} />,
      title: "Payment",
      subtitle: "Secure System",
    },
  ];
  return (
    <Container>
      <Stack
        divider={
          media ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        direction={"row"}
        alignItems={"center"}
        sx={{
          mt: 5,
          justifyContent: "space-between",
          flexWrap: "wrap",
          bgcolor: theme.palette.mycolor.main,
        }}
      >
        {myInfo.map((item) => {
          return (
            <Box
              sx={{
                width: 250,
                flexGrow: 5,
                display: "flex",
                alignItems: "center",
                gap: 3,
                py: 3,
                justifyContent: media
                  ? "center"
                  : "left"
              }}
            >
              <Box>{item.icon}</Box>
              <Box>
                <Typography variant="body1">{item.title}</Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 300,
                    color: theme.palette.text.secondary,
                  }}
                >
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Container>
  );
}

export default Icons;
