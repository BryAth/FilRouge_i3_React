import {Drawer,Avatar,Stack, Divider} from '@mui/material'
import faceAvatar from './depositphotos_23493623-stock-photo-handsome-young-man.jpg'
import Style from './nav-bar.module.css'


const Navbar = () => {
    return(

        <nav className={Style.nav}>           


            <Stack 
            direction="column"
            divider={<Divider orientation='horizontal'/>}
            spacing={2}> 
            <Avatar
            // sx={{width : 180 , height : 180, alignSelf:"center"}}
            className={Style.logo}
            src={faceAvatar}
            /> 
            
            <p>Toto</p> 
            <p>a</p>
            <p>z</p>
            <p>e</p>
            <p>r</p>
            <p>t</p>
            <p>y</p>
                
            
            </Stack>
            </nav>

        
    )
}

export default Navbar