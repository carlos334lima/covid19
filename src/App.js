import React from 'react'

import { styledProvider } from '@material-ui/styles'
import CssBaseLine  from '@material-ui/core/CssBaseline'
import GlobalStyle from './commos/styles/global-styles'
import Main from './container/main/index' 


function App() {
  return (
    <styledProvider injectFirt>
      <CssBaseLine />
      <GlobalStyle />
      <Main /> 
    </styledProvider>
    
  );
}

export default App;
