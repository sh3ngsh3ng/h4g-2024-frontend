import ProfileForm from "../../components/forms/ProfileForm";
import {
    Button
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { changeUserDashboard } from "../../components/actions/userActions"

const ProfilePage = () => {
    const dispatch = useDispatch()
    return (
        <>
            <Button onClick={() => dispatch(changeUserDashboard("USER_DASHBOARD_READ_CURRENT"))} colorScheme="blue">Back</Button>
            <ProfileForm />
        </>
    );
}

export default ProfilePage; 