import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../components/actions/userActions";
import { useEffect } from "react";

import { Button, ButtonGroup } from '@chakra-ui/react'

function RegisterPage(props) {

  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const { loading, user, error } = userLogin;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser());
  }

  useEffect(() => {
    console.log(loading);
  }, [userLogin])

  return <>
    TEST Register PAGE
    <Button colorScheme='blue' onClick={handleSubmit}>Button</Button>
  </>
}

export default RegisterPage