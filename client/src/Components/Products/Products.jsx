import React from "react";
import {Grid} from "@material-ui/core";
import Prodcut from "../Product/Prodcut";

const products = [
  {id: 1, name: "Shoes", description: "Running shoes", price:"$5", image:"https://petapixel.com/assets/uploads/2017/03/product1.jpeg"},
  {id: 2, name: "Mackbook", description: "Apple Mackbook", price:"$10", image:"https://www.cnet.com/a/img/DigRPAcns7Zly9MCFO2QJyR0ZEQ=/940x0/2020/03/19/653c1c11-e128-4b51-88c4-98335df4a979/img-8346.jpg"},
];

function Products() {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Prodcut product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
