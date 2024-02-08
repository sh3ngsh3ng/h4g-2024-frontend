import "./EventForm.css"
import 'react-quill/dist/quill.snow.css';
import { Checkbox, CheckboxGroup, FormControl, HStack, Input, Radio, RadioGroup, VStack } from "@chakra-ui/react"
import { useSelector, useDispatch } from "react-redux";
import { onEditingForm } from "../actions/adminActions";
import { useDropzone } from 'react-dropzone';
import { useCallback } from "react";
import ReactQuill from "react-quill";
import { INTERESTS_LIST, SKILLS_LIST } from "../constants/admin";

export default function EventsForm({ type, data }) {
    const dispatch = useDispatch()
    const formToEdit = useSelector(state => state.adminEvents.formToEdit)

    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles.length === 0) {
            alert("Only images")
        } else {
            console.log("display image")
        }
    }, [])

    const accept = {
        'image/jpeg': ['.jpeg', '.png']
    }

    const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept })

    const files = acceptedFiles.map(file => (
        <li key={file.name}>
            {file.name} - {file.size} bytes
        </li>
    )); // temp to show uploaded images

    const onInputChange = (event) => {
        dispatch(onEditingForm({ field: event.target.name, value: event.target.value }))
    }

    const onDescriptionChange = (content) => {
        dispatch(onEditingForm({ field: "description", value: content }))
    }

    return (
        <>
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
                    value={""}
                    onChange={onInputChange}
                />
                <Input
                    type="date"
                    name="endDate"
                    value={`${formToEdit?.month}-${formToEdit?.day}`}
                    onChange={onInputChange}
                />
                <CheckboxGroup name="skills" onChange={onInputChange} >
                    <h3>Skills</h3>
                    <VStack alignItems="flex-start">
                        {
                            SKILLS_LIST.map((skill) => {
                                return (
                                    <Checkbox key={skill} isChecked={formToEdit?.skills.includes(skill)}>{skill}</Checkbox>
                                )
                            })
                        }
                        <HStack>
                            <Checkbox></Checkbox><Input size="sm" placeholder="Type here and press Enter..." />
                        </HStack>
                    </VStack>
                </CheckboxGroup>
                <CheckboxGroup name="interest" onChange={onInputChange}>
                    <h3>Interests</h3>
                    <VStack alignItems="flex-start">
                        {
                            INTERESTS_LIST.map((interest) => {
                                return (
                                    <Checkbox key={interest} isChecked={formToEdit?.interest.includes(interest)}>{interest}</Checkbox>
                                )
                            })
                        }
                    </VStack>
                </CheckboxGroup>
            </FormControl>
            <ReactQuill value={formToEdit?.description} onChange={text => onDescriptionChange(text)} />
            <div {...getRootProps({ className: 'drop-zone' })}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>
            <ul>{files}</ul>
        </>
    )
}