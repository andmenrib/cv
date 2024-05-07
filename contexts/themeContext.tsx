import React, { Dispatch, SetStateAction, useState } from "react";

import { Theme } from "../interfaces/index";

export const ThemeContext = React.createContext<
  [Theme, Dispatch<SetStateAction<Theme>>]
>(["dark", (e) => {}]);

export function ThemeProvider({ children }: { children: any }) {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}
