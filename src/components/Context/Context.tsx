import { FC, ReactNode, createContext, useCallback, useEffect, useState } from 'react';

type Mode = 'light' | 'dark';

interface MainContextValue {
  mode: Mode;
  toggleMode: (mode: Mode) => void;
}

const contextDefaultValue: MainContextValue = {
  mode: 'light',
  toggleMode: () => undefined
}

export const MainContext = createContext<MainContextValue>({});

interface MainProvider {
  children: ReactNode;
}

export const MainProvider: FC<MainProvider> = ({ children }) => {
  const [contextValue, setContextValue] = useState<MainContextValue>(contextDefaultValue);

  useEffect(() => {
    document.documentElement.className = contextValue.mode;
  }, [contextValue.mode]);

  const toggleMode = useCallback((mode: Mode) => {
    setContextValue((prevState) => ({
      ...prevState,
      mode,
    }));
  }, []);

  return (
    <MainContext.Provider
      value={{
        ...contextValue,
        toggleMode,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
