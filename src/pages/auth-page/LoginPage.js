import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../components/actions/userActions";
import { useEffect } from "react";
import { auth, firebase } from "../../firebase/firebase";

import { Button, ButtonGroup } from '@chakra-ui/react'

function LoginPage(props) {

  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const { loading, user, error } = userLogin;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser());
  }

  useEffect(() => {
    console.log(loading);
  }, [userLogin])

  return <>
  TEST LOGIN PAGE
  <Button colorScheme='blue' onClick={handleSubmit}>Button</Button>
  </>
}

export default LoginPage