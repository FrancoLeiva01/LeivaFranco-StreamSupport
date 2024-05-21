import { create } from "zustand";

const useStore = create((set) => ({
  product: [],
  productsCart: [],
  searchTerm: "",
  setProduct: (state) => set({ product: state }),
  setProductToCart: (productToCart) => {
    set((state) => {
      const existingProductIndex = state.productsCart.findIndex(
        (product) => product.product_id === productToCart.product_id
      );
      if (existingProductIndex !== -1) {
        const updatedProducts = [...state.productsCart];
        updatedProducts[existingProductIndex].quantity += 1;
        return { productsCart: updatedProducts };
      } else {
        return {
          productsCart: [
            ...state.productsCart,
            { ...productToCart, quantity: 1 },
          ],
        };
      }
    });
  },
  setSearchTerm: (searchTerm) => set({ searchTerm }),
}));

export { useStore };
