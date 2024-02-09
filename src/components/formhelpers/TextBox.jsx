import { Box } from "@chakra-ui/layout";
import ReactQuill from "react-quill";
import { white } from "../constants/color";

export default function TextBox( {formToEdit, onDescriptionChange }) {
  return (
    <Box backgroundColor={white} borderRadius={8} minHeight="230px"  width="95%" marginTop={5} p={3}>
        <ReactQuill
          value={formToEdit?.description}
          onChange={(text) => onDescriptionChange(text)}
          style={{ height: "150px", borderRadius: 8, p: 5}}
        />
      </Box>
  )
}