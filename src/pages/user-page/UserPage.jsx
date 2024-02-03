import { auth } from "../../firebase/firebase"
import Navbar from "../../components/navbar/Navbar"
import { Box } from "@chakra-ui/react"

export default function UserPage() {

    console.log(auth.currentUser)

    return (
        <Box p={3}>
            <Navbar />
        </Box>
    )
}