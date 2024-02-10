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
import CertHelper from "./CertHelper";

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext();


function CloudinaryUploadWidget({ actionFn, imgArr, reduxMode, height, isProfile, skillCertArr }) {
  console.log("SKILL CERT ARR, =>", skillCertArr);


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
    if (!isProfile && images && reduxMode) {
      console.log(images[images.length - 1]);
      setDisplay(images[images.length - 1]);
      console.log(images);
      // skillCertArr.append({cert: images[images.length - 1], isVerified: false})
    }
  }, [images]);

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      var myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            console.log("ISPROFILE => ",isProfile)
            console.log("ISREDUX => ", reduxMode);
            if (reduxMode) {
              dispatch(actionFn(result.info.secure_url))
            } else {
              actionFn([
                ...imgArr,
                {cert: result.info.secure_url, isVerified: false}
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
      height={height ? height : "230px"}
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
      {!isProfile && <Box height="200px" mt={5}><Center>{display && <img src={display} style={{ height: "150px" }} />}</Center></Box>}
      {skillCertArr && skillCertArr.length > 0  && skillCertArr?.map(cert => (
        <CertHelper fullUrl={cert.cert} url={cert.cert.split("/")[cert.cert.split("/").length - 1]} isVerified={cert.isVerified} />
      ))}
      {/* {isProfile && images && images.map(cert => (<CertHelper fullUrl={cert} url={cert.split("/")[7]} isVerified={false} />))} */}
    </Box>
  );
}

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };
