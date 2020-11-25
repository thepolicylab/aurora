import React from "react"
import Chart from "react-apexcharts"

const data = [
  {
    name: "Exits",
    data: [569, 178, 1535, 176],
  },
  {
    name: "Returns",
    data: [55, 18, 199, 26],
  },
]

const options = {
  chart: {
    toolbar: {
      style: {
        fontFamily: "IBM Plex Sans",
      },
    },
    animations: {
      easing: "easeout",
      speed: 600,
      animateGradually: {
        delay: 200,
      },
    },
  },
  title: {
    text: "Exits and Returns",
    style: {
      fontSize: "22px",
      fontFamily: "IBM Plex Sans",
    },
  },
  subtitle: {
    text: "Number of people",
    style: {
      fontSize: "18px",
      fontFamily: "IBM Plex Sans",
    },
  },
  colors: ["#266884", "#DE6330"],
  xaxis: {
    categories: ["Children", "Adult 18-25", "Adult 25-62", "Adult 62+"],
    labels: {
      style: {
        fontFamily: "Roboto",
        fontSize: "14px",
      },
    },
  },
  yaxis: {
    labels: {
      align: "left",
      style: {
        fontFamily: "Roboto",
        fontSize: "14px",
      },
    },
  },
  dataLabels: {
    textAnchor: "left",
    offsetX: 20,
    style: {
      fontFamily: "Roboto",
      fontSize: "14px",
      fontWeight: "regular",
      colors: ["#222"],
    },
  },
  legend: {
    position: "top",
    offsetY: -25,
    fontFamily: "Roboto",
    fontSize: "14px",
    markers: {
      width: 28,
      height: 14,
    },
    itemMargin: {
      horizontal: 10,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: { position: "top" },
    },
  },
}

export default {
  title: "Charts/Basic Chart",
}

export const GroupedBarChart = () => (
  <>
    <Chart
      series={data}
      type="bar"
      width="500"
      height="600"
      options={options}
    />
  </>
)
