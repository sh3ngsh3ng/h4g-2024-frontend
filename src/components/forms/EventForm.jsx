import "./EventForm.css"
import 'react-quill/dist/quill.snow.css';
import { Checkbox, CheckboxGroup, FormControl, HStack, Input, Radio, RadioGroup, VStack } from "@chakra-ui/react"
import { useSelector, useDispatch } from "react-redux";
import { adminAddImage, clearForm, onEditingForm } from "../actions/adminActions";
import { useDropzone } from 'react-dropzone';
import { useCallback } from "react";
import ReactQuill from "react-quill";
import { INTERESTS_LIST, SKILLS_LIST } from "../constants/admin";
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
            <FormControl>
                <Input
                    placeholder="Name"
                    name="name"
                    value={formToEdit?.name}
                    onChange={onInputChange}
                />
                <Input
                    placeholder="Organizer"
                    name="organization"
                    value={formToEdit?.organization}
                    onChange={onInputChange}
                />
                <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="date"
                    name="startDate"
                    value={formToEdit?.startDate}
                    onChange={onInputChange}
                />
                <Input
                    type="date"
                    name="endDate"
                    value={formToEdit?.endDate}
                    onChange={onInputChange}
                />
                <CheckboxGroup name="skills">
                    <h3>Skills</h3>
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
                <CheckboxGroup name="interest">
                    <h3>Interests</h3>
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
            <ReactQuill value={formToEdit?.description} onChange={text => onDescriptionChange(text)} />
            {/* <div {...getRootProps({ className: 'drop-zone' })}>
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