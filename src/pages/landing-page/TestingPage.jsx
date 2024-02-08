import { Box, Flex } from "@chakra-ui/layout";
import MyBar from "../../components/charts/MyBar";
import MyLineChart from "../../components/charts/MyLineChart";
import MyPieChart from "../../components/charts/MyPieChart";
import Navbar from "../../components/navbar/Navbar";
import { Tabs } from "@chakra-ui/tabs";

export default function TestingPage() {
  return (
    <>
      <Box h="100%" w="100%" p={3}>
        <Navbar />
            <MyBar
              xLabels={[
                "A",
                "B",
                "C",
                "A",
                "B",
                "C",
                "A",
                "B",
                "C",
                "A",
                "B",
                "C",
              ]}
              data={[200, 300, 400, 100, 20, 50, 40, 30, 500, 100, 200]}
              label={"Revenue"}
              title={"Revenue Source"}
              label2={"Test"}
              data2={[100, 500, 200]}
            />
            <MyPieChart
              xLabels={["A", "B", "C"]}
              data={[200, 300, 400]}
              label={"Revenue"}
              title={"Revenue Source"}
            />
            <MyLineChart
              xLabels={[
                "A",
                "B",
                "C",
                "A",
                "B",
                "C",
                "A",
                "B",
                "C",
                "A",
                "B",
                "C",
              ]}
              data={[
                200, 300, 400, 200, 300, 400, 100, 20, 50, 40, 30, 500, 100,
                200,
              ]}
              label={"Revenue"}
              title={"Revenue Source"}
              data2={[
                100, 400, 100, 250, 100, 200, 400, 300, 150, 140, 230, 300, 20,
                100,
              ]}
              label2={"Past Year Revenue"}
            />
      </Box>
    </>
  );
}
