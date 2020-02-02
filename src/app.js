import App from './components/App.vue'

const appInfo = {
  name: 'Pong',
  id: 'pong',
  icon: 'play_arrow',
  isFileEditor: false
}

const navItems = [
  {
    name: 'pong',
    iconMaterial: appInfo.icon,
    route: {
      name: 'pong',
      path: `/${appInfo.id}/`
    }
  }
]

const routes = [
  {
    name: 'pong',
    path: '/',
    components: {
      fullscreen: App
    },
    meta: {
      hideHeadbar: true
    }
  }
]

export default {
  appInfo,
  navItems,
  routes
}
