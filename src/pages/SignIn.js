import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addaside, add, increment } from "../redux/cartSlice";
import { getProducts } from "../data/products";

export default function SignIn() {
  const [asideProducts, setAsideCart] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let asideProductUserId = [];
  const allProducts = getProducts();

  const { items, localId, loading } = useSelector((store) => ({
    items: store.cart.items,
    localId: store.auth.localId,
    loading: store.auth.loading,
  }));

  console.log(items);

  // if succses user auth - loading -false
  console.log(localId);
  // loading if auth - add setasidecart
  useEffect(() => {
    if (localId !== null) {
      axios
        .get(
          "https://test-firebase-d7b5e-default-rtdb.firebaseio.com/setasidecart.json"
        )
        .then(({ data }) => {
          const cartItems = Object.keys(data).map((id) => {
            return { id, ...data[id] };
          });
          console.log(cartItems);
          setAsideCart(cartItems);

          //   cartItems
          //     .filter((asideProduct) => asideProduct.idLocal === localId)
          //     .map((asideProduct) => {
          //       console.log(asideProduct);

          //       // work --- 13:14 22,03, ---------========================--=-
          //       Object.keys(asideProduct.items).map((item) => {
          //         console.log(item);
          //         console.log(Object.keys(items));
          //         // возращаем строковое значение если есть или undefined
          //         let res = Object.keys(items).find((i) => i === item);
          //       console.log(res);
          //       console.log(Object.values(items))

          //         Object.keys(items).find((i) => i === item) === undefined
          //           ? dispatch(add(item))
          //           : Object.values(items).forEach(dispatch(increment(item)));
          //       });

          //     });
        })
        .catch((error) => {
          console.error(error);
        });
    }

    // navigate("/");
  }, []);

 


  useMemo(() => {

    let qualityProduct = [];
    if (asideProducts !== null) {
      asideProducts
        .filter((asideProduct) => asideProduct.idLocal === localId)
        .map((asideProduct) => {
          console.log(asideProduct);
  
          Object.entries(asideProduct.items).map((item) => {
            console.log(item);
            console.log(item[0]);
            console.log(item[1]);
            console.log(Object.keys(items));
          //   //     // возращаем строковое значение
            console.log(Object.keys(items).find((i) => i === item[0]));
  
          qualityProduct = new Array(item[1]).fill(1)
          console.log(qualityProduct)
            Object.keys(items).find((i) => i === item[0]) === undefined
              ? qualityProduct.forEach((e) => dispatch(add(item[0])))
              : qualityProduct.forEach((e) => dispatch(increment(item[0])));
  
            // Object.keys(items).length === 0 ? dispatch(add(item)): dispatch(addaside(item))
            //   dispatch(addaside(item));
          });
        });
    }

  },[asideProducts]);

  //  console.log(asideProducts);
  /// im Here work - cart
  //   if (asideProducts !== null) {
  //     asideProducts
  //       .filter((asideProduct) => asideProduct.idLocal === localId)
  //       .map((asideProduct) => {
  //         console.log(asideProduct);
  //         return Object.keys(asideProduct.items).map((item) => {
  //           return asideProductUserId.push(
  //             Object.assign(
  //               // console.log(Object.values(order.id).join("")); //injection order.id
  //               { quantity: Object.values(asideProduct.items) },
  //               allProducts[
  //                 allProducts.findIndex((product) => product.productId === item)
  //               ]
  //             )
  //           );
  //         });
  //         // work ---
  //         // return Object.keys(asideProduct.items).map((item) => {
  //         //   return dispatch(addaside(item));
  //         // });
  //       });
  //   }

  //   //console.log(asideProductUserId);
  //   // ===
  //   if (asideProductUserId.length > 0) {
  //     // 2
  //     //for (let i = 0; i < asideProductUserId.length; i++) {
  //     //  console.log(asideProductUserId[i]["productId"]);
  //     //  dispatch(addaside(asideProductUserId[i]["productId"]));
  //     // }

  //     // work but add more 1
  //     console.log(asideProductUserId);
  //     asideProductUserId.forEach((element) =>
  //       Object.keys(element).forEach((key) => {
  //         if (key === "productId") {
  //           if (key === "quantity") {

  //           }
  //           console.log(element[key]);
  //           console.log(element[]);

  //           //dispatch(addaside(element[key]));
  //         }
  //       })
  //     );
  //   }

  if (asideProducts !== null) {
    navigate("/");
  }

  return "qwerty";
}
