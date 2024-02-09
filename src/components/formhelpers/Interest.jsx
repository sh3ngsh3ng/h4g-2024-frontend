import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";
import { FormControl } from "@chakra-ui/form-control";
import { Box, Heading, VStack } from "@chakra-ui/layout";
import { white } from "../constants/color";

export default function Interest({INTERESTS_LIST, onCheckboxChange, formToEdit}) {
  return (
    <Box borderRadius={8} backgroundColor={white} width="95%" marginTop={5}>
        <FormControl padding={3}>
          <CheckboxGroup name="interest">
            <h3>Interests</h3>
            <div
              style={{
                border: "0.5px solid rgba(128, 128, 128, 0.5)",
                width: "100%",
                margin: "0px",
              }}
            ></div>
            <VStack alignItems="flex-start">
              {INTERESTS_LIST.map((interest) => {
                return (
                  <Checkbox
                    name="interest"
                    key={interest}
                    onChange={(e) => onCheckboxChange(e.target.name, interest)}
                    isChecked={formToEdit?.interest.includes(interest)}
                  >
                    {interest}
                  </Checkbox>
                );
              })}
            </VStack>
          </CheckboxGroup>
        </FormControl>
      </Box>
  )
}