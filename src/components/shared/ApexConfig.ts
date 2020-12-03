import { ApexOptions } from "apexcharts"

import { ApexOptions } from "apexcharts"

export const globalOptions: ApexOptions = {
  chart: {
    fontFamily: "Roboto, IBM Ples Sans, sans-serif",
  },
  title: {
    style: {
      fontSize: "22px",
      fontFamily: "IBM Plex Sans",
    },
  },
  subtitle: {
    style: {
      fontSize: "18px",
      fontFamily: "IBM Plex Sans",
    },
  },
  colors: ["#266884", "#DE6330"],
  grid: {
    borderColor: "#DDDDDD",
  },
  xaxis: {
    labels: {
      style: {
        fontSize: "14px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        fontSize: "14px",
      },
    },
  },
  dataLabels: {
    style: {
      fontSize: "14px",
      fontWeight: "regular",
    },
  },
  legend: {
    position: "top",
    offsetY: -35,
    fontFamily: "Roboto",
    fontSize: "14px",
    itemMargin: {
      horizontal: 25,
    },
  },
  tooltip: {
    style: {
      fontSize: "14px",
    },
  },
}
