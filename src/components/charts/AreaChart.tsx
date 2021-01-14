import React from "react"
import merge from "deepmerge"

import { ChartWrapper } from "./ChartWrapper"
import { LineChartProps, makeSeries, makeBaseOptions } from "./LineChart"

export interface AreaChartProps extends LineChartProps {
  stacked?: boolean,
  gradient?: boolean,
}

export const AreaChart: React.FC<AreaChartProps> = ({
  data,
  x,
  y,
  colors,
  strokeWidths = 0,
  dashTypes = 0,
  curved = false,
  markerSize = 0,
  stacked = false,
  gradient = false,
  title,
  subtitle,
  xLab,
  yLab,
  xMin,
  xMax,
  yMin,
  yMax,
  width = "100%",
  height = "600px",
  options = {},
}: AreaChartProps) => {
  const series = makeSeries(data, x, y)

  const baseOptions = makeBaseOptions(
    strokeWidths,
    dashTypes,
    curved,
    markerSize,
    xMin,
    xMax,
    yMin,
    yMax
  )

  Object.assign(baseOptions, {
    chart: {
      stacked,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: strokeWidths !== 0,
      width: strokeWidths,
      curve: curved ? "smooth" : "straight",
    },
    fill: {
      type: gradient ? "gradient" : "fill",
    },
  })

  console.log(options)

  const additionalOptions = merge(baseOptions, options)
  console.log(additionalOptions)

  return (
    <>
      <ChartWrapper
        series={series}
        type="area"
        colors={colors}
        title={title}
        subtitle={subtitle}
        xLab={xLab}
        yLab={yLab}
        width={width}
        height={height}
        options={additionalOptions}
      />
    </>
  )
}
