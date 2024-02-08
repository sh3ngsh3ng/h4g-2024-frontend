import { Button } from "@chakra-ui/button";
import { paleRed, palestRed, primaryRed, tertiaryRed } from "../constants/color";

export default function AttendanceHelper({width, handleGenerateQr, handleCompleteEvent, handleRefreshTable, mr, mb}) {
  return (
    <>
      <Button
        backgroundColor={paleRed}
        borderColor={primaryRed}
        color={primaryRed}
        variant="outline"
        sx={{
          ":hover": {
            backgroundColor: palestRed,
            ":focus": { backgroundColor: tertiaryRed },
          },
        }}
        width={width}
        height="36px"
        mr={mr}
        mb={mb}
        onClick={handleGenerateQr}
      >
        Generate QR Code
      </Button>
      <Button
        backgroundColor={paleRed}
        borderColor={primaryRed}
        color={primaryRed}
        variant="outline"
        sx={{
          ":hover": {
            backgroundColor: palestRed,
            ":focus": { backgroundColor: tertiaryRed },
          },
        }}
        width={width}
        height="36px"
        mr={mr}
        mb={mb}
        onClick={handleCompleteEvent}
      >
        Complete Event
      </Button>

      <Button
        backgroundColor={paleRed}
        borderColor={primaryRed}
        color={primaryRed}
        variant="outline"
        sx={{
          ":hover": {
            backgroundColor: palestRed,
            ":focus": { backgroundColor: tertiaryRed },
          },
        }}
        width={width}
        height="36px"
        onClick={handleRefreshTable}
      >
        Refresh Table
      </Button>
    </>
  );
}
