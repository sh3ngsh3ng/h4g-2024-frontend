import React from 'react'
import {
    Box,
    Image
} from '@chakra-ui/react'
import logo from "../../static/Images/big-at-heart-logo/logo.png"

export default function Logo() {
    return (
        <Box>
            <Image src={logo} alt="logo" />
        </Box>
    )
}