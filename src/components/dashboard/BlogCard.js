import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
import user1 from "../../../public/go1.png";
import user2 from "../../../assets/images/backgrounds/u6.jpeg";
import user3 from "../../../assets/images/backgrounds/u7.jpeg";

const blogs = [
  {
    img: user1,
    title: "Usman",
    subtitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btncolor: "error",
  },
  // {
  //   img: user2,
  //   title: "Raffay Akmal Admin",
  //   subtitle:
  //     "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //   btncolor: "warning",
  // },
  // {
  //   img: user3,
  //   title: "Faisal Mansoor",
  //   subtitle:
  //     "Some quick example text to build on the card title and make up the bulk of the card's content.",
  //   btncolor: "primary",
  // },
];

const BlogCard = () => {
  return (
    <Grid container>
      {blogs.map((blog, index) => (
        <Grid
          key={index}
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <Card
            sx={{
              p: 0,
              width: "100%",
            }}
          >
            <Image height={500} width={800} src={blog.img} alt="img" />
            <CardContent
              sx={{
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "h4.fontSize",
                  fontWeight: "500",
                }}
              >
                {blog.title}
              </Typography>
              <Typography
                color="textSecondary"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  mt: 1,
                }}
              >
                {blog.subtitle}
              </Typography>
              {/* <Button
                variant="contained"
                sx={{
                  mt: "15px",
                }}
                color={blog.btncolor}
              >
                Learn More
              </Button> */}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogCard;
