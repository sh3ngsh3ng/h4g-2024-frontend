import "./EventForm.css"
import 'react-quill/dist/quill.snow.css';
import { FormControl, Input } from "@chakra-ui/react"
import { useSelector, useDispatch } from "react-redux";
import { onEditingForm } from "../actions/adminActions";
import { useDropzone } from 'react-dropzone';
import { useCallback } from "react";
import ReactQuill from "react-quill";

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
                    type="datetime-local"
                    disabled
                    value={`${formToEdit?.month}-${formToEdit?.day}`}
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