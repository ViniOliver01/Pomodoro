import { ThemeProvider } from 'styled-components'
import { Router } from '../Routes/Router'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from '../Styles/Themes/Default'
import { GlobalStyle } from '../Styles/Themes/Global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
