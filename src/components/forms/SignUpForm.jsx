import "./SignUpForm.css";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Container,
  Grid,
  GridItem,
  Select,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import {
  redButtonActive,
  redButtonFocus,
  redButtonHover,
  white,
} from "../constants/color";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [skill, setSkill] = useState("");
  const [interest, setInterest] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");

  // Handle when email is invalid, show warning text
  useEffect(() => {
    if (email === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [email]);

  const onContinue = (event) => {
    event.preventDefault();
    setIsCheck(true);
  };

  const onCreateAccount = (event) => {
    event.preventDefault();
    console.log({
      firstName,
      lastName,
      age,
      gender,
      phoneNumber,
      emergencyContact,
    });
  };

  return (
    <>
      {!isCheck && (
        <>
          <FormControl isInvalid={isEmpty}>
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {isEmpty && (
              <FormErrorMessage>
                Email is required in correct format.
              </FormErrorMessage>
            )}
          </FormControl>
          <Button
            backgroundColor={redButtonActive}
            color={white}
            sx={{
              ":hover": { backgroundColor: redButtonHover },
              ":focus": { backgroundColor: redButtonFocus },
            }}
            onClick={onContinue}
          >
            Continue
          </Button>
        </>
      )}

      {isCheck && (
        <>
          <FormControl isInvalid={isEmpty}>
            <Grid templateColumns="repeat(2,1fr)">
              <GridItem w="90%" h="10" mb={2} mr={2} ml={2}>
                <Input
                  type="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </GridItem>
              <GridItem w="90%" h="10" mb={2} mr={2} ml={2}>
                <Input
                  type="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </GridItem>
              <GridItem w="90%" h="10" mb={2} mr={2} ml={2}>
                <Input
                  type="age"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </GridItem>
              <GridItem w="90%" h="10" mb={2} mr={2} ml={2}>
                <Select
                  placeholder="Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>Male</option>
                  <option>Female</option>
                </Select>
              </GridItem>
            </Grid>
            <Input
              type="phoneNumber"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              mx={2}
              mb={2}
            />

            <Input
              type="emergencyContact"
              placeholder="Emergency Contact"
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
              mx={2}
              mb={2}
            />
          </FormControl>
          <Button
            backgroundColor={redButtonActive}
            color={white}
            sx={{
              ":hover": { backgroundColor: redButtonHover },
              ":focus": { backgroundColor: redButtonFocus },
            }}
            onClick={onCreateAccount}
          >
            Create Account
          </Button>
        </>
      )}
    </>
  );
}
