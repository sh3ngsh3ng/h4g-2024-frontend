import axios from "axios";
import { useDispatch } from "react-redux";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { test } from "../../components/actions/userActions";

export default function LandingPage() {
  const dispatch = useDispatch();


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(test());
  };
  return (
    <>
      <h1>Landing Page</h1>
      <Button colorScheme='blue' onClick={handleSubmit}>Button</Button>
    </>
  );
}

