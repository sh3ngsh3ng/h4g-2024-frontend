import { Bar } from "react-chartjs-2";

export default function MyBar({ xLabels, label, data, title, label2, data2 }) {

  let datasets = [
    {
      label: label,
      data: data,
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(255, 205, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(201, 203, 207, 0.6)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
      borderRadius: 5,
    },
  ];

  if (label2) {
    datasets.push({
      label: label2,
      data: data2,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1,
      borderRadius: 5,
    })
  }

  return (
    <Bar
      data={{
        labels: xLabels,
        datasets: datasets
      }}
      options={{
        plugins: {
          title: {
            text: title,
          },
        },
      }}
    />
  );
}
