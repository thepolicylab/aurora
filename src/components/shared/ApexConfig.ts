import { ApexOptions } from "apexcharts"

const titleFont = "IBM Plex Sans"
const chartFont = "Roboto, IBM Plex Sans, sans-serif"

const titleSize = "22px"
const subtitleSize = "18px"

const defaultPalette = ["#266884", "#DE6330"]

export const globalOptions: ApexOptions = {
  chart: {
    fontFamily: chartFont,
  },
  title: {
    style: {
      fontSize: titleSize,
      fontFamily: titleFont,
    },
  },
  subtitle: {
    style: {
      fontSize: subtitleSize,
      fontFamily: titleFont,
    },
  },
  colors: defaultPalette,
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
