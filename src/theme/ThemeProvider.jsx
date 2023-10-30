import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material'
import { themes } from './themes'

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={themes.light}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
