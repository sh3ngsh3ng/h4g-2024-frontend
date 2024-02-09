import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, HStack, VStack } from "@chakra-ui/layout";
import { white } from "../constants/color";

export default function Skills({SKILLS_LIST, formToEdit, onCheckboxChange}) {
  return (
    <Box borderRadius={8} width="95%" backgroundColor={white}>
        <FormControl padding={3}>
          <CheckboxGroup name="skills">
            <h3>Skills</h3>
            <div
              style={{
                border: "0.5px solid rgba(128, 128, 128, 0.5)",
                width: "100%",
                margin: "0px",
              }}
            ></div>
            <VStack alignItems="flex-start">
              {SKILLS_LIST.map((skill) => {
                return (
                  <Checkbox
                    name="skills"
                    onChange={(e) => onCheckboxChange(e.target.name, skill)}
                    key={skill}
                    isChecked={formToEdit?.skills.includes(skill)}
                  >
                    {skill}
                  </Checkbox>
                );
              })}
              <HStack>
                <Checkbox></Checkbox>
                <Input size="sm" placeholder="Type here and press Enter..." />
              </HStack>
            </VStack>
          </CheckboxGroup>
        </FormControl>
      </Box>
  )
}