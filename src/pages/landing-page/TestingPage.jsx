import MyBar from "../../components/charts/MyBar";
import MyLineChart from "../../components/charts/MyLineChart";
import MyPieChart from "../../components/charts/MyPieChart";

export default function TestingPage() {
  return (
    <>
      <h1>Testing Page</h1>

      <MyBar
        xLabels={["A", "B", "C", "A", "B", "C", "A", "B", "C", "A", "B", "C"]}
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
        xLabels={["A", "B", "C", "A", "B", "C", "A", "B", "C", "A", "B", "C"]}
        data={[
          200, 300, 400, 200, 300, 400, 100, 20, 50, 40, 30, 500, 100, 200,
        ]}
        label={"Revenue"}
        title={"Revenue Source"}
        data2={[
          100, 400, 100, 250, 100, 200, 400, 300, 150, 140, 230, 300, 20, 100,
        ]}
        label2={"Past Year Revenue"}
      />
    </>
  );
}
