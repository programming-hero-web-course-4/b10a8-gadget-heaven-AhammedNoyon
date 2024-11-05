import { toast } from "react-toastify";

const getStoredCart = () => {
  const haveCheckCartInStore = localStorage.getItem("cart");
  if (haveCheckCartInStore) {
    const parseStoreCart = JSON.parse(haveCheckCartInStore);
    return parseStoreCart;
  }
  return [];
};

const addCartInStore = (id) => {
  const getCartCollectionByCall = getStoredCart();
  // console.log(getCartCollectionByCall);
  const isExist = getCartCollectionByCall.find(
    (item) => item.productId === id.productId
  );
  if (isExist) {
    return toast.warn("Already Exist");
  }
  getCartCollectionByCall.push(id);
  saveNewCartCollectionInStore(getCartCollectionByCall);
  toast.success("Added successful");
};

const saveNewCartCollectionInStore = (cart) => {
  const stringifyNewCollectionCart = JSON.stringify(cart);
  localStorage.setItem("cart", stringifyNewCollectionCart);
};

//ai function taw problem
const removeInLS = (id) => {
  const getCartCollectionByCall = getStoredCart();
  const remaining = getCartCollectionByCall.filter((idx) => idx !== id);
  saveNewCartCollectionInStore(remaining);
};

export { addCartInStore, getStoredCart, removeInLS };
