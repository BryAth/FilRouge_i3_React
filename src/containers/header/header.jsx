import {AppBar,IconButton,Toolbar} from '@mui/material';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = ({onOpenMenu}) => {
    return (
        <header> 
            <AppBar position="static">
            
            <Toolbar>
       
        <IconButton
        onClick={() => onOpenMenu()}
        size = "large"
        edge = "start"
        color= "inherit"
        aria-label="menu"
        sx = {{ mr: 2}}>
       
        <MenuTwoToneIcon />
        </IconButton>
        <Typography component='div'
        variant='h5' >Task list</Typography>
        <Button color="inherit">Login</Button>
            </Toolbar>
            

            </AppBar>
        </header>
    )
}

export default Header