import { ApexOptions } from "apexcharts"
import {
  NarwhalBlue,
  GreenField,
  OceanTeal,
  SoftCoral,
  SciLiBrown,
  DyerGray,
} from "../../colors"

const titleFont = "franklin-gothic-atf, sans-serif"
const chartFont = "franklin-gothic-atf, sans-serif"

const titleSize = "24px"
const subtitleSize = "18px"

const defaultPalette = [
  NarwhalBlue["300"],
  GreenField["300"],
  OceanTeal["500"],
  SoftCoral["300"],
  NarwhalBlue["600"],
  SoftCoral["500"],
  SciLiBrown["500"],
  OceanTeal["700"],
  GreenField["200"],
  GreenField["500"],
  DyerGray["300"],
]

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
