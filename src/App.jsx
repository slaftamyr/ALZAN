import React, { useState } from "react";
import "./App.css";
import { FaChair, FaShoppingCart, FaTimes, FaWhatsapp } from "react-icons/fa";

const furnitureItems = [
  {
    id: 1,
    name: "كراسي خشب",
    description: " العدد 6 كراسي خشب عالية الجودة.",
    price: 500,
    image: "https://via.placeholder.com/150",
    sold: false, // حدد ما إذا كان المنتج مبيعاً أم لا
  },
  {
    id: 2,
    name: "سراير دمياطي",
    description: "جوز سراير دمياطي",
    price: 1000,
    image: "https://via.placeholder.com/150",
    sold: true, // هذا المنتج مبيع بالفعل
  },
  {
    id: 3,
    name: "سراسر ملبسة  ",
    description: "جوز سراير ملبسة",
    price: 2000,
    image: "https://via.placeholder.com/150",
    sold: false, // المنتج متاح
  },
  {
    id: 1,
    name: " سراير خشب",
    description: " سراير موسكو جوز",
    price: 500,
    image: "https://via.placeholder.com/150",
    sold: false, // حدد ما إذا كان المنتج مبيعاً أم لا
  },
  {
    id: 1,
    name: "كرسي خشب",
    description: "كرسي خشب عالي الجودة.",
    price: 500,
    image: "https://via.placeholder.com/150",
    sold: false, // حدد ما إذا كان المنتج مبيعاً أم لا
  },
  {
    id: 1,
    name: "كرسي خشب",
    description: "كرسي خشب عالي الجودة.",
    price: 500,
    image: "https://via.placeholder.com/150",
    sold: false, // حدد ما إذا كان المنتج مبيعاً أم لا
  },
  {
    id: 1,
    name: "كرسي خشب",
    description: "كرسي خشب عالي الجودة.",
    price: 500,
    image: "https://via.placeholder.com/150",
    sold: false, // حدد ما إذا كان المنتج مبيعاً أم لا
  },
  {
    id: 1,
    name: "كرسي خشب",
    description: "كرسي خشب عالي الجودة.",
    price: 500,
    image: "https://via.placeholder.com/150",
    sold: false, // حدد ما إذا كان المنتج مبيعاً أم لا
  },
];

const App = () => {
  const [cart, setCart] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    if (item.sold) return; // لا يمكن إضافة المنتج إذا كان مبيعًا
    setCart((prevCart) => ({
      ...prevCart,
      [item.id]: (prevCart[item.id] || 0) + 1,
    }));
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[item.id] > 1) {
        newCart[item.id] -= 1;
      } else {
        delete newCart[item.id];
      }
      return newCart;
    });
  };

  const getCartItems = () =>
    Object.entries(cart).map(([id, quantity]) => ({
      ...furnitureItems.find((item) => item.id === parseInt(id)),
      quantity,
    }));

  const contactLink = "https://wa.me/0129512940";

  return (
    <div className="app">
      <header>
        <h1>
          <FaChair /> الزان للأثاث المستعمل
        </h1>
      </header>

      <main>
        <div className="product-grid">
          {furnitureItems.map((item) => (
            <div
              key={item.id}
              className={`product-card ${item.sold ? "sold" : ""}`}
            >
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>{item.price} SDG</p>
              <div className="actions">
                <button onClick={() => addToCart(item)} disabled={item.sold}>
                  {item.sold ? "مباع" : "إضافة +"}
                </button>
                <span>{cart[item.id] || 0}</span>
                <button
                  onClick={() => removeFromCart(item)}
                  disabled={item.sold}
                >
                  إزالة -
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {Object.keys(cart).length > 0 && (
        <div className="floating-cart" onClick={() => setIsCartOpen(true)}>
          <FaShoppingCart className="cart-icon" />
        </div>
      )}

      {isCartOpen && (
        <div className="modal">
          <div className="modal-content">
            <FaTimes className="close" onClick={() => setIsCartOpen(false)} />
            <h2>سلة المشتريات</h2>
            <ul>
              {getCartItems().map((item) => (
                <li key={item.id}>
                  {item.name} - {item.quantity} × {item.price} SDG
                </li>
              ))}
            </ul>
            <a
              href={contactLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              إرسال الطلب عبر واتساب
            </a>
          </div>
        </div>
      )}

      <footer>
        <div className="contact-info">
          <p>للتواصل: 0129512940</p>
          <a
            href={contactLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-icon"
          >
            <FaWhatsapp size={40} />
          </a>
        </div>
        <p>© 2024 الزان للأثاث المستعمل - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
};

export default App;
