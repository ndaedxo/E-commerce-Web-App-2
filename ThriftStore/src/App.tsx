// ThriftStore\src\App.tsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/HomePage";
import Shop from "./pages/ShopPage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import ProductDetail from "./pages/ProductDetailPage";
import ShoppingCart from "./pages/CartPage";
import Checkout from "./pages/CheckoutPage";
import SearchResults from "./pages/SearchResultsPage";
import NotFound from "./pages/NotFoundPage";
import FAQ from "./pages/FAQPage";

import Profile from "./pages/customer/ProfilePage";
import AdminProfile from "./pages/admin/AdminProfile";

import Overview from "./pages/customer/OverviewPage";
import RecentOrders from "./pages/customer/OrderHistoryPage";
import Wishlist from "./pages/customer/WishlistPage";

import AdminHome from "./pages/admin/AdminHomePage";
import AdminUsers from "./pages/admin/AdminUsersPage";
import AdminOrders from "./pages/admin/AdminOrdersPage";
import AdminProducts from "./pages/admin/AdminProductsPage";

// Define mockSearchResults
const mockSearchResults = [
  {
    id: "1",
    name: "Vintage T-Shirt",
    price: 19.99,
    image: "/path/to/image1.jpg",
  },
  { id: "2", name: "Antique Vase", price: 29.99, image: "/path/to/image2.jpg" },
  // Add more mock products as needed
];

// Define handleAddToCart
const handleAddToCart = (product: {
  id: string;
  name: string;
  price: number;
  image: string;
}) => {
  console.log("Adding to cart:", product);
};

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/search"
            element={
              <SearchResults
                searchResults={mockSearchResults}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route path="/faq" element={<FAQ />} />
          
          {/* Customer Routes */}
          <Route path="/overview" element={<Overview />} />
          <Route path="/recent-orders" element={<RecentOrders />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />

          {/* Admin Routes */}
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/admin-products" element={<AdminProducts />} />
          <Route path="/admin-orders" element={<AdminOrders />} />
          <Route path="/admin-users" element={<AdminUsers />} />
          <Route path="/admin-profile" element={<AdminProfile />} />

          {/* Dashboard Routes */}
          <Route path="/customer-dashboard" element={<Overview />} />
          <Route path="/admin-dashboard" element={<AdminHome />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
