import {Box,styled, Typography, Stack} from "@mui/material"
import python from '../static/python.png'
import cpp from '../static/cpp.png'
import java from '../static/java.png'
import go from '../static/golang.png'
import react from '../static/react2.png'


const Suggestions = () => {
    const StyleCard = styled(Box)(({theme})=>({
        display:'flex',
        justifyContent:'center',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        
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
        <Stack Container 
            direction={'row'} 
            justifyContent='center'
            alignItems={'center'}
            mt={4} 
            spacing={4} 
            ml={3} 
            sx={{overflow:'auto'}}>
          <CardBox>
            <StyleCard sx={{backgroundImage:`url(${python})`}}></StyleCard>
            <StyledTypography>Python</StyledTypography>
          </CardBox>
          <CardBox>
            <StyleCard sx={{backgroundImage:`url(${cpp})`}}></StyleCard>
            <StyledTypography>C++</StyledTypography>
          </CardBox>
          <CardBox>
            <StyleCard sx={{backgroundImage:`url(${java})`}}></StyleCard>
            <StyledTypography>java</StyledTypography>
          </CardBox>
          <CardBox>
            <StyleCard sx={{backgroundImage:`url(${go})`}}></StyleCard>
            <StyledTypography>go lang</StyledTypography>
          </CardBox>
          <CardBox>
            <StyleCard sx={{backgroundImage:`url(${react})`}}></StyleCard>
            <StyledTypography>react</StyledTypography>
          </CardBox>
         
        </Stack>
      )
}

export default Suggestions