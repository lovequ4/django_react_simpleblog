import { Box, Container, Stack, Typography, styled } from '@mui/material'
import React from 'react'

const Footer = () => {
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
  return (
    <Box sx={{bgcolor:'tomato',height:'200px'}}>
        <Container>
            <Stack direction={'row'}>
                <MenuBox flex={1} sx={{display:{xs:'none',md:'flex'}}}>
                    {MenuItems.map((item)=>(
                        <Typography variant='body2' color={'white'}>{item.Name}</Typography>
                    ))}
                </MenuBox>
                <Box flex={1} color={"white"} mt={1}>
                        @2023 Learn Coding
                </Box>
            </Stack>
        </Container>
    </Box>
  )
}

export default Footer