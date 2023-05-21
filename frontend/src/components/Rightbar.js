import {Box,Typography,CardMedia,Card,TextField, IconButton} from '@mui/material'
import robot from '../static/robot.jpg'
import {Send as SendIcon} from '@mui/icons-material'

const Rightbar = () => {
  return (
    <Box sx={{padding:2}}>
      <Typography variant='h5' align='center' mt={5}>
        HEY I'M  Rightbar
      </Typography>
      <CardMedia 
          component={'img'} 
          height='300px' 
          image={robot} alt="image"
          sx={{width:'400px',cursor:'pointer',
          "&hover":{
          opacity:0.8,
          boxSizing:'border-box',
          zIndex:1,
          transition:`all 0.50s ease`
          }}}></CardMedia>
        <Typography align='left' variant='body1'>
          I love to learn more knowledge
        </Typography>
        <Typography>
          Don't forget to Subscribe !  <br/>
          <a href='#'>Read More</a>
        </Typography>
        <Card sx={{height:'200px',marginTop:2}}>
          <Typography align="center" variant="body1">
            Ads Here
          </Typography>
        </Card>
        <Typography align='center' color='white' bgcolor='tomato' mt={2}>Subscribe via email</Typography>
        <Box sx={{pl:10}}>
          <TextField label='Your Email here' variant="standard" color="warning"></TextField>
          <IconButton>
            <SendIcon sx={{color:'tomato'}}/>
          </IconButton>
        </Box>
    </Box>
  )
}

export default Rightbar