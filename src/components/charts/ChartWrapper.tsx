import React, { useState, useEffect } from "react"
import Chart from "react-apexcharts"
import merge from "deepmerge"
import { globalOptions } from "../shared/ApexConfig"
import { csv as d3_csv } from "d3"

type RecordEntry = Record<string, string | number>

export type RecordSet = RecordEntry[]

interface SeriesEntry {
  name: string
  data: (string | number)[]
}

type Series = SeriesEntry[]

interface ChartWrapperProps {
  data: string | RecordSet
  x: string
  y: string[]
  xOrder?: string[]
  type: "line" | "area" | "bar"
  additionalOptions: Record<string, unknown>
  colors?: string[]
  width?: string
  height?: string
}

const sortFieldByArrayIndex = (
  arr: RecordSet,
  order: unknown[],
  field: string
): RecordSet => {
  const newArr = [...arr]
  newArr.sort(
    (a: RecordEntry, b: RecordEntry) =>
      order.indexOf(a[field]) - order.indexOf(b[field])
  )
  return newArr
}

const makeSeriesAndLabels = (
  data: RecordSet,
  x: string,
  y: string[]
): [Series, string[]] => {
  console.log(data)
  const series = y.map(label => ({
    name: label,
    data: data.map(entry => entry[label]),
  }))

  return [series, data.map(entry => entry[x] as string)]
}

export const ChartWrapper: React.FC<ChartWrapperProps> = ({
  data,
  x,
  y,
  xOrder,
  type,
  additionalOptions,
  colors,
  width,
  height,
}) => {
  const [chartState, setChartState] = useState({
    series: null,
    options: colors
      ? {
          ...merge(globalOptions, additionalOptions),
          colors,
        }
      : merge(globalOptions, additionalOptions),
  })

  useEffect(() => {
    if (typeof data === "string") {
      const fetchData = async (dataPath: string) => {
        const loadedData = await d3_csv(dataPath)
        const sortedData = xOrder
          ? sortFieldByArrayIndex(loadedData, xOrder, x)
          : [...loadedData]
        const [computedSeries, labels] = makeSeriesAndLabels(sortedData, x, y)
        setChartState(state => ({
          series: computedSeries,
          options: Object.assign(state.options, { labels }),
        }))
      }
      fetchData(data)
    } else {
      const sortedData = xOrder
        ? sortFieldByArrayIndex(data, xOrder, x)
        : [...data]
      const [computedSeries, labels] = makeSeriesAndLabels(sortedData, x, y)
      setChartState(state => ({
        series: computedSeries,
        options: Object.assign(state.options, { labels }),
      }))
    }
  }, [data])

  return (
    <>
      {chartState.series && (
        <Chart
          series={chartState.series}
          type={type}
          width={width}
          height={height}
          options={chartState.options}
        />
      )}
    </>
  )
}
