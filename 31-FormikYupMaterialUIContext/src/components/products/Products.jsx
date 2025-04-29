import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const Products = () => {
  const products = useContext(ProductContext);
  console.log(products);

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={10}>

        {products.map((product) => (

          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="300"
                width="200"
                image={product.image}
                alt={product.title}
              />

              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  price: ${product.price}
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small">view</Button>
                <Button size="small">add to cart</Button>
              </CardActions>
              
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
