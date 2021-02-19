import React from "react"
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
}

const Template = (args) => <BarChart {...args} />

const standardArgs = {
  data: data,
  x: "category",
  y: ["Exits", "Returns"],
  colors: [SeaBlue["500"], NewportPlum["500"]],
  title: "Exits and Returns",
  subtitle: "Number of people",
  max: 1800,
  width: "600px",
  height: "500px"
}

const stackedArgs = { ...standardArgs, stacked: true }

const horizontalArgs = {
  ...standardArgs,
  horizontal: true,
  width: "500px",
  height: "600px"
}

const horizontalStackedArgs = {
  ...horizontalArgs,
  stacked: true,
  width: "500px",
  height: "600px"
}

export const StandardBarChart = Template.bind({})
StandardBarChart.args = standardArgs

export const HorizontalBarChart = Template.bind({})
HorizontalBarChart.args = horizontalArgs

export const StackedBarChart = Template.bind({})
StackedBarChart.args = stackedArgs

export const HorizontalStackedBarChart = Template.bind({})
HorizontalStackedBarChart.args = horizontalStackedArgs