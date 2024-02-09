import { Box, Grid, GridItem } from "@chakra-ui/layout";
import Navbar from "../../components/navbar/Navbar";
import { paleRed, white } from "../../components/constants/color";
import MyLineChart from "../../components/charts/MyLineChart";
import {bar, line, pie } from "./data.js"
import MyBar from "../../components/charts/MyBar.js";
import MyPieChart from "../../components/charts/MyPieChart.js";
export default function DummyChartPage() {

  return (
    <Box width="100%" height="100%" p={3}>
      <Navbar />
      <Box
        backgroundColor={paleRed}
        width="95%"
        sx={{ mx: "auto", mt: 3, p:3 }}
        borderRadius={8}
      >
        <Box
          backgroundColor={white}
          width="80%"
          minH="400px"
          sx={{ mx: "auto", mt: 3 }}
          borderRadius={8}
        >
          <MyLineChart xLabels={line.xLabels} data={line.data} label={line.label} data2={line.data2} label2={line.label2} title={line.title}/>
        </Box>
        <Grid templateColumns="repeat(2, 1fr)">
          <GridItem mt={5}>
            <Box
              backgroundColor={white}
              width="80%"
              minH="400px"
              sx={{ mx: "auto" }}
              borderRadius={8}
            >
              <MyBar xLabels={bar.xLabels} data={bar.data} label={bar.label} data2={bar.data2} label2={bar.label2} title={bar.title}/>
            </Box>
          </GridItem>
          <GridItem mt={5}>
            <Box
              backgroundColor={white}
              width="80%"
              minH="400px"
              sx={{ mx: "auto" }}
              borderRadius={8}
            >
              <MyPieChart xLabels={pie.xLabels} data={pie.data} label={pie.label} title={pie.title}/>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
