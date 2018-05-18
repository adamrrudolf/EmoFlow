import React from 'react';
import AppBar from 'material-ui/AppBar'
import Card from 'material-ui/Card'
import BottomNavigationExampleSimple from './BottomNavigation';


const AppContent = () => (
  <div> 
    <AppBar
  title="Title"
  />
  <Card />
  <BottomNavigationExampleSimple />
  </div>
);
console.log('test change ')
export default AppContent;