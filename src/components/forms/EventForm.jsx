import { FormControl, Text, Input, Textarea } from "@chakra-ui/react"
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useDropzone } from 'react-dropzone';
import { useCallback, useState, useEffect } from "react";
import "./EventForm.css"

export default function EventsForm({ type, data }) {
    // form is either create or edit
    // if type == edit, load editing event from redux into formData
    const [formData, setFormData] = useState({
        name: "",
        organization: "",
        skills: [],
        month: "",
        day: "",
        description: ""
    })

    useEffect(() => {
        if (type === "edit") {
            console.log("called ")
            setFormData(data)
        }
    }, [])

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

    const onDescriptionChange = (content) => {
        setFormData({
            description: content
        })
    }

    return (
        <>
            <FormControl>
                <Input
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={onInputChange}
                />
                <Input
                    placeholder="Organizer"
                    name="organization"
                    value={formData.organization}
                    onChange={onInputChange}
                />
                <Input
                    type="datetime-local"
                    disabled
                    value={`${formData.month}-${formData.day}`}
                    onChange={onInputChange}
                />
                <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                    name="datetime"
                    value={""}
                    onChange={onInputChange}
                />
            </FormControl>
            <ReactQuill value={formData.description} onChange={onDescriptionChange} />
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