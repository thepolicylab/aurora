import React from "react"
import merge from "deepmerge"

import { ChartWrapper, RecordSet } from "./ChartWrapper"

interface BarChartProps {
  data: string | RecordSet
  x: string
  y: string[]
  colors?: string[]
  xOrder?: string[]
  horizontal?: boolean
  stacked?: boolean
  title: string
  subtitle: string
  min?: number
  max?: number
  width?: string
  height?: string
  showLabels?: boolean
  options?: Record<string, unknown>
}

const makeDataLabelOptions = (stacked: boolean, horizontal: boolean, min: number, max: number) => {
  const labelOptions: Record<string, unknown> = {}
  if (stacked) {
    labelOptions["dataLabels"] = {
      textAnchor: "middle",
      style: {
        colors: ["#FFF"],
      },
    }
  } else {
    if (horizontal) {
      labelOptions["dataLabels"] = {
        textAnchor: "left",
        offsetX: 20,
        style: {
          colors: ["#222"],
        },
      }
    } else {
      labelOptions["dataLabels"] = {
        offsetY: -20,
        style: {
          colors: ["#222"],
        },
      }
    }
  }

  if (horizontal) {
    labelOptions["xaxis"] = {
      min,
      max
    }
  } else {
    labelOptions["yaxis"] = {
      min,
      max
    }
  }
  return labelOptions
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  x,
  y,
  colors,
  xOrder,
  horizontal = false,
  stacked = false,
  title,
  subtitle,
  options = {},
  min = 0,
  max = undefined,
  width = "100%",
  height = "600px",
  showLabels = false,
}: BarChartProps) => {
  const defaultOptions = {
    chart: {
      stacked,
    },
    title: { text: title },
    subtitle: { text: subtitle },
    legend: {
      markers: {
        width: 28,
        height: 14,
      },
    },
    plotOptions: {
      bar: {
        horizontal,
        dataLabels: { 
          enabled: showLabels,
          position: stacked ? "center" : "top" },
      },
    },
  }

  Object.assign(defaultOptions, makeDataLabelOptions(stacked, horizontal, min, max))

  const additionalOptions = merge(defaultOptions, options)

  return (
    <>
      <ChartWrapper
        data={data}
        x={x}
        y={y}
        xOrder={xOrder}
        colors={colors}
        type="bar"
        width={width}
        height={height}
        additionalOptions={additionalOptions}
      />
    </>
  )
}
