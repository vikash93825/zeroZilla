import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ProductCard = ({ prodImage, productName, productPrice }) => {
  return (
    <div>
      <Card sx={{ width: 280 }}>
        <CardMedia
          component="img"
          height="240"
          image={prodImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
            {productName}
          </Typography>
          <Typography gutterBottom variant="p" component="div">
            {`Rs ${productPrice}`}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
