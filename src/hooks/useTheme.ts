import React from "react";
import { ThemeContext } from "../ThemeProvider";

const useTheme = () => {
    const context = React.useContext(ThemeContext);

    if (context === null) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
}

export { useTheme };
