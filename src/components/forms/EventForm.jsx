import { FormControl, Text, Input, Textarea } from "@chakra-ui/react"
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useDropzone } from 'react-dropzone';
import { useCallback, useState } from "react";
import "./EventForm.css"

export default function EventsForm({ type }) {
    // form is either create or edit
    // if type == edit, load editing event from redux into formData
    const [formData, setFormData] = useState({})

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
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <>
            <FormControl>
                <Text label="Name" variant="outlined" />
                <Text label="Organiser" variant="outlined" />
                <Input placeholder="Name" />
                <Input placeholder="Organizer" />
                <Input type="datetime-local" disabled />
                <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                />
                {/* <Textarea label="Event Description" rowsMin={3} placeholder="Event Description" /> */}

            </FormControl>
            <ReactQuill />
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