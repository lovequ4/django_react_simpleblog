import {Box,styled, Typography, Stack, Link} from "@mui/material"
import { useEffect, useState } from 'react'
import axios from 'axios'

const CategoryList=()=> {

  const [category,setCategory] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/category`)
        setCategory(res.data)
        console.log(res.data)
        
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])


  const StyleCard = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'center',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover',
    borderRadius:'100%',
    overflow:'hidden',
    width:'100px',
    cursor:'pointer',
    [theme.breakpoints.up('md')]:{
        height:100,
    },
    [theme.breakpoints.down('md')]:{
        height:100,
    },
    "&:hover":{
        opacity:0.8,
        boxSizing:"borderBox",
        zIndex:1,
        transition:`all 0.45s ease`,
    },
}));

  const StyledTypography = styled(Typography)({
    textAlign:'center',
    color:"black",
    fontSize:20,
  })

  const CardBox = styled(Box) ({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
  })

  return (
    <Stack Container direction={'row'} mt={4} spacing={4} ml={3} sx={{overflow:'auto'}}>
      {category.map(categorys =>(
        <Link href={`category/${categorys.id}`} sx={{textDirection:'none'}}>
            <CardBox>
              <StyleCard sx={{backgroundImage:`url(${categorys.image})`}}></StyleCard>
              <StyledTypography>{categorys.name}</StyledTypography>
            </CardBox>
        </Link>
      ))}
    </Stack>
  )
}

export default CategoryList