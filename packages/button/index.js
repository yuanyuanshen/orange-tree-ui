import OButton from './src/button.vue'
import OButtonGroup from './src/buttonGroup.vue'

OButton.install = function (Vue) {
  Vue.component(OButton.name, OButton)
}

OButtonGroup.install = function (Vue) {
  Vue.component(OButtonGroup.name, OButtonGroup)
}

export default OButton
export { OButton, OButtonGroup }
