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

import { registerUser, registerUserWithEmailAndPassword, registerUserWithGoogle } from "../../components/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

import { useState, useEffect } from "react";
import {
  grey,
  redButtonActive,
  redButtonFocus,
  redButtonHover,
  white,
} from "../constants/color";
import MyDivider from "../utilities/MyDivider";
import { LinkIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router";
import { displaySuccess } from "../../services/alertServices";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading: userRegisterLoading, success, error } = userRegister;

  const userFirebaseRegister = useSelector(state => state.userFirebaseRegister);
  const { loading, uid, email: firebaseEmail, success: firebaseSuccess } = userFirebaseRegister;

  // Handle when email is invalid, show warning text
  useEffect(() => {
    if (email === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [email]);

  useEffect(() => {
    if (firebaseSuccess) {
      setIsCheck(true);
    }
  }, [userFirebaseRegister]);

  useEffect(() => {
    if (success) {
      navigate("/user")
    }
  }, [userRegister])

  const onContinue = (event) => {
    event.preventDefault();
    dispatch(registerUserWithEmailAndPassword(email, password));
  };

  const onContinueWithGoogle = (event) => {
    event.preventDefault();
    dispatch(registerUserWithGoogle());
  };

  const onCreateAccount = (event) => {
    event.preventDefault();
    dispatch(registerUser({ firstName, lastName, age, gender, skill, interest, phoneNumber, emergencyContact }))
  };

  return (
    <>
      {!isCheck && (
        <>
          <FormControl /*isInvalid={isEmpty}*/>
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              m="10px"
              borderColor={"gray.400"}
              focusBorderColor="red.600"
              height="48px"
            />
            {/* {isEmpty && (
              <FormErrorMessage>
                Email is required in correct format.
              </FormErrorMessage>
            )} */}
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              m="10px"
              borderColor={"gray.400"}
              focusBorderColor="red.600"
              height="48px"
            />
          </FormControl>
          <Button
            mt={5}
            backgroundColor={redButtonActive}
            color={white}
            sx={{
              ":hover": {
                backgroundColor: redButtonHover,
                ":focus": { backgroundColor: redButtonFocus },
              },
            }}
            width="full"
            height="48px"
            onClick={onContinue}
          >
            Continue
          </Button>

          <MyDivider />

          <Button
            backgroundColor={white}
            borderColor={grey}
            color={grey}
            variant="outline"
            sx={{
              ":hover": {
                backgroundColor: white,
                ":focus": { backgroundColor: white },
              },
            }}
            width="full"
            height="36px"
            leftIcon={<LinkIcon />}
            onClick={onContinueWithGoogle}
          >
            Sign Up With Google
          </Button>
        </>
      )}

      {loading && <></>}

      {isCheck && (
        <>
          <FormControl >
            <Grid templateColumns="repeat(2,1fr)">
              <GridItem w="90%" h="10" mb={5} mr={2}>
                <Input
                  type="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  borderColor={"gray.400"}
                  focusBorderColor="red.600"
                  height="48px"

                />
              </GridItem>
              <GridItem w="90%" h="10" mb={5}>
                <Input
                  type="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  borderColor={"gray.400"}
                  focusBorderColor="red.600"
                  height="48px"
                />
              </GridItem>
              <GridItem w="90%" h="10" mb={5} mr={2} >
                <Input
                  type="age"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  borderColor={"gray.400"}
                  focusBorderColor="red.600"
                  height="48px"
                />
              </GridItem>
              <GridItem w="90%" h="10" mb={5} >
                <Select
                  placeholder="Gender"
                  value={gender}
                  color="grey"
                  onChange={(e) => setGender(e.target.value)}
                  borderColor={"gray.400"}
                  focusBorderColor="red.600"
                  height="48px"
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
              borderColor={"gray.400"}
              focusBorderColor="red.600"
              height="48px"
              mb={3}
            />

            <Input
              type="emergencyContact"
              placeholder="Emergency Contact"
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
              borderColor={"gray.400"}
              focusBorderColor="red.600"
              height="48px"
              mb={5}
            />
          </FormControl>
          <Button
            mt={5}
            backgroundColor={redButtonActive}
            color={white}
            sx={{
              ":hover": {
                backgroundColor: redButtonHover,
                ":focus": { backgroundColor: redButtonFocus },
              },
            }}
            width="full"
            height="48px"
            onClick={onCreateAccount}
          >
            Create Account
          </Button>
        </>
      )}
    </>
  );
}
