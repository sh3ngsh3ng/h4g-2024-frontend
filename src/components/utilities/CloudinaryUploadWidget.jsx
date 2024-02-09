import { createContext, useEffect, useState } from "react";
import { adminAddImage } from "../actions/adminActions";
import { useDispatch, useSelector } from "react-redux";
import {
  paleRed,
  palestRed,
  primaryRed,
  tertiaryRed,
  white,
} from "../constants/color";
import { Button } from "@chakra-ui/button";
import { AbsoluteCenter, Box, Center } from "@chakra-ui/layout";

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext();

function CloudinaryUploadWidget({ actionFn, imgArr, reduxMode }) {
  const [loaded, setLoaded] = useState(false);
  const [display, setDisplay] = useState("");

  // const adminEvents = useSelector((state) => state.adminEvents);
  const images = imgArr;

  const dispatch = useDispatch();
  const [uwConfig] = useState({
    cloudName: "dkvfivjmh",
    uploadPreset: "n5kxxw69",
    theme: "purple",
  });

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }
  }, [loaded]);

  useEffect(() => {
    if (images && reduxMode) {
      console.log(images[images.length - 1]);
      setDisplay(images[images.length - 1]);
    }
  }, [images]);

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      var myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            // setPublicId(result.info.public_id);
            // console.log(result.info.public_id)
            // console.log(result.info.secure_url)
            // dispatch(adminAddImage(result.info.secure_url));
            if (reduxMode) {
              dispatch(actionFn(result.info.secure_url))
            } else {
              actionFn([
                ...imgArr,
                result.info.secure_url
              ])
            }

          }
        }
      );

      document.getElementById("upload_widget").addEventListener(
        "click",
        function () {
          myWidget.open();
        },
        false
      );
    }
  };

  return (
    <Box
      backgroundColor={white}
      borderRadius={8}
      height="230px"
      width="95%"
      p={3}
    >
      <CloudinaryScriptContext.Provider value={{ loaded }}>
        <Button
          id="upload_widget"
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
          height="36px"
          onClick={initializeCloudinaryWidget}
        >
          Upload
        </Button>
      </CloudinaryScriptContext.Provider>
      <Box height="200px" mt={5}><Center>{display && <img src={display} style={{ height: "150px" }} />}</Center></Box>
    </Box>
  );
}

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };
