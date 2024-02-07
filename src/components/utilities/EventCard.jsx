import {
    Box,
    Heading,
    SimpleGrid,
    Text,
    Flex,
    Button,
    Stack,
    Tag,
    Image,
    Card,
    CardHeader,
    CardBody
} from "@chakra-ui/react";
import stock from "../../static/Images/event-image/stock.png";
import Logo from "../../static/Images/big-at-heart-logo/logo.png";

export const EventCard = ({ data, type, action }) => {
    return (
        <>
            {/*<Card maxHeight={350}>
                <CardHeader>
                    <Flex>
                        <Box paddingRight="40px">
                            <Heading as='h1' size='md'>
                                {data.name}
                            </Heading>
                            <Text>
                                by {data.organization}
                            </Text>
                        </Box>
                        <Box padding="10px">
                            {
                                type == "admin" ? <Button colorScheme="red" onClick={action}>Edit</Button> : <Button colorScheme="red" onClick={action}>Join</Button>
                            }

                        </Box>
                    </Flex>
                    <Stack direction="row">
                    {data.skills.map((skill) => (
                        <Tag color="red" bgColor="pink.100" borderRadius="full">
                            {skill}
                        </Tag>
                    ))}
                    </Stack>
                </CardHeader>
                <CardBody>
                    <Image src={stock} alt="stock" />
                    <Text>
                        {data.month} {data.day}
                    </Text>
                </CardBody>
            </Card>*/}
            <Box maxW="xs" height="250px" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Flex>
                    <Box paddingRight="40px">
                        <Heading as='h1' size='md'>
                            {data.name}
                        </Heading>
                        <Text>
                            by {data.organization}
                        </Text>
                    </Box>
                    <Box padding="10px">
                        {
                            type == "admin" ? <Button colorScheme="red" onClick={action}>Edit</Button> : <Button colorScheme="red" onClick={action}>Join</Button>
                        }

                    </Box>
                </Flex>
                <Stack direction="row">
                    {data.skills.map((skill) => (
                        <Tag color="red" bgColor="pink.100" borderRadius="full">
                            {skill}
                        </Tag>
                    ))}
                </Stack>
                <div style={{width: "150px:",height: "150px", backgroundImage: `url(${stock})`}}>
                    
                </div>
                <Text>
                    {data.month} {data.day}
                </Text>
                    </Box>
        </>
    )
}

export default EventCard;