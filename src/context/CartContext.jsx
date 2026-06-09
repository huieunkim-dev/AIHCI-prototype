import { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find((i) => i.id === action.item.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.item.id ? { ...i, qty: i.qty + action.item.qty } : i
          ),
        };
      }
      return { ...state, items: [...state.items, action.item] };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };
    case "UPDATE_QTY":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, qty: Math.max(1, action.qty) } : i
        ),
      };
    case "CLEAR":
      return { ...state, items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const total = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  return (
    <CartContext.Provider value={{ items: state.items, total, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
