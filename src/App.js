import React from 'react'

import { styledProvider } from '@material-ui/styles'
import CssBaseLine  from '@material-ui/core/CssBaseline'
import GlobalStyle from './commos/styles/global-styles'

function App() {
  return (
    <styledProvider>
      <CssBaseLine />
      <GlobalStyle />
      <div >
      teste
     </div>
    </styledProvider>
    
  );
}

export default App;
