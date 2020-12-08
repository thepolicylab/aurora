import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { BarChartCSV } from "../components/charts"

const data = "/data/exits-and-returns.csv"

export default {
  title: "CSVWrappers/Bar Chart",
  component: BarChartCSV,
} as Meta

export const HorizontalBarChart: React.FC = () => (
  <BarChartCSV
    data={data}
    x={"Categories"}
    y={["Exits", "Returns"]}
    horizontal={true}
    colors={["#60BDC5", "#FEC601"]}
    title={"Exits and Returns"}
    subtitle={"Number of people"}
    max={1800}
    width={"500"}
    height={"600"}
  />
)

export const StandardBarChart: React.FC = () => (
  <BarChartCSV
    data={data}
    x={"Categories"}
    y={["Exits", "Returns"]}
    horizontal={false}
    title={"Exits and Returns"}
    subtitle={"Number of people"}
    max={1600}
    width={"600"}
    height={"500"}
  />
)

export const StackedHorizontalBarChart: React.FC = () => (
  <BarChartCSV
    data={data}
    x={"Categories"}
    y={["Exits", "Returns"]}
    stacked={true}
    horizontal={true}
    colors={["#60BDC5", "#FEC601"]}
    title={"Exits and Returns"}
    subtitle={"Number of people"}
    max={1800}
    width={"500"}
    height={"600"}
  />
)

export const StandardStackedBarChart: React.FC = () => (
  <BarChartCSV
    data={data}
    x={"Categories"}
    y={["Exits", "Returns"]}
    stacked={true}
    horizontal={false}
    title={"Exits and Returns"}
    subtitle={"Number of people"}
    width={"500"}
    height={"600"}
  />
)
