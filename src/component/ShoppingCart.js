import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

function ShoppingCart() {
  const [data, setData] = useState([]);

  let dataAPI = `https://api.pexels.com/v1/curated`;
  const API_KEY = "IRFfLTybS2GdykQ5nnk5Hm5HsFlnV4LfdPZ2hCGaURvB0HhTpKIprJ13";

  // Fetch data from the API and update the state
  let movieData = async () => {
    try {
      let response = await axios
        .get(dataAPI, {
          headers: {
            Authorization: API_KEY,
          },
        })
        .then((res) => res.data.photos)
        .then((e) => setData(e));
    } catch (err) {
      console.error(err, "err");
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    movieData();
    console.log(data);
  }, []);

  //Checkout implementation
  // State to store the selected items in the cart
  const [checkouItem, setCheckoutItem] = useState([]);

  // Function to add an item to the cart
  let addToCart = (id) => {
    let selectedItem = data.find((e) => e.id === id);
    if (!checkouItem.includes(selectedItem)) {
      setCheckoutItem([...checkouItem, selectedItem]);
    }
  };

  useEffect(() => {
    console.log(checkouItem);
  }, [checkouItem]);

  // Calculate the total price of the items in the cart
  let checkOutTotal = () => {
    let total = checkouItem.length * 100;
    return total;
  };

  // Remove an item from the cart
  let removeCartItems = (id) => {
    setCheckoutItem(checkouItem.filter((e) => e.id !== id));
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Shopping Cart</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "70%" }}>
          <div className="row">
            {data
              ? data.map((e) => {
                  return (
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 mb-3"
                      key={e.id}
                    >
                      <Card
                        key={e.id}
                        sx={{ margin: "1rem", backgroundColor: "#0B7189" }}
                      >
                        <CardMedia
                          sx={{ height: 150 }}
                          image={e.src.original}
                          title={e.photographer}
                        />
                        <CardContent>
                          <Typography sx={{ fontWeight: 750 }}>
                            {e.photographer}
                          </Typography>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              margin: "1rem 0 0 0    ",
                            }}
                          >
                            <Typography>Price:$100</Typography>
                            <Button
                              variant="contained"
                              size="small"
                              sx={{ backgroundColor: "#C19AB7" }}
                              onClick={() => addToCart(e.id)}
                            >
                              Add to cart
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })
              : "Loading"}
          </div>
        </div>

        <div style={{ width: "30%" }}>
          <Card sx={{ backgroundColor: "#DBD3D8" }}>
            <CardContent>
              <h3>Checkout</h3>
              {checkouItem.map((e) => {
                return (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography>Item name</Typography>{" "}
                      <Typography>{e.photographer}</Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                      }}
                    >
                      <Typography>Price</Typography>{" "}
                      <Typography>$100</Typography>
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => removeCartItems(e.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </>
                );
              })}

              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: "23px", fontWeight: "700" }}>
                  Total Items
                </Typography>{" "}
                <Typography>{checkouItem.length}</Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: "23px", fontWeight: "700" }}>
                  Total Price
                </Typography>{" "}
                <Typography>${checkOutTotal()}</Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
