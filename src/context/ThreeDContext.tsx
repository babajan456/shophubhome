import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThreeDContextType {
  threeDEnabled: boolean;
  toggleThreeD: () => void;
}

const ThreeDContext = createContext<ThreeDContextType | undefined>(undefined);

export const ThreeDProvider = ({ children }: { children: ReactNode }) => {
  const [threeDEnabled, setThreeDEnabled] = useState(() => {
    const saved = localStorage.getItem('threeDEnabled');
    return saved ? JSON.parse(saved) : true;
  });

  const toggleThreeD = () => {
    setThreeDEnabled(!threeDEnabled);
  };

  useEffect(() => {
    localStorage.setItem('threeDEnabled', JSON.stringify(threeDEnabled));
  }, [threeDEnabled]);

  return (
    <ThreeDContext.Provider value={{ threeDEnabled, toggleThreeD }}>
      {children}
    </ThreeDContext.Provider>
  );
};

export const useThreeD = () => {
  const context = useContext(ThreeDContext);
  if (context === undefined) {
    throw new Error('useThreeD must be used within a ThreeDProvider');
  }
  return context;
};