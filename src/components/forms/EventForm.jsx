import { FormControl, Text, Input, Textarea } from "@chakra-ui/react"

export default function EventsForm({ type }) {
    return (
        <>
            <FormControl>
                <Text label="Name" variant="outlined" />
                <Text label="Organiser" variant="outlined" />
                <Input placeholder="Name" />
                <Input placeholder="Organizer" />
                <Input type="datetime-local" disabled />
                <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                />
                {/* <Textarea label="Event Description" rowsMin={3} placeholder="Event Description" /> */}

            </FormControl>
        </>
    )

}