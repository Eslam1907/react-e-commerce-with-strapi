import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./hero.css";
function Herosection() {
  const theme = useTheme();
  const slider = [
    {
      Type: "MEN",
      link: "https://github.com/alielrayes/t-shirts/blob/react-ecomerce-dev-ali-youtube-channel/banner-15.jpg?raw=true",
    },
    {
      Type: "WOMEN",
      link: "https://github.com/alielrayes/t-shirts/blob/react-ecomerce-dev-ali-youtube-channel/banner-25.jpg?raw=true",
    },
  ];
  return (
    <Container sx={{ display: "flex", alignItems: "center", mt: 5, gap: 2,pt:3 }}>
      <Swiper
       loop={true}
        pagination={{
          dynamicBullets: true,
          loop:true
        }}
        sx={{}}
       

        modules={[Pagination]}
        className="mySwiper"
      >
        {slider.map((item)=>{
          return(
            <SwiperSlide key={item.link} sx={{ position: "relative", }}>
          <img
            src={item.link}
            alt=""
          />
          <Box
            sx={{
              [theme.breakpoints.up("sm")]: {
                position: "absolute",
                top: "15%",
                left: "10%",
                textAlign: "left",
               
              },
              [theme.breakpoints.down("sm")]: {
                py: "10px",
              },
            }}
          >
            <Typography
              sx={{
                color: "#222",
              }}
              variant="h6"
            >
              LIFESTYLE COLLECTION
            </Typography>

            <Typography
              sx={{
                color: "#222",
                fontWeight: 400,
                my: 1,
              }}
              variant="h3"
            >
             {item.Type}
            </Typography>

            <Stack
              direction={"row"}
              alignItems={"center"}
              sx={{
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#333",
                  mr: "8px",
                }}
                variant="h4"
              >
                SALE UP TO
              </Typography>

              <Typography
                sx={{
                  color: "#D23F57",
                  fontWeight: 400,
                  my: 1,
                }}
                variant="h5"
              >
                30% OFF
              </Typography>
            </Stack>
            <Typography
              sx={{
                color: "#D23F57",
                fontWeight: 400,
                my: 1,
              }}
              variant="h5"
            >
              30% OFF
            </Typography>
            <Typography
              sx={{
                color: "#000",
                fontWeight: 300,
                my: 1,
              }}
              variant="body1"
            >
              Get Free Shipping on order Over 99.00$
            </Typography>

            <Button
              sx={{
                bgcolor: "#222",
                color: "#fff",
                py: "10px",
                px: "40px",
                borderRadius: "1px",
                boxShadow: "0px 4px 15px rgba(43,52,69,01)",
                ":hover": {
                  bgcolor: "#151515",
                  boxShadow: "0px 4px 15px rgba(43,22,88,01)",
                },
              }}
            >
              BUY NOW
            </Button>
          </Box>
        </SwiperSlide>
          )
        })}
        
      </Swiper>

      <Box sx={{ display: { xs: "none", md: "block" }, width: "36%" }}>
        <Box sx={{ position: "relative", mb: "7px" }}>
          <img
            width={"100%"}
            src="https://github.com/alielrayes/t-shirts/blob/react-ecomerce-dev-ali-youtube-channel/banner-17.jpg?raw=true"
            alt=""
          />
          <Typography
            variant="caption"
            sx={{
              position: "absolute",
              left: "10%",
              top: "20%",

              fontSize: "18px",
              color: "#2B3445",
            }}
          >
            NEW ARRIALS
          </Typography>
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              left: "10%",
              top: "40%",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#2B3445",
            }}
          >
            SUMMER
          </Typography>
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              left: "10%",
              top: "50%",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#2B3445",
            }}
          >
            SALE 20% OFF
          </Typography>
          <Link
            sx={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              top: "70%",
              left: "10%",
              textDecoration: "none",
              cursor: "pointer",
              gap: "5px",
              color: "#2B3445",
              ":hover": { color: "#D23F57" },
            }}
          >
            shop now
            <ArrowForwardIcon sx={{ fontSize: "13px" }} />
          </Link>
        </Box>

        <Box sx={{ position: "relative" }}>
          <img
            width={"100%"}
            src="https://github.com/alielrayes/t-shirts/blob/react-ecomerce-dev-ali-youtube-channel/banner-16.jpg?raw=true"
            alt=""
          />
          <Typography
            variant="caption"
            sx={{
              position: "absolute",
              left: "10%",
              top: "20%",

              fontSize: "18px",
              color: "#2B3445",
            }}
          >
            GAMING 4K
          </Typography>
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              left: "10%",
              top: "40%",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#2B3445",
            }}
          >
            DESKTOPS &
          </Typography>
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              left: "10%",
              top: "50%",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#2B3445",
            }}
          >
            LAPTOPS
          </Typography>
          <Link
            sx={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              top: "70%",
              left: "10%",
              textDecoration: "none",
              cursor: "pointer",
              gap: "5px",
              color: "#2B3445",
              ":hover": { color: "#D23F57" },
            }}
          >
            shop now
            <ArrowForwardIcon sx={{ fontSize: "13px" }} />
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Herosection;
