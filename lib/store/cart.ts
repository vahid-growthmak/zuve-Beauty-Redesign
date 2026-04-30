"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  slug: string;
  name: string;
  shape?: string;
  image: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  add: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  remove: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clear: () => void;
  subtotal: () => number;
  count: () => number;
};

export const FREE_SHIPPING_THRESHOLD = 1500;

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set((s) => ({ isOpen: !s.isOpen })),
      add: (item) => {
        const qty = item.quantity ?? 1;
        const items = get().items;
        const existing = items.find((i) => i.id === item.id);
        if (existing) {
          set({
            items: items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + qty } : i,
            ),
            isOpen: true,
          });
        } else {
          set({
            items: [...items, { ...item, quantity: qty }],
            isOpen: true,
          });
        }
      },
      remove: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
      setQuantity: (id, quantity) =>
        set({
          items:
            quantity <= 0
              ? get().items.filter((i) => i.id !== id)
              : get().items.map((i) =>
                  i.id === id ? { ...i, quantity } : i,
                ),
        }),
      clear: () => set({ items: [] }),
      subtotal: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      count: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    {
      name: "zuve-cart",
      partialize: (s) => ({ items: s.items }),
    },
  ),
);
