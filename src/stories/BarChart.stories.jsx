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

// const data1 = [
//   {
//     "Week": "9/15 - 9/21",
//     "Total number of comments": 49
//   },
//   {
//     "Week": "9/22 - 9/28",
//     "Total number of comments": 117
//   },
//   {
//     "Week": "9/29 - 10/5",
//     "Total number of comments": 79
//   },
//   {
//     "Week": "10/6 - 10/12",
//     "Total number of comments": 69
//   },
//   {
//     "Week": "10/13-10/19",
//     "Total number of comments": 18
//   },
//   {
//     "Week": "10/20 - 10/26",
//     "Total number of comments": 46
//   },
//   {
//     "Week": "10/27 - 11/2",
//     "Total number of comments": 110
//   },
//   {
//     "Week": "11/3 - 11/9",
//     "Total number of comments": 157
//   },
//   {
//     "Week": "11/10 - 11/16",
//     "Total number of comments": 83
//   },
//   {
//     "Week": "11/17 - 11/23",
//     "Total number of comments": 93
//   },
//   {
//     "Week": "11/24 - 11/30",
//     "Total number of comments": 47
//   }
// ]

// const args2 = {
//   data: data1,
//   x: "Week",
//   y: ["Total number of comments"],
//   title: "Open-ended comments by week",
//   subtitle: "Number of comments",
//   width: "700px",
//   height: "500px",
//   max: 170,
//   colors: [NarwhalBlue["600"]],
// }

// export const RotatedLabels = Template.bind({})
// RotatedLabels.args = args2