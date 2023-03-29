import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add, increment } from "../redux/cartSlice";

export default function SignIn() {
  const [asideProducts, setAsideCart] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items, localId } = useSelector((store) => ({
    items: store.cart.items,
    localId: store.auth.localId,
    loading: store.auth.loading,
  }));

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

          setAsideCart(cartItems);
        })
        .catch((error) => {
          console.error(error);
        });
    }

  }, [localId]);

  useMemo(() => {

    let qualityProduct = [];
    if (asideProducts !== null) {
      asideProducts
        .filter((asideProduct) => asideProduct.idLocal === localId)
        // eslint-disable-next-line array-callback-return
        .map((asideProduct) => {
          console.log(asideProduct);

          // eslint-disable-next-line array-callback-return
          Object.entries(asideProduct.items).map((item) => {
          
            qualityProduct = new Array(item[1]).fill(1);
            console.log(qualityProduct);
            Object.keys(items).find((i) => i === item[0]) === undefined
              ? qualityProduct.forEach((e) => dispatch(add(item[0])))
              : qualityProduct.forEach((e) => dispatch(increment(item[0])));
          });
        });
    }
  }, [asideProducts, dispatch, items, localId]);

  if (asideProducts !== null) {
    navigate("/");
  }

  return "qwerty";
}
