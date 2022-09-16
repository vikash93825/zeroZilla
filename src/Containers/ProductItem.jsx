import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductItemData } from "../Redux/ProductRedux/action";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ProductItem = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { productId } = params;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductItemData(productId));
  }, []);
  const { item, isLoading } = useSelector((state) => state.productItem);
  console.log(item);

  const handleCart = (id) => {
    console.log(id);
    navigate("/cart");
  };

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Card sx={{ display: "flex", margin: "100px 100px" }}>
          <CardMedia
            component="img"
            image={item?.image}
            alt={item?.title}
            sx={{
              width: "50%",
              height: "290px",
              objectFit: "contain",
              padding: "50px 50px",
            }}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ width: 251 }}>
              <Typography>{item.name}</Typography>
              <Typography>{item.description}</Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <Button onClick={() => handleCart(item.id)}>Add to cart</Button>
            </Box>
          </Box>
        </Card>
      )}
    </div>
  );
};

export default ProductItem;
