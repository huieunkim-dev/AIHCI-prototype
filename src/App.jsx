import { BrowserRouter, Routes, Route } from "react-router-dom";

import Splash from "./pages/Splash";
import ModeSelect from "./pages/ModeSelect";
import ModeSelectConfirm from "./pages/ModeSelectConfirm";
import ModeSelectComplete from "./pages/ModeSelectComplete";
import MenuList from "./pages/menu/MenuList";
import MenuDetail from "./pages/menu/MenuDetail";
import MenuTemperature from "./pages/menu/MenuTemperature";
import MenuQuantity from "./pages/menu/MenuQuantity";
import MenuComplete from "./pages/menu/MenuComplete";
import Cart from "./pages/Cart";
import OrderConfirm from "./pages/OrderConfirm";
import Payment from "./pages/Payment";
import PaymentCard from "./pages/PaymentCard";
import PaymentComplete from "./pages/PaymentComplete";
import OrderDone from "./pages/OrderDone";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/mode-select" element={<ModeSelect />} />
        <Route path="/mode-select/confirm" element={<ModeSelectConfirm />} />
        <Route path="/mode-select/complete" element={<ModeSelectComplete />} />
        <Route path="/menu" element={<MenuList />} />
        <Route path="/menu/:id" element={<MenuDetail />} />
        <Route path="/menu/:id/temperature" element={<MenuTemperature />} />
        <Route path="/menu/:id/quantity" element={<MenuQuantity />} />
        <Route path="/menu/complete" element={<MenuComplete />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order/confirm" element={<OrderConfirm />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment/card" element={<PaymentCard />} />
        <Route path="/payment/complete" element={<PaymentComplete />} />
        <Route path="/order/done" element={<OrderDone />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
