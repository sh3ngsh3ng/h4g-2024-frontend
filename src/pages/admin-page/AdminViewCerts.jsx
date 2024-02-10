import { Box } from "@chakra-ui/layout";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import AdminCertHelper from "../../components/utilities/AdminCertHelper";

export default function AdminViewCerts() {
  const [certs, setCerts] = useState();

  useEffect(() => {
    retrieveCert();
  }, [])

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("@user"),
    },
  };

  const onVerify = async (certId) => {
    try {
      let result = await axios.post("/api/certs/verify", { certId }, config);

      retrieveCert();
    } catch (e) {
      console.log(e);
    }
  }

  const retrieveCert = async () => {
    try {
      let result = await axios.get("/api/certs", config);
      console.log(result.data);

      setCerts([...result.data.certs]);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Box width="100%" height="100%" p={3}>
      <Navbar />

      {certs && certs.map((cert) => (<AdminCertHelper cert={cert} onVerify={onVerify} />))}
    </Box>
  );
}
