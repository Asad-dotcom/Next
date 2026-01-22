"use client";

import { useEffect, useState } from "react";
import { products as initialProducts } from "./rawdata";

const STORAGE_KEY = "products";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setProducts(JSON.parse(stored));
      } else {
        setProducts(initialProducts);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProducts));
      }
    } catch (error) {
      console.error("Failed to load products from localStorage", error);
      setProducts(initialProducts);
    } finally {
      setLoading(false);
    }
  }, []);

  const save = (next) => {
    setProducts(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  };

  const addProduct = (product) => {
    const maxId = products.length ? Math.max(...products.map((p) => p.id)) : 0;
    const newProduct = { ...product, id: maxId + 1 };
    save([...products, newProduct]);
  };

  const updateProduct = (id, updates) => {
    const next = products.map((p) => (p.id === id ? { ...p, ...updates } : p));
    save(next);
  };

  const deleteProduct = (id) => {
    const next = products.filter((p) => p.id !== id);
    save(next);
  };

  const getProductById = (id) => products.find((p) => p.id === id) || null;

  return { products, loading, addProduct, updateProduct, deleteProduct, getProductById };
}
