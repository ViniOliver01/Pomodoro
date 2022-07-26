import { ThemeProvider } from 'styled-components';
import { Button } from '../Components/Button/Button';

import { defaultTheme } from './../Styles/Themes/Default';
import { GlobalStyle } from './../Styles/Themes/Global';

export function Home(){
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant='primary'/>
      <Button variant='secondary'/>
      <Button variant='success'/>
      <Button variant='danger'/>
      <Button/>

      <GlobalStyle />
    </ThemeProvider>
  );
}