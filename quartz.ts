import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    const orderA = a.data?.frontmatter?.order as number | undefined
    const orderB = b.data?.frontmatter?.order as number | undefined

    // both have an explicit order -> use it
    if (orderA !== undefined && orderB !== undefined) {
      return orderA - orderB
    }
    // ordered items come before unordered ones
    if (orderA !== undefined) return -1
    if (orderB !== undefined) return 1

    // fallback: folders before files, then alphabetical
    if (!!a.file !== !!b.file) {
      return a.file ? 1 : -1
    }
    return a.displayName.localeCompare(b.displayName, undefined, { numeric: true, sensitivity: "base" })
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()