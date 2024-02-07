import { Line } from "react-chartjs-2";

export default function MyLineChart({ xLabels, label, data, title, label2, data2}) {
  let datasets = [{
    label: label,
    data: data,
    backgroundColor: "#064FF0",
    borderColor: "#064FF0",
  }];

  if (label2) {
    datasets.push(
      {
        label: label2,
        data: data2,
        backgroundColor: "red",
        borderColor: "red",
      }
    )
  }

  return (
    <Line 
    data={{
      labels: xLabels,
      datasets: datasets
    }}
    options={{
      plugins: {
        title: {
          text: title
        }
      }
    }}
    />
  )
}