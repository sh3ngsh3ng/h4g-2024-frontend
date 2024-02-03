import { Box, Container, Text } from '@chakra-ui/react'
import './Carousel.css'


export default function Carousel() {

    return (
        <Container
            bg='#BA333A'
            h="100%" // height 100% of parent
            borderRadius="lg"
            p={4}
        >
            <Box h="10%" display="flex" justifyContent="flex-start"> Logo </Box>
            <Box >
                <Text fontSize="48px" fontWeight="700" color="white">Come find your VOLUNASIA with us!</Text>
            </Box>
            <Box paddingTop={5} paddingBottom={10}>
                <Text fontSize="32px" fontWeight="400" color="white">VOLUNASIA is that moment when you forget you're volunteering to help change lives, because it's changing yours</Text>
            </Box>
            <Box bg="rgba(0, 0, 0, 0.2)" h="20%" w="100%" borderRadius="lg" padding={3} color="white">
                <Text>First All of all with big heart I want to say you THANK YOU for giving an opportunity to volunteer and participate in sports event by which we were able to make some one happy and full of life. It was so nice to see so many happy faces together. </Text>
                <Text fontWeight="700" fontSize="24px" lineHeight="30.17px">Marshal Patil</Text>
            </Box>
        </Container>
    )
}