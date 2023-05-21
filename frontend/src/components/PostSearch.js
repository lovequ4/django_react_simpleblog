import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {TextField,Grid} from "@mui/material";
import axios from "axios";
import PostsCard from "./Posts/PostsCard";
import  { useState,useEffect } from 'react'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  maxHeight: 600,
  minHeight: 600,
  overflow: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PostSearch = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [postSearch,setPostSearch] = useState([])
  const [lookup,setLookup] = useState()

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blogs`)
        setPostSearch(res.data)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])

  return (
    <>
      <TextField 
       sx={{display:{xs:'none',md:'flex'}}} 
       color='warning' 
       label="Search" 
       variant="standard" 
       onClick={()=>setOpen(true)}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
        <TextField 
          sx={{display:{xs:'none',md:'flex'}}} 
          color='warning' 
          label="Search" 
          variant="standard" 
          onChange={(e)=>setLookup(e.target.value)}
          />
          {postSearch.filter((search)=>search.title.toLowerCase().includes(lookup)).map((search)=>(
             lookup.length > 0 ?
             <Grid item md={6} xs={6}>
             <PostsCard title={search.title} excerpt={search.excerpt} image={search.image}  blogherf={`/details/${search.slug}`} myDirection={'flex'}/>
             </Grid> 
             : " "
          ))}
      </Box>
      </Modal>
    </>
  )
}

export default PostSearch