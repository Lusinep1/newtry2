// // src/App.jsx
// import React, { useContext } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { CartProvider } from "./context/CartContext";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import GrillBox from "./pages/GrillBox";
// import Account from "./pages/Account";
// import BoxSelection from "./pages/BoxSelection";
// import Checkout from "./pages/Checkout";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Cart from "./pages/Cart";
// import About from "./pages/About";
// import Fishboxes from "./pages/Fishboxes";
// import Fishguide from "./pages/Fishguide";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import { AuthContext } from "./context/AuthContext";
// import LoyaltyBoxStart from "./pages/LoyaltyBoxStart";
// import LoyaltyBoxSmall from "./pages/LoyaltyBoxSmall";
// import LoyaltyBoxMedium from "./pages/LoyaltyBoxMedium";
// import LoyaltyBoxGreat from "./pages/LoyaltyBoxGreat";

// function App() {
//   const { user } = useContext(AuthContext);

//   return (
//     <CartProvider>
//       <Router>
//         <Navbar cartItemCount={0} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/grill-box" element={<GrillBox />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/fish-boxes" element={<Fishboxes />} />
//           <Route path="/fish-guide" element={<Fishguide />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/account" element={<Account />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/box-selection" element={<BoxSelection />} />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/loyaltybox-start" element={<LoyaltyBoxStart />} />
//           <Route path="/loyaltybox-small" element={<LoyaltyBoxSmall />} />
//           <Route path="/loyaltybox-medium" element={<LoyaltyBoxMedium />} />
//           <Route path="/loyaltybox-great" element={<LoyaltyBoxGreat />} />
//           {/* Protecting some routes for authenticated users only */}
//           <Route
//             path="/account"
//             element={user ? <Account /> : <Navigate to="/login" />}
//           />
//         </Routes>
//       </Router>
//     </CartProvider>
//   );
// }

// export default App;

// src/App.jsx
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider, AuthContext } from "./context/AuthContext"; // Import AuthContext
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GrillBox from "./pages/GrillBox";
import Account from "./pages/Account";
import BoxSelection from "./pages/BoxSelection";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Fishboxes from "./pages/Fishboxes";
import Fishguide from "./pages/Fishguide";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import LoyaltyBoxStart from "./pages/LoyaltyBoxStart";
import LoyaltyBoxSmall from "./pages/LoyaltyBoxSmall";
import LoyaltyBoxMedium from "./pages/LoyaltyBoxMedium";
import LoyaltyBoxGreat from "./pages/LoyaltyBoxGreat";

function App() {
  // Access the user from AuthContext
  const { user } = useContext(AuthContext);

  return (
    // Wrap with AuthProvider to provide user state globally
    <AuthProvider>
      {/* CartProvider to provide cart state globally */}
      <CartProvider>
        <Router>
          {/* Navbar will access cart items from CartContext */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/grill-box" element={<GrillBox />} />
            <Route path="/about" element={<About />} />
            <Route path="/fish-boxes" element={<Fishboxes />} />
            <Route path="/fish-guide" element={<Fishguide />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/box-selection" element={<BoxSelection />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/loyaltybox-start" element={<LoyaltyBoxStart />} />

            {/* Pass user and cart update method to LoyaltyBoxSmall */}
            <Route path="/loyaltybox-small" element={<LoyaltyBoxSmall />} />

            <Route path="/loyaltybox-medium" element={<LoyaltyBoxMedium />} />
            <Route path="/loyaltybox-great" element={<LoyaltyBoxGreat />} />

            {/* Protecting some routes for authenticated users only */}
            <Route
              path="/account"
              element={user ? <Account /> : <Navigate to="/login" />}
            />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
