import './App.css';
import { useEffect, useState } from 'react';
import Navbar from "./components/Navbar"
import CartList from "./components/CartList"
import ProductList from "./components/ProductList"
import { ArchiveTwoTone } from '@material-ui/icons';
function App() {
const [products, setProducts] = useState([
  {
    id:1,
    url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
    name: 'TRQ White Shoes',
    category: 'Shoes',
    seller: 'AMZ Seller Ghz',
    price: 1999,
    quantity:1
  },
  {
    id:2,
    url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
    name: 'LOREM Watch Black',
    category: 'Watches',
    seller: 'Watch Ltd Siyana',
    price: 2599,
    quantity:1
    },
  {
    id:3,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
    name: 'AMZ Laptop 8GB RAM',
    category: 'Laptops',
    seller: 'Delhi Laptops',
    price: 50000,
    quantity:1

  },
  {
    id:4,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU',
    name: 'Security Camera',
    category: 'CCTV',
    seller: 'Camron LTD',
    price: 4000,
    quantity:1
  },
  {
    id:5,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
    name: 'Watch Pink',
    category: 'Watches',
    seller: 'Watch Ltd',
    price: 2000,
    quantity:1
  },
  {
    id:6,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
    name: 'Cup red Color',
    category: 'Cup',
    seller: 'ABS Ltd',
    price: 100,
    quantity:1
  },
]);
const [cart,setCart] = useState([]);

const [tprice,setTprice] = useState(0);
const addToCart =(data)=>{
    setCart([...cart,data]);
    handleTotalPrice();
}
const addQuantity =(data)=>{
  {
    const index = cart.indexOf(data);
    const arr = cart;
    arr[index].quantity=arr[index].quantity+1;
    setCart([...arr]);
    handleTotalPrice();
  }
}
const removeQuantity =(data)=>{
  {
    const index = cart.indexOf(data);
    const arr = cart;
    if(arr[index].quantity==1){
      arr.splice(index,1);
      setCart([...arr]);
    }
    else{
      arr[index].quantity=arr[index].quantity-1;
      setCart([...arr]);
    }
    handleTotalPrice();
  }
}
const handleTotalPrice =()=>{
  let ans=0;
  {
    cart.map((item)=>{
        console.log(item);
        ans+=item.quantity*item.price;
        setTprice(ans);
      })
    }
}
// just from cart and homepage swich used this
const [showCart, setShowCart] = useState(false);
const handleShow = (value) => {
  setShowCart(value)
}

  return (
    <div className="App">
      <Navbar handleShow={handleShow} count={cart.length} ></Navbar>

      {
        showCart ?
          <CartList cart={cart} addQuantity={addQuantity} removeQuantity={removeQuantity} tprice={tprice}></CartList> :
          <ProductList products={products} addToCart={addToCart}></ProductList>
      }

    </div>
  );
}

export default App;
