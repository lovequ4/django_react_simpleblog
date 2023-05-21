import React, { useState } from 'react'
import {AppBar,styled,Toolbar,Box,Typography,TextField, Drawer,List, ListItem, ListItemButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import PostSearch from './PostSearch'

const Navbar = () =>{
    const StyledToolbar= styled(Toolbar)({
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    })

    const MenuBox = styled(Box) ({
        display:'flex',
        gap:30,
        cursor:'pointer'
    })

    const MenuItems = [
        {Name:"Home",Link:'#'},
        {Name:"Recipes",Link:'#'},
        {Name:"About Us",Link:'#'},
        {Name:"Subscribe",Link:'#'},
    ]

    const [openMenu,setOpenMenu] = useState(false)

    return (
    <>                                   
                                {/* // elevation設定陰影  */}
    <AppBar color='default' position='sticky' elevation={0}> 
        <StyledToolbar>
            <Box flex={{xs:25,md:1}}>
                <Typography 
                    variant='h4' 
                    color={"tomato"} 
                    sx={{textAlign:{xs:'center',md:'left'}}}>
                        Codingstrade
                </Typography>
            </Box>
            {/*  sx 設定延伸  xs最小畫面不顯示選單  flex={1}讓搜尋欄固定在右*/}
            <MenuBox flex={1} sx={{display:{xs:'none',md:'flex'}}}>
                {MenuItems.map((item)=>(
                    <Typography variant='body2'>
                        {item.Name}
                    </Typography>
                ))}
            </MenuBox>

            

            <Box flex={1}>
                {/*  sx 設定search延伸  xs最小畫面不顯示搜尋欄 */}
                {/* <TextField sx={{display:{xs:'none',md:'flex'}}} color='warning' label="Search" variant="standard" />      */}
                <MenuIcon sx={{display:{xs:'flex',md:'none'},cursor:'pointer'}} 
                          onClick={()=>setOpenMenu(!openMenu)}
                />
                <PostSearch/>
            </Box>
        </StyledToolbar>
        <Drawer
            anchor={'top'}
            open={openMenu}
            onClose={()=>setOpenMenu(!openMenu)}
        >
            <List>
                <ListItem>
                    {MenuItems.map((item)=>(
                        <ListItemButton>{item.Name}</ListItemButton>
                    ))}
                </ListItem>
            </List>
            
            <TextField 
            sx={{display:{xs:'flex',md:'none'}}} 
            color='warning' 
            label="Search" 
            variant="outlined" />    
        </Drawer>
      
    </AppBar>
        <Box sx={{display:'flex',justifyContent:'center',flexDirection:{xs:'column',md:'row'},padding:1}}>
            <Typography align='center' variant='h5' mr={{xs:0,md:1}}>
                simple blog
            </Typography>
            <Typography align='center' variant='h5' color={'tomato'} sx={{fontFamily:'Courgette, cursive'}}>
                simple blog
            </Typography>
        </Box>
   </> 
 )
}

export default Navbar