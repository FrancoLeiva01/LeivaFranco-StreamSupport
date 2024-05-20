import { create } from "zustand";

const useStore = create((set) => ({
  product: [],
  productsCart: [],
  setProduct: (state) => set({ product: state }),
  setProductToCart: (productToCart) => {
    set((state) => ({
      productsCart: [...state.productsCart, productToCart],
    }));
  },
}));

export { useStore };
