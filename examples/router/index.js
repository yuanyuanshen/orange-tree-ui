import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'guid',
      component: r => require.ensure([], () => r(require('../docs/guid.md')))
    },
    {
      path: '/button',
      name: 'button',
      component: r => require.ensure([], () => r(require('../docs/button.md')))
    },
    {
      path: '/guid',
      name: 'guid',
      component: r => require.ensure([], () => r(require('../docs/guid.md')))
    },
    {
      path: '/install',
      name: 'install',
      component: r => require.ensure([], () => r(require('../docs/install.md')))
    },
    {
      path: '/logs',
      name: 'logs',
      component: r => require.ensure([], () => r(require('../docs/logs.md')))
    },
    {
      path: '/icon',
      name: 'icon',
      component: r => require.ensure([], () => r(require('../docs/icon.md')))
    },
    {
      path: '/build',
      name: 'build',
      component: r =>
        require.ensure([], () => r(require('../docs/projectbuild.md')))
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: r => require.ensure([], () => r(require('../docs/dialog.md')))
    },
    {
      path: '/table',
      name: 'table',
      component: r => require.ensure([], () => r(require('../docs/table.md')))
    },
    {
      path: '/message',
      name: 'message',
      component: r => require.ensure([], () => r(require('../docs/message.md')))
    },
    {
      path: '/tooltip',
      name: 'tooltip',
      component: r => require.ensure([], () => r(require('../docs/tooltip.md')))
    },
    {
      path: '/tab',
      name: 'tab',
      component: r => require.ensure([], () => r(require('../docs/tab.md')))
    }
  ]
})
