import { Checkbox, CheckboxGroup } from "@chakra-ui/checkbox";
import { FormControl } from "@chakra-ui/form-control";
import { Box, Heading, VStack } from "@chakra-ui/layout";
import { white } from "../constants/color";

export default function ProfileInterest({
  INTERESTS_LIST,
  handleCheckBox,
  formToEdit,
  editMode,
  interestArr,
}) {
  return (
    <Box backgroundColor={white} borderRadius={8} height="260px">
    <FormControl isDisabled={!editMode}>
      <Heading size="md" padding="10px">
        Interest
      </Heading>
      <div
        style={{
          border: "0.5px solid rgba(128, 128, 128, 0.5)",
          width: "100%",
          margin: "0px",
        }}
      ></div>
      <CheckboxGroup>
        <VStack mt={3} alignItems="flex-start" ml={5}>
          {INTERESTS_LIST.map((interest) => {
            console.log(
              "user interes: ",
              interest,
              interestArr.includes(interest)
            );
            return (
              <Checkbox
                name="interest"
                key={interest}
                onChange={(e) => handleCheckBox(e)}
                isChecked={interestArr.includes(interest)}
              >
                {interest}
              </Checkbox>
            );
          })}
        </VStack>
      </CheckboxGroup>
    </FormControl>
    </Box>
  );
}
