import { Container,Typography,Box,CardMedia, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import CategoryList from './CategoryList'
import { DoubleArrow } from '@mui/icons-material'
import Suggestions from './Suggestions'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const DetailsPage = () => {
  
  const [blogDetails,setBlogdetails] = useState([])
  const [postIngredients, setPostIngredients] = useState("")
  let {slug} = useParams() 
  
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blogs/${slug}`)
        setBlogdetails(res.data)
        setPostIngredients(res.data.ingredients)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[slug])

  
  
  return (
    <Container>
      <CategoryList/>
     
      <Typography variant="h3" align="center" mt={4}>
        {blogDetails.title}
      </Typography>

      <Typography variant="body2" align="center" color={"GrayText"} p={4}>
        test demo blog
      </Typography>
  
      <Typography variant="body1" align="center" m={2}>
        {blogDetails.content}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          sx={{ height: "500px", width: "500px" }}
          component="img"
          image={blogDetails.image}
          alt="burger"
        />
      </Box>

      <Typography variant="body1" align="center" m={2}>
        {blogDetails.contentTwo}
      </Typography>

      <List>
        {/* {blogDetails.ingredients} */}
        {postIngredients.split(',').map((ingredients)=>
        (
          <ListItemButton>
            <ListItemIcon>
              <DoubleArrow/>
            </ListItemIcon>
            <ListItemText primary={ingredients}/>
          </ListItemButton>
        ))}
       
      </List>
      
      
      
      <Typography variant="h5" color={"white"} bgcolor={"black"} align="center">
        You may also like
      </Typography>

      <Suggestions/>
    </Container>
  )
}

export default DetailsPage