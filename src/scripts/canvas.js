import Webgl from './webgl/Webgl'

export const initialize = () => {
  const webgl = new Webgl()
  webgl.start()
}
