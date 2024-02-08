import { Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

export default function Loading() {
  return (
    <Center height="100%"><Spinner size="xl"></Spinner></Center>
  )
}