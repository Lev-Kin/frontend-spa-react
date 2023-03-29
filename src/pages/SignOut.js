import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { setAside } from "../redux/cartSlice";

export default function SignOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  const { items, localId } = useSelector((store) => ({
    items: store.cart.items,
    localId: store.auth.localId,
  }));

  // work
  useEffect(() => {
    // if use React.StrictMode need off because render 2 time
    // (state.signoutlink)
    //  (if on production in React.StrictMode 1 time)
    if (
      state.signoutlink &&
      Object.keys(items).length !== 0 &&
      localId !== null
    ) {
      const setCart = {
        date: new Date(),
        idLocal: localId,
        items: items,
        cart: "setAside",
      };
      dispatch(setAside(setCart));
    }

    dispatch({ type: "auth/init" });
    navigate("/");
  }, [dispatch, navigate, state.signoutlink, items, localId]);

  return "qwerty";
}
