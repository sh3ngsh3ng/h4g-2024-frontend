import { Box, Center, Container, Text } from "@chakra-ui/react";
import "./Carousel.css";
import { carouselColor, paleRed } from "../constants/color";

export default function Carousel() {
  return (
    <Center>
      <Box
        bg={carouselColor}
        h="100%" // height 100% of parent
        borderRadius="lg"
        width="90%"
        p={10}
        mt={5}
      >
        <Box h="10%" >
          <img src="/images/logo.png"/>
        </Box>
        <Box mt={5}>
          <Text fontSize="32px" fontWeight="700" color={paleRed}>
            Come find your
          </Text>
          <Text fontSize="32px" fontWeight="700" color={paleRed}>
            VOLUNASIA with us!
          </Text>
        </Box>
        <Box mt={5} mb={10}>
          <Text fontSize="24px" fontWeight="400" color={paleRed}>
            VOLUNASIA is that moment when you forget
          </Text>
          <Text fontSize="24px" fontWeight="400" color={paleRed}>
            you're volunteering to help change lives,
          </Text>
          <Text fontSize="24px" fontWeight="400" color={paleRed}>
            because it's changing yours
          </Text>
        </Box>
        <Box
          bg="rgba(0, 0, 0, 0.2)"
          borderRadius="lg"
          padding={3}
          color={paleRed}
        >
          <Text>
            First All of all with big heart I want to say you THANK YOU for
            giving an opportunity to volunteer and participate in sports event
            by which we were able to make some one happy and full of life. It
            was so nice to see so many happy faces together.{" "}
          </Text>
          <Text fontWeight="700" fontSize="24px">
            Marshal Patil
          </Text>
        </Box>
      </Box>
    </Center>
  );
}
