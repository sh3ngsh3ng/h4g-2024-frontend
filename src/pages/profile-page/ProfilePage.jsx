import ProfileForm from "../../components/forms/ProfileForm";
import { Box, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { changeUserDashboard } from "../../components/actions/userActions";
import Navbar from "../../components/navbar/Navbar";

const ProfilePage = () => {
  const dispatch = useDispatch();
  return (
    <Box width="100%" height="100%" p={3}>
      <Navbar />
      {/* <Button
        onClick={() =>
          dispatch(changeUserDashboard("USER_DASHBOARD_READ_CURRENT"))
        }
        colorScheme="blue"
      >
        Back
      </Button> */}
      <ProfileForm />
    </Box>
  );
};

export default ProfilePage;
