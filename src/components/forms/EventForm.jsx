import "./EventForm.css";
import "react-quill/dist/quill.snow.css";
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
  Flex,
  Grid,
  GridItem,
  Show,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  adminAddImage,
  clearForm,
  onEditingForm,
} from "../actions/adminActions";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import ReactQuill from "react-quill";
import { INTERESTS_LIST, SKILLS_LIST } from "../constants/admin";
import { Form } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import CloudinaryUploadWidget from "../utilities/CloudinaryUploadWidget";
import { paleRed, white } from "../constants/color";
import EventDetails from "../formhelpers/EventDetails";
import Skills from "../formhelpers/Skills";
import Interest from "../formhelpers/Interest";
import TextBox from "../formhelpers/TextBox";

export default function EventsForm({ type, data }) {
  const dispatch = useDispatch();
  var formToEdit = useSelector((state) => state.adminEvents.formToEdit);

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
    dispatch(
      onEditingForm({ field: event.target.name, value: event.target.value })
    );
  };

  const onDescriptionChange = (content) => {
    dispatch(onEditingForm({ field: "description", value: content }));
  };

  const onCheckboxChange = (name, skill) => {
    let currentArr = [...formToEdit[name]];
    let updatedArr;
    if (currentArr.includes(skill)) {
      updatedArr = currentArr.filter((item) => item != skill);
    } else {
      currentArr.push(skill);
      updatedArr = currentArr;
    }
    dispatch(onEditingForm({ field: name, value: updatedArr }));
  };

  return (
    <Box backgroundColor={paleRed} borderRadius={8} p={5}>
      <Show above="lg">
        <Grid templateColumns="repeat(10, 1fr)">
          <GridItem colSpan={4}>
            <CloudinaryUploadWidget actionFn={adminAddImage} imgArr={formToEdit?.images} disabledMode={false}/>
            {/* <AdvancedImage
                    style={{ maxWidth: "100%" }}
                    cldImg={ }
                    plugins={[response(), placeholder()]}
                /> */}

            <Grid templateColumns="repeat(4, 1fr)">
              <GridItem colSpan={2} mt={5}>
                <Skills
                  onCheckboxChange={onCheckboxChange}
                  formToEdit={formToEdit}
                  SKILLS_LIST={SKILLS_LIST}
                />
              </GridItem>
              <GridItem colSpan={2}>
                <Interest
                  onCheckboxChange={onCheckboxChange}
                  formToEdit={formToEdit}
                  INTERESTS_LIST={INTERESTS_LIST}
                />
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem colSpan={6}>
            <EventDetails
              onInputChange={onInputChange}
              formToEdit={formToEdit}
            />

            <TextBox
              onDescriptionChange={onDescriptionChange}
              formToEdit={formToEdit}
            />
          </GridItem>
        </Grid>
      </Show>

      <Show below="lg">
        <CloudinaryUploadWidget actionFn={adminAddImage} imgArr={formToEdit?.images} />
        {/* <AdvancedImage
                    style={{ maxWidth: "100%" }}
                    cldImg={ }
                    plugins={[response(), placeholder()]}
                /> */}

        <Box mt={4}>
          <Skills
            onCheckboxChange={onCheckboxChange}
            formToEdit={formToEdit}
            SKILLS_LIST={SKILLS_LIST}
          />
        </Box>
        <Box mt={4}>
          <Interest
            onCheckboxChange={onCheckboxChange}
            formToEdit={formToEdit}
            INTERESTS_LIST={INTERESTS_LIST}
          />
        </Box>
        <Box mt={4}>
          <EventDetails onInputChange={onInputChange} formToEdit={formToEdit} />
        </Box>
        <TextBox
          onDescriptionChange={onDescriptionChange}
          formToEdit={formToEdit}
        />
      </Show>

      {/*<div {...getRootProps({ className: 'drop-zone' })}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>
            <ul>{files}</ul> */}
    </Box>
  );
}
