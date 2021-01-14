import { ApexOptions } from "apexcharts"

const titleFont = "franklin-gothic-atf, sans-serif"
const chartFont = "franklin-gothic-atf, sans-serif"

const titleSize = "24px"
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
      fontWeight: "medium",
      color: "#171717",
    },
  },
  subtitle: {
    style: {
      fontSize: subtitleSize,
      fontFamily: titleFont,
      fontWeight: "medium",
      color: "#757575",
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
        colors: "#919191",
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
    fontFamily: chartFont,
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
