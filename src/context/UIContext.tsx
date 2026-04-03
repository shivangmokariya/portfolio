"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

interface UIContextType {
  isExpanded: boolean;
  isSpinning: boolean;
  toggleExpanded: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  const toggleExpanded = useCallback(() => {
    setIsExpanded((prev) => !prev);
    setIsSpinning(true);
  }, []);

  // Stop spinning after transition duration (700ms)
  useEffect(() => {
    if (isSpinning) {
      const timer = setTimeout(() => {
        setIsSpinning(false);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [isSpinning]);

  return (
    <UIContext.Provider value={{ isExpanded, isSpinning, toggleExpanded }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
};
