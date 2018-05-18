import React, { Component } from 'react';
import AppContent from './AppContent';
import getTheme from './Theme';
import { MuiThemeProvider } from 'material-ui/styles';



class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={getTheme()}>
        <AppContent />
      </MuiThemeProvider>
    );
  }
}

export default App;
