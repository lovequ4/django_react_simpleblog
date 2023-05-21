import {Stack,Box, Container} from "@mui/material"
import Posts from "./Posts/Posts"
import Rightbar from "./Rightbar"
import Hero from "./Hero"


const Main = () => {
  return (
    <>
    <Hero/>
    <Container>
      <Stack direction={'row'} spacing={1} mt={3}>
          <Box flex={3}>
              <Posts/>
          </Box>
          <Box flex={1} display={{xs:'none',md:'block'}}>
          <Rightbar/>
          </Box>
          
      </Stack>
    </Container>
    </>
  )
}

export default Main