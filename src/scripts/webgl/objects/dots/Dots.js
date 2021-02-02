import { MeshBasicMaterial, Mesh, CircleGeometry, Vector2 } from 'three'

export default class Dots {
  constructor (x, y) {
    this.createDots = this.createDots.bind(this)
    console.log(x)
    this.position = new Vector2(x, y)
  }

  createDots () {
    const allDots = []
    for (let i = 0; i < 17; i++) {
      for (let j = 0; j < 17; j++) {
        const geometry = new CircleGeometry(0.02, 32)
        const material = new MeshBasicMaterial({ color: 0xafafaf })
        const circle = new Mesh(geometry, material)
        circle.position.x = this.position.x + i * 0.2
        circle.position.y = this.position.y + j * 0.2
        allDots.push(circle)
      }
    }
    return allDots
  }
}
