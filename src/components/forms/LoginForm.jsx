import './LoginForm.css'
import React from 'react'
import { Link } from 'react-router-dom'
import {
    Input,
    Button,
    Container,
    FormControl,
    FormHelperText
} from '@chakra-ui/react'

export default function LoginForm() {
    return (
        <>
            <Container>
                <FormControl>
                    <Input
                        id="login-email"
                        m="10px"
                        type='text'
                        placeholder='Email Address'
                        name='email'
                        borderColor={'gray.400'}
                        focusBorderColor='red.600'
                    />
                    <Input
                        id="login-pwd"
                        m="10px"
                        type='password'
                        placeholder='Password'
                        name='password'
                        borderColor={'gray.400'}
                        focusBorderColor='red.600'
                    />
                    <FormHelperText textAlign={'center'}>
                        <Link to="/login"
                            style={{
                                color: "red",
                            }}>
                            Forget Password?
                        </Link>
                    </FormHelperText>
                    <Button
                        m="10px"
                        colorScheme='red'
                        width="full"
                        variant="solid"
                    >
                        Login
                    </Button>
                </FormControl>
            </Container>
        </>
    )
}
