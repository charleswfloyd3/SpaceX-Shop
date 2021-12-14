import { createContext, useContext, useState } from "react";
const ProductsContext = createContext({
  data: null,
  setValue: (value) => {}
});

export const useProduct = () => useContext(ProductsContext);

function SendProduct({ children }) {
  //product for product pages
  const [productvalue, setProduct] = useState();
  const setProductEvent = (data) => {
    setProduct(data);
    localStorage.setItem('productstored',JSON.stringify(data))
  };

  //product for cart page
    const [cartproduct, setCartProduct] = useState([]);
    const [reload, setreload] = useState(false)
    localStorage.setItem('cartproducts',JSON.stringify(cartproduct))
    
    function containsObject(obj, list) {
      for (let i = 0; i < list.length; i++) {
          if (list[i].name === obj.name) {
              return false;
          }
      }
  
      return true;
    }
    const setCartProductEvent = (data) => {
        if(containsObject(data, cartproduct)){
          if(data === 'hey'){
            setCartProduct([])
          localStorage.setItem('cartproducts',JSON.stringify(cartproduct))
            
          }
          else{
          cartproduct.push(data)
          setCartProduct(cartproduct)
          localStorage.setItem('cartproducts',JSON.stringify(cartproduct))
          }
        }
    };

  
  const value = { productvalue, setProductEvent, cartproduct, setCartProductEvent, setCartProduct };
  return (
    <ProductsContext.Provider value={value} >{children}</ProductsContext.Provider>
  );
  }
export default  SendProduct;
