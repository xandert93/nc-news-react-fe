import { createTheme } from './config'

export const themes = {
  light: createTheme({ isDarkMode: false }),
  dark: createTheme({ isDarkMode: true }),
}
