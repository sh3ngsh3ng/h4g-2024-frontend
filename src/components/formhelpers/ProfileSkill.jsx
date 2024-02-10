import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";
import { FormControl } from "@chakra-ui/form-control";
import { Box, Heading, VStack } from "@chakra-ui/layout";
import { white } from "../constants/color";

export default function ProfileSkill({SKILLS_LIST, editMode, handleCheckBox, skillsArr}) {
  return (
    <Box backgroundColor={white} borderRadius={8} mt={4} height="300px">
    <FormControl isDisabled={!editMode}>
        <Heading size="md" padding="10px">
          Skills
        </Heading>
        <div
          style={{
            border: "0.5px solid rgba(128, 128, 128, 0.5)",
            width: "100%",
            margin: "0px",
          }}
        ></div>
        <CheckboxGroup >
          <VStack mt={3} alignItems="flex-start" ml={5}>
            {SKILLS_LIST.map((skills) => {
              return (
                <Checkbox
                  name="skills"
                  key={skills}
                  onChange={(e) => handleCheckBox(e, skills)}
                  isChecked={skillsArr.includes(skills)}
                >
                  {skills}
                </Checkbox>
              );
            })}
          </VStack>
        </CheckboxGroup>
      </FormControl>
      </Box>
  )
}