import React from "react"
import merge from "deepmerge"

import { ChartWrapper } from "./ChartWrapper"
import { LineChartProps, makeSeries, makeDefaultOptions } from "./LineChart"

interface AreaChartProps extends LineChartProps {
  stacked?: boolean
}

export const AreaChart: React.FC<AreaChartProps> = ({
  data,
  x,
  y,
  colors,
  strokeWidths = 1,
  dashTypes = 0,
  curved = false,
  markerSizes = 0,
  stacked = false,
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

  const defaultOptions = makeDefaultOptions(
    strokeWidths,
    dashTypes,
    curved,
    markerSizes,
    xMin,
    xMax,
    yMin,
    yMax
  )

  Object.assign(defaultOptions, {
    chart: {
      stacked,
    },
    dataLabels: {
      enabled: false,
    },
  })

  const additionalOptions = merge(defaultOptions, options)

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
