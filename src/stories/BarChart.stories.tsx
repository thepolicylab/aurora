import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { BarChart } from "../components/charts/BarChart"
import { SeaBlue, NewportPlum } from "../colors"

const data = [
  { category: "Children", Exits: 569, Returns: 55 },
  { category: "Adult 18-25", Exits: 178, Returns: 18 },
  { category: "Adult 25-62", Exits: 1535, Returns: 199 },
  { category: "Adult 62+", Exits: 176, Returns: 26 },
]

export default {
  title: "Charts/Bar Chart",
  component: BarChart,
} as Meta

export const HorizontalBarChart: React.FC = () => (
  <>
    <BarChart
      data={data}
      x={"category"}
      y={["Exits", "Returns"]}
      horizontal={true}
      colors={[SeaBlue["500"], NewportPlum["500"]]}
      title={"Exits and Returns"}
      subtitle={"Number of people"}
      max={1800}
      width={"500"}
      height={"600"}
    />
  </>
)

export const StandardBarChart: React.FC = () => (
  <>
    <BarChart
      data={data}
      x={"category"}
      y={["Exits", "Returns"]}
      horizontal={false}
      title={"Exits and Returns"}
      subtitle={"Number of people"}
      max={1600}
      width={"600"}
      height={"500"}
    />
  </>
)

export const StackedHorizontalBarChart: React.FC = () => (
  <>
    <BarChart
      data={data}
      x={"category"}
      y={["Exits", "Returns"]}
      stacked={true}
      horizontal={true}
      colors={[SeaBlue["500"], NewportPlum["500"]]}
      title={"Exits and Returns"}
      subtitle={"Number of people"}
      max={1800}
      width={"500"}
      height={"600"}
    />
  </>
)

export const StandardStackedBarChart: React.FC = () => (
  <>
    <BarChart
      data={data}
      x={"category"}
      y={["Exits", "Returns"]}
      stacked={true}
      horizontal={false}
      title={"Exits and Returns"}
      subtitle={"Number of people"}
      width={"500"}
      height={"600"}
    />
  </>
)
