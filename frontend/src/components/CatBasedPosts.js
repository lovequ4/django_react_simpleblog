import {Typography,Grid, Pagination, Stack, Container} from '@mui/material'
import PostsCard from './Posts/PostsCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const CatBasePosts = () => {
  let {id} = useParams()
  const [blog,setBlog] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/categoryBaseBlogs/${id}`)
        setBlog(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[id])



  return (
    <Container>
        <Typography variant='h4' align='center'>{" "}Categories page{" "}</Typography>
        <Grid
          container
          columnSpacing={{ xs: 0, sm: 1, md: 1 }}
          direction={'column'}
        >
          {blog.map((post) =>(
            <Grid item xs>
              <PostsCard title={post.title} excerpt={post.excerpt}  image={`${process.env.REACT_APP_API_URL}${post.image}`} blogherf={`/details/${post.slug}`} myDirection={'flex'}/>
            </Grid>
          ))}
          
        </Grid>
       
        
        <Stack spacing={2} mt={3} mb={3} justifyContent="center" alignItems="center">
          <Pagination count={10} color='warning'/>
        </Stack>
        
    </Container>
  )
}

export default CatBasePosts