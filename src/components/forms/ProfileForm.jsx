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
    CheckboxGroup,
    VStack,
    Button
} from "@chakra-ui/react";
import { useState } from "react";
import { INTERESTS_LIST, SKILLS_LIST } from "../constants/admin";

export const ProfileForm = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "",
        phoneNumber: "",
        emergencyContact: "",
        occupation: "",
        school: "",
        immigrationStatus: "",
        canDrive: false,
        ownVehicle: false,
    })

    const [skills, setSkills] = useState([])
    const [interest, setInterest] = useState([])
    const [editMode, setEditMode] = useState(false)

    const handleInputChange = (e) => {
        const { name, value, checked } = e.target
        if (name == "canDrive" || name == "ownVehicle") {
            setUser({
                ...user,
                [name]: checked
            })
        } else {
            setUser({
                ...user,
                [name]: value
            })
        }
    }

    const handleCheckBox = (e) => {
        const { name, checked, value } = e.target
        if (checked) {
            if (name === "skills") {
                setSkills([...skills, value])
            } else if (name === "interest") {
                setInterest([...interest, value])
            }
        } else {
            if (name === "skills") {
                setSkills(skills.filter((skill) => skill !== value))
            } else if (name === "interest") {
                setInterest(interest.filter((interest) => interest !== value))
            }
        }
    }


    return (
        <Box borderWidth="2px" borderColor="blue" borderRadius="lg" width="50%">
            <Heading size="md" padding="10px">
                Personal Information
            </Heading>
            <div style={{ border: "0.5px solid rgba(128, 128, 128, 0.5)", width: "100%", margin: "0px" }}></div>
            <FormControl padding={3} isDisabled={!editMode}>
                <Flex direction="row" width="full" marginTop={5}>
                    <Box width="50%" paddingRight={2}>
                        <FormLabel>
                            First Name
                        </FormLabel>
                        <Input type="tel" name="firstName" background="gray.200" value={user.firstName} onChange={handleInputChange} />
                    </Box>
                    <Box width="50%" paddingLeft={2}>
                        <FormLabel>
                            Last Name
                        </FormLabel>
                        <Input type="tel" name="lastName" background="gray.200" value={user.lastName} onChange={handleInputChange} />
                    </Box>
                </Flex>
                <FormHelperText>
                    As in NRIC/FIN/Passport
                </FormHelperText>
                <Flex direction="row" width="full" marginTop={5}>
                    <Box width="50%" paddingRight={2}>
                        <FormLabel>
                            Date of Birth
                        </FormLabel>
                        <Input type="date" name="dateOfBirth" background="gray.200" value={user.dateOfBirth} onChange={handleInputChange} />
                    </Box>
                    <Box width="50%" paddingLeft={2}>
                        <FormLabel>
                            Gender
                        </FormLabel>
                        <Select placeholder="Select option" name="gender" background="gray.200" value={user.gender} onChange={handleInputChange}>
                            <option>Male</option>
                            <option>Female</option>
                        </Select>
                    </Box>
                </Flex>
                <Flex direction="row" width="full" marginTop={5}>
                    <Box width="50%" paddingRight={2}>
                        <FormLabel>
                            Phone Number
                        </FormLabel>
                        <Input type="tel" name="phoneNumber" background="gray.200" value={user.phoneNumber} onChange={handleInputChange} />
                    </Box>
                    <Box width="50%" paddingLeft={2}>
                        <FormLabel>
                            Emergency Contact
                        </FormLabel>
                        <Input type="tel" name="emergencyContact" background="gray.200" value={user.emergencyContact} onChange={handleInputChange} />
                    </Box>
                </Flex>
                <Flex direction="row" width="full" marginTop={5}>
                    <Box width="50%" paddingRight={2}>
                        <FormLabel>
                            Occupation
                        </FormLabel>
                        <Input type="text" name="occupation" background="gray.200" value={user.occupation} onChange={handleInputChange} />
                    </Box>
                    <Box width="50%" paddingLeft={2}>
                        <FormLabel>
                            School(if applicable)
                        </FormLabel>
                        <Input type="text" name="school" background="gray.200" value={user.school} onChange={handleInputChange} />
                    </Box>
                </Flex>
                <FormLabel>
                    Immigration Status
                </FormLabel>
                <Select placeholder="Select option" name="immigrationStatus" background="gray.200" value={user.immigrationStatus} onChange={handleInputChange}>
                    <option>Citizen</option>
                    <option>Permanent Resident</option>
                    <option>Foreigner</option>
                </Select>
                <Checkbox padding={3} name="canDrive" colorScheme="yellow" value={user.canDrive} onChange={handleInputChange}>
                    I can drive
                </Checkbox>
                <Checkbox padding={3} name="ownVehicle" colorScheme="yellow" value={user.ownVehicle} onChange={handleInputChange}>
                    I own a vehicle
                </Checkbox>

            </FormControl>

            <FormControl isDisabled={!editMode}>
                <Heading size="md" padding="10px">
                    Interest
                </Heading>
                <div style={{ border: "0.5px solid rgba(128, 128, 128, 0.5)", width: "100%", margin: "0px" }}></div>
                <CheckboxGroup>
                    <VStack>
                        {
                            INTERESTS_LIST.map((interest) => {
                                return (
                                    <Checkbox name="interest" key={interest} value={interest} onChange={(e) => handleCheckBox(e)}>{interest}</Checkbox>
                                )
                            })
                        }
                    </VStack>
                </CheckboxGroup>
            </FormControl>

            <FormControl isDisabled={!editMode}>
                <Heading size="md" padding="10px">
                    Skills
                </Heading>
                <div style={{ border: "0.5px solid rgba(128, 128, 128, 0.5)", width: "100%", margin: "0px" }}></div>
                <CheckboxGroup>
                    <VStack>
                        {
                            SKILLS_LIST.map((skills) => {
                                return (
                                    <Checkbox name="skills" key={skills} value={skills} onChange={(e) => handleCheckBox(e)}>{skills}</Checkbox>
                                )
                            })
                        }
                    </VStack>
                </CheckboxGroup>
            </FormControl>
            {
                !editMode ? <Button onClick={() => setEditMode(true)} bg="red">Edit</Button> : <>
                    <Button onClick={() => console.log("call backedn")}>Save</Button>
                    <Button onClick={() => setEditMode(false)}>Cancel</Button>
                </>
            }

        </Box>
    )
}

export default ProfileForm;