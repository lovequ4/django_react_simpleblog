import {Container,Grid,Box,styled, Typography} from "@mui/material"
import AI from '../static/AI.png'
import fullstack from '../static/fullstack5.jpg'
import DSA from '../static/DSA2.jpg'
import resume from '../static/resume.jpg'
import CategoryList from "./CategoryList"

const Hero = () => {
    const StyleCard = styled(Box)(({theme})=>({
        display:'flex',
        justifyContent:'center',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
        backgroundSize:'cover',
        
        cursor:'pointer',
        [theme.breakpoints.up('md')]:{
            height:400,
        },
        [theme.breakpoints.down('md')]:{
            height:200,
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
        color:"white",
        background:'tomato',
        fontSize:20,
    })

    const StyledWrapper = styled(Box)(({theme})=> ({
        [theme.breakpoints.up('md')]:{
            paddingTop:"140%",
        },
        [theme.breakpoints.down('md')]:{
            paddingTop:"40%",
        },
    
        width:"80%",
    }));
    
  return (
    <Container>
        <Grid container direction={"row"} columnSpacing={2} rowSpacing={2}>
            <Grid item md={3} xs={6}>
                <StyleCard sx={{backgroundImage:`url(${AI})`}}>
                    <StyledWrapper>
                        <StyledTypography>Artificial Intelligence</StyledTypography>
                    </StyledWrapper>
                </StyleCard>
            </Grid>
            <Grid item md={3} xs={6}>
                <StyleCard sx={{backgroundImage:`url(${fullstack})`}}>
                <StyledWrapper>
                        <StyledTypography>Full stack</StyledTypography>
                    </StyledWrapper>
                </StyleCard>
            </Grid>
            <Grid item md={3} xs={6}>
                <StyleCard sx={{backgroundImage:`url(${DSA})`}}>
                <StyledWrapper>
                        <StyledTypography>Algorithms & DataStructures</StyledTypography>
                    </StyledWrapper>
                </StyleCard>
            </Grid>
            <Grid item md={3} xs={6}>
                <StyleCard sx={{backgroundImage:`url(${resume})`}}>
                <StyledWrapper>
                        <StyledTypography>About me</StyledTypography>
                    </StyledWrapper>
                </StyleCard>
            </Grid>
            
        </Grid>
        <CategoryList/>
    </Container>
  )
}

export default Hero