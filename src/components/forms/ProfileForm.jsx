import {
    Divider,
    Heading,
    Box,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Select,
    Flex,
    Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";

export const ProfileForm = () => {
    const [user, setUser] = useState({
        name: "",
        date: "",
        gender: "",
        phone: "",
        emergency: "",
        occupation: "",
        school: "",
        status: "",
        canDrive: false,
        ownVehicle: false,
    })

    const handleInputChange = (e) => {
        setUser({
            ...user,
            name: e.target.value,
            date: e.target.value,
            gender: e.target.value,
            phone: e.target.value,
            emergency: e.target.value,
            occupation: e.target.value,
            school: e.target.value,
            status: e.target.value,
            canDrive: e.target.checked,
            ownVehicle: e.target.checked,
        })
    }


    return (
        <Box borderWidth="2px" borderColor="blue" borderRadius="lg" width="50%">
            <Heading size="md" padding="10px">
                Personal Information
            </Heading>
            <div style={{ border: "0.5px solid rgba(128, 128, 128, 0.5)", width: "100%", margin: "0px" }}></div>
            <FormControl padding={3}>
                <FormLabel>
                    Full Name
                </FormLabel>
                <Input type="text" value={user.name} onChange={handleInputChange} background="gray.200"/>
                <FormHelperText>
                    As in NRIC/FIN/Passport 
                </FormHelperText>   
                <Flex direction="row" width="full" marginTop={5}>
                    <Box width="50%" paddingRight={2}>
                        <FormLabel>
                            Date of Birth
                        </FormLabel>
                        <Input type="date" background="gray.200" value={user.date} onChange={handleInputChange} />
                    </Box>
                    <Box width="50%" paddingLeft={2}>
                        <FormLabel>
                            Gender 
                        </FormLabel>
                        <Select placeholder="Select option" background="gray.200" value={user.gender} onChange={handleInputChange}>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </Select>
                    </Box>
                </Flex>
                <Flex direction="row" width="full" marginTop={5}>
                    <Box width="50%" paddingRight={2}>
                        <FormLabel>
                            Phone Number
                        </FormLabel>
                        <Input type="tel" background="gray.200"  value={user.phone} onChange={handleInputChange}/>
                    </Box>
                    <Box width="50%" paddingLeft={2}>
                        <FormLabel>
                            Emergency Contact
                        </FormLabel>
                        <Input type="tel" background="gray.200"  value={user.emergency} onChange={handleInputChange}/>
                    </Box>
                </Flex>
                <Flex direction="row" width="full" marginTop={5}>
                    <Box width="50%" paddingRight={2}>
                        <FormLabel>
                            Occupation
                        </FormLabel>
                        <Input type="text" background="gray.200" value={user.occupation} onChange={handleInputChange}/>
                    </Box>
                    <Box width="50%" paddingLeft={2}>
                        <FormLabel>
                            School(if applicable)
                        </FormLabel>
                        <Input type="text" background="gray.200"  value={user.school} onChange={handleInputChange}/>
                    </Box>
                </Flex>
                <FormLabel>
                    Immigration Status
                </FormLabel>
                <Select placeholder="Select option" background="gray.200" value={user.status} onChange={handleInputChange}>
                    <option>Citizen</option>
                    <option>Permanent Resident</option>
                    <option>Foreigner</option>
                </Select>
                <Checkbox padding={3} colorScheme="yellow" value={user.canDrive} onChange={handleInputChange}>
                    I can drive
                </Checkbox>
                <Checkbox padding={3} colorScheme="yellow"  value={user.ownVehicle} onChange={handleInputChange}>
                    I own a vehicle
                </Checkbox>
            </FormControl>
        </Box>
    )
}

export default ProfileForm;