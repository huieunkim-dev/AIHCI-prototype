import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.scss";

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

const KIOSK_W = 1080;
const KIOSK_H = 1920;

function App() {
  const scalerRef = useRef(null);

  useEffect(() => {
    function updateScale() {
      if (!scalerRef.current) return;
      const scaleX = window.innerWidth / KIOSK_W;
      const scaleY = window.innerHeight / KIOSK_H;
      const scale = Math.min(scaleX, scaleY);
      const offsetX = (window.innerWidth - KIOSK_W * scale) / 2;
      const offsetY = (window.innerHeight - KIOSK_H * scale) / 2;
      scalerRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
    }

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <BrowserRouter>
      <div className="kiosk-scaler" ref={scalerRef}>
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
      </div>
    </BrowserRouter>
  );
}

export default App;
