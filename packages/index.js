import { OButton, OButtonGroup } from './button/index.js'
import ODialog from './dialog/index.js'
import OTableColumn from './table-column/index.js'
import OTable from './table/index.js'
import Message from './message/index.js'
import OTooltip from './tooltip/index.js'
import OTabs from './tab/index.js'
import OTabPane from './tab-pannel/index.js'

const components = [
  OButton,
  OButtonGroup,
  OTable,
  OTableColumn,
  ODialog,
  OTooltip,
  OTabPane,
  OTabs
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  Vue.prototype.$message = Message
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  OButton,
  OTable,
  OTableColumn,
  ODialog,
  OTooltip,
  OTabPane,
  OTabs
}
export {
  install,
  OButton,
  OTable,
  OTableColumn,
  ODialog,
  OTooltip,
  OTabPane,
  OTabs
}
