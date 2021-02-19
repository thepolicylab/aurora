import "../src/assets/fonts.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ["Intro", ["Introduction", "Design System Overview", "Creating Charts"], "Charts", ["Bar Chart", "Line Chart", "Area Chart", "Sparkline"]],
    },
  },
}
