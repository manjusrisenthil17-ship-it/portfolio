import { useTheme } from "next-themes";

export function useIsDarkMode() {
  const { theme, systemTheme } = useTheme();
  if (theme === "system") {
    return systemTheme === "dark";
  }
  return theme === "dark";
}
