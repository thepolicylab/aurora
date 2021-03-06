import React from "react"
import { Meta } from "@storybook/react/types-6-0"
import { Sparkline } from "../components/charts/Sparkline"

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
  title: "Charts/Sparkline",
  component: Sparkline,
} as Meta

export const SparklineWithArea: React.FC = () => {
  return (
    <>
      <Sparkline
        data={data}
        x={"date"}
        y={"Housing"}
        color={"#114d93"}
        width="400px"
        height="200px"
      />
    </>
  )
}

export const SparklineBars: React.FC = () => {
  return (
    <>
      <Sparkline
        data={data}
        x={"date"}
        y={"Housing"}
        type={"bar"}
        color={"#114d93"}
        width="400px"
        height="200px"
      />
    </>
  )
}
