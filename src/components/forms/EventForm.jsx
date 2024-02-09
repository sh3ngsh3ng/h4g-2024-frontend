import "./EventForm.css"
import 'react-quill/dist/quill.snow.css';
import { 
    Box,
    Checkbox, 
    CheckboxGroup,
    FormControl, 
    FormLabel, 
    HStack, 
    Heading, 
    Input, 
    Radio, 
    RadioGroup, 
    VStack,
    Flex
} from "@chakra-ui/react"
import { useSelector, useDispatch } from "react-redux";
import { adminAddImage, clearForm, onEditingForm } from "../actions/adminActions";
import { useDropzone } from 'react-dropzone';
import { useCallback } from "react";
import ReactQuill from "react-quill";
import { INTERESTS_LIST, SKILLS_LIST } from "../constants/admin";
import { Form } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import CloudinaryUploadWidget from "../utilities/CloudinaryUploadWidget";

export default function EventsForm({ type, data }) {
    const dispatch = useDispatch()
    var formToEdit = useSelector(state => state.adminEvents.formToEdit)

    // const onDrop = useCallback(acceptedFiles => {
    //     if (acceptedFiles.length === 0) {
    //         alert("Only images")
    //     } else {
    //         console.log("display image: ", acceptedFiles)
    //         acceptedFiles.forEach(file => {
    //             // Access file object properties like name, size, etc.
    //             console.log("File name:", file.name)
    //             console.log("File size:", file.size)
    //             console.log("File type:", file.type)
    //             reader.readAsDataURL(file) // Read file as a data URL
    //         })
    //     }
    // }, [])

    // const reader = new FileReader()
    // reader.onload = () => {
    //     // Use reader.result to access file content
    //     const fileContent = reader.result
    //     console.log("File content:", fileContent)
    //     dispatch(adminAddImage(fileContent))
    // }

    // const accept = {
    //     'image/jpeg': ['.jpeg', '.png']
    // }

    // const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept })

    // const files = acceptedFiles.map(file => (
    //     <li key={file.name}>
    //         {file.name} - {file.size} bytes
    //     </li>
    // )); // temp to show uploaded images

    const onInputChange = (event) => {
        dispatch(onEditingForm({ field: event.target.name, value: event.target.value }))
    }

    const onDescriptionChange = (content) => {
        dispatch(onEditingForm({ field: "description", value: content }))
    }

    const onCheckboxChange = (name, skill) => {
        let currentArr = [...formToEdit[name]]
        let updatedArr;
        if (currentArr.includes(skill)) {
            updatedArr = currentArr.filter(item => item != skill)
        } else {
            currentArr.push(skill)
            updatedArr = currentArr
        }
        dispatch(onEditingForm({ field: name, value: updatedArr }))
    }

    return (
        <>
            <CloudinaryUploadWidget />
                {/* <AdvancedImage
                    style={{ maxWidth: "100%" }}
                    cldImg={ }
                    plugins={[response(), placeholder()]}
                /> */}
            <Box borderWidth="3px" borderRadius="lg" width="55%">
                <Heading size="md" padding="10px">
                    Event Details
                </Heading>
            <div style={{ border: "0.5px solid rgba(128, 128, 128, 0.5)", width: "100%", margin: "0px" }}></div>
            <FormControl padding={3}>
                <Flex direction="row" width="full" marginTop={5}>
                    <Box width="50%" paddingRight={2}>
                        <Input
                            placeholder="Event Name"
                            name="name"
                            value={formToEdit?.name}
                            onChange={onInputChange}
                            background="gray.200"
                        />
                    </Box>
                    <Box width="50%" paddingLeft={2}>
                        <Input
                            placeholder="Organization"
                            name="organization"
                            value={formToEdit?.organization}
                            onChange={onInputChange}
                            background="gray.200"
                        />
                    </Box>
                </Flex>
                <Flex direction="row" width="full" marginTop={5}>
                    <Box width="50%" paddingRight={2}>
                        <FormLabel>Start Date</FormLabel>
                        <Input
                            size="md"
                            type="date"
                            name="startDate"
                            value={formToEdit?.startDate}
                            onChange={onInputChange}
                            background="gray.200"
                        />
                    </Box>
                    <Box width="50%" paddingLeft={2}>
                        <FormLabel>End Date</FormLabel>
                        <Input
                            type="date"
                            name="endDate"
                            value={formToEdit?.endDate}
                            onChange={onInputChange}
                            background="gray.200"
                        />
                    </Box>
                </Flex>
                </FormControl>
            </Box>
            <Box borderWidth="3px" borderRadius="lg" width="15%" marginTop={5}>
                <FormControl padding={3}>
                    <CheckboxGroup name="skills">
                        <h3>Skills</h3>
                        <div style={{ border: "0.5px solid rgba(128, 128, 128, 0.5)", width: "100%", margin: "0px" }}></div>
                        <VStack alignItems="flex-start">
                            {
                                SKILLS_LIST.map((skill) => {
                                    return (
                                        <Checkbox name="skills" onChange={(e) => onCheckboxChange(e.target.name, skill)} key={skill} isChecked={formToEdit?.skills.includes(skill)}>{skill}</Checkbox>
                                    )
                                })
                            }
                            <HStack>
                                <Checkbox></Checkbox><Input size="sm" placeholder="Type here and press Enter..." />
                            </HStack>
                        </VStack>
                    </CheckboxGroup>
                </FormControl>
            </Box>
            <Box borderWidth="3px" borderRadius="lg" width="15%" marginTop={5}>
                <FormControl padding={3}>

                    <CheckboxGroup name="interest">
                        <Heading>Interests</Heading>
                        <div style={{ border: "0.5px solid rgba(128, 128, 128, 0.5)", width: "100%", margin: "0px" }}></div>
                        <VStack alignItems="flex-start">
                            {
                                INTERESTS_LIST.map((interest) => {
                                    return (
                                        <Checkbox name="interest" key={interest} onChange={(e) => onCheckboxChange(e.target.name, interest)} isChecked={formToEdit?.interest.includes(interest)}>{interest}</Checkbox>
                                    )
                                })
                            }
                        </VStack>
                    </CheckboxGroup>
                </FormControl>
            </Box>
            <Box borderWidth="3px" borderRadius="lg" width="55%" marginTop={5}>
                <ReactQuill value={formToEdit?.description} onChange={text => onDescriptionChange(text)} />
            </Box>
            {/*<div {...getRootProps({ className: 'drop-zone' })}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>
            <ul>{files}</ul> */}
        </>
    )
}