import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { AreaChart } from "../components/charts/AreaChart"

const data = [
  {
    date: "9/15/2020",
    Housing: 39,
    "Disaster Services": 8,
    "Other Government/Economic Services": 4,
    "Food/Meals": 17,
    "COVID-19 Hotline": 4,
  },
  {
    date: "9/16/2020",
    Housing: 26,
    "Disaster Services": 12,
    "Other Government/Economic Services": 4,
    "Food/Meals": 11,
    "COVID-19 Hotline": 5,
  },
  {
    date: "9/17/2020",
    Housing: 25,
    "Disaster Services": 19,
    "Other Government/Economic Services": 9,
    "Food/Meals": 12,
    "COVID-19 Hotline": 5,
  },
  {
    date: "9/18/2020",
    Housing: 30,
    "Disaster Services": 17,
    "Other Government/Economic Services": 38,
    "Food/Meals": 8,
    "COVID-19 Hotline": 16,
  },
  {
    date: "9/19/2020",
    Housing: 3,
    "Disaster Services": 11,
    "Other Government/Economic Services": 12,
    "Food/Meals": 4,
    "COVID-19 Hotline": 8,
  },
  {
    date: "9/20/2020",
    Housing: 4,
    "Disaster Services": 8,
    "Other Government/Economic Services": 2,
    "Food/Meals": 6,
    "COVID-19 Hotline": 3,
  },
  {
    date: "9/21/2020",
    Housing: 32,
    "Disaster Services": 16,
    "Other Government/Economic Services": 9,
    "Food/Meals": 15,
    "COVID-19 Hotline": 8,
  },
]

export default {
  title: "Charts/Area Chart",
  component: AreaChart,
} as Meta

export const StackedAreaChart: React.FC = () => {
  return (
    <>
      <AreaChart
        data={data}
        x={"date"}
        y={[
          "Housing",
          "Disaster Services",
          "Other Government/Economic Services",
          "Food/Meals",
          "COVID-19 Hotline",
        ]}
        colors={["#114d93", "#2eb09f", "#1272e0", "#7ea4cf", "#e6001f"]}
        title="Calls to 211 in the past week"
        subtitle="Number of calls"
        width="800px"
        height="600px"
        stacked={true}
        strokeWidths={1}
      />
    </>
  )
}
