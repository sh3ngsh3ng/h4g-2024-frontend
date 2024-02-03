import { auth } from "../../firebase/firebase"
import Navbar from "../../components/navbar/Navbar"
import { Box } from "@chakra-ui/react"

export default function UserPage() {

    // Retrieve data from backend 
    // 1) Volunteering events
    // 2) User data - experience, volunteer hours, name, etc


    return (
        <Box p={3}>
            <Navbar />
        </Box>
    )
}