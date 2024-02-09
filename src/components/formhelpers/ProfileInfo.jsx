import {
  Divider,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Select,
  Flex,
  Checkbox,
  CheckboxGroup,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { INTERESTS_LIST, SKILLS_LIST } from "../constants/admin";
import { white } from "../constants/color";

export default function ProfileInfo({editMode, handleInputChange, user}) { 
  return (
    <Box backgroundColor={white} borderRadius={8}>
      <Heading size="md" padding="10px">
        Personal Information
      </Heading>
      <div
        style={{
          border: "0.5px solid rgba(128, 128, 128, 0.5)",
          width: "100%",
          margin: "0px",
        }}
      ></div>
      <FormControl padding={3} isDisabled={!editMode}>
        <Flex direction="row" width="full" marginTop={5}>
          <Box width="50%" paddingRight={2}>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              name="firstName"
              background="gray.200"
              value={user.firstName}
              onChange={handleInputChange}
            />
          </Box>
          <Box width="50%" paddingLeft={2}>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              name="lastName"
              background="gray.200"
              value={user.lastName}
              onChange={handleInputChange}
            />
          </Box>
        </Flex>
        <FormHelperText>As in NRIC/FIN/Passport</FormHelperText>
        <Flex direction="row" width="full" marginTop={5}>
          <Box width="50%" paddingRight={2}>
            <FormLabel>Date of Birth</FormLabel>
            <Input
              type="date"
              name="dateOfBirth"
              background="gray.200"
              value={user.dateOfBirth}
              onChange={handleInputChange}
            />
          </Box>
          <Box width="50%" paddingLeft={2}>
            <FormLabel>Gender</FormLabel>
            <Select
              placeholder="Select option"
              name="gender"
              background="gray.200"
              value={user.gender}
              onChange={handleInputChange}
            >
              <option>Male</option>
              <option>Female</option>
            </Select>
          </Box>
        </Flex>
        <Flex direction="row" width="full" marginTop={5}>
          <Box width="50%" paddingRight={2}>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="tel"
              name="phoneNumber"
              background="gray.200"
              value={user.phoneNumber}
              onChange={handleInputChange}
            />
          </Box>
          <Box width="50%" paddingLeft={2}>
            <FormLabel>Emergency Contact</FormLabel>
            <Input
              type="tel"
              name="emergencyContact"
              background="gray.200"
              value={user.emergencyContact}
              onChange={handleInputChange}
            />
          </Box>
        </Flex>
        <Flex direction="row" width="full" marginTop={5}>
          <Box width="50%" paddingRight={2}>
            <FormLabel>Occupation</FormLabel>
            <Input
              type="text"
              name="occupation"
              background="gray.200"
              value={user.occupation}
              onChange={handleInputChange}
            />
          </Box>
          <Box width="50%" paddingLeft={2}>
            <FormLabel>School(if applicable)</FormLabel>
            <Input
              type="text"
              name="school"
              background="gray.200"
              value={user.school}
              onChange={handleInputChange}
            />
          </Box>
        </Flex>
        <FormLabel>Immigration Status</FormLabel>
        <Select
          placeholder="Select option"
          name="immigrationStatus"
          background="gray.200"
          value={user.immigrationStatus}
          onChange={handleInputChange}
        >
          <option value="Citizen">Citizen</option>
          <option value="Permanent Resident">Permanent Resident</option>
          <option value="Foreigner">Foreigner</option>
        </Select>
        <Checkbox
          padding={3}
          name="canDrive"
          colorScheme="yellow"
          value={user.canDrive}
          onChange={handleInputChange}
          isChecked={user.canDrive}
        >
          I can drive
        </Checkbox>
        <Checkbox
          padding={3}
          name="ownVehicle"
          colorScheme="yellow"
          value={user.ownVehicle}
          onChange={handleInputChange}
          isChecked={user.ownVehicle}
        >
          I own a vehicle
        </Checkbox>
      </FormControl>
      </Box>
  )
}