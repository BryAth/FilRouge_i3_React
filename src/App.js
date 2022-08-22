
import { Drawer } from '@mui/material';
import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import Header from './containers/header/header';
import Navbar from './containers/nav-bar/nav-bar';
import {routes} from './route'


function App() {
    
    const [visibleMenu,setMenuVisible] = useState(false);
    
    const element = useRoutes(routes)
    
    return (
    <> 
    <Header 
        onOpenMenu={() => setMenuVisible (true)} />
    <Drawer
        anchor='left'
        open={visibleMenu}
        onClose={() => setMenuVisible(false)}>


    <Navbar/>

        </Drawer>

    <main className="App">

        {element}

    </main>
    </>
   
); 
}

export default App;
