import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoryData,
  fetchProductData,
} from "../Redux/ProductRedux/action";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCard from "../Components/ProductCard";
import { Link } from "react-router-dom";
import { Autocomplete, TextField } from "@mui/material";

const ProductPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData());
  }, []);

  const productList = useSelector((state) => state.productData.productList);
  const categoryList = useSelector((state) => state.categoryData.categoryList);

  const handleProduct = (event, value) => {
    console.log(value);
    dispatch(fetchProductData(value));
  };
  return (
    <div>
      Product
      <Box sx={{ flexGrow: 1, margin: "100px 100px" }}>
        <Grid style={{ marginBottom: "30px" }}>
          <Autocomplete
            // disablePortal
            id="combo-box-demo"
            options={[...categoryList]}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Category" />}
            onInputChange={handleProduct}
          />
        </Grid>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ sm: 2, md: 4, lg: 4 }}
          justifyContent="center"
        >
          {productList
            ? productList?.map((ele, index) => (
                <Grid item key={ele.id}>
                  <Link
                    to={`/products/${ele.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <ProductCard
                      prodImage={ele.image}
                      productName={ele.title}
                      productPrice={ele.price}
                    />
                  </Link>
                </Grid>
              ))
            : []}
        </Grid>
      </Box>
    </div>
  );
};

export default ProductPage;
