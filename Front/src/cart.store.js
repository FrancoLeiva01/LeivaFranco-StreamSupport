import { create } from "zustand";

const useCart = create((set) => ({
  cart: [],
  add: (product) =>
    set((state) =>
      state.cart.find((p) => p.id === product.id)
        ? {
            cart: state.cart.map((p) =>
              p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
            ),
          }
        : { cart: [...state.cart, { ...product, quantity: 1 }] }
    ),
  decreaseOne: (productId) =>
    set((state) => ({
      cart: state.cart
        .map((p) =>
          p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0),
    })),
  remove: (productId) =>
    set((state) => ({
      cart: state.cart.filter((p) => p.id !== productId),
    })),
}));

export default useCart;
