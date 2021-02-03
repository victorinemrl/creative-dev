import { Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, SpotLight, TextureLoader, SpriteMaterial, Sprite, PlaneGeometry, MeshBasicMaterial, Mesh, CircleGeometry, Raycaster, Vector2 } from 'three'
import Dots from './objects/dots/Dots'

export default class Webgl {
  constructor () {
    this.start = this.start.bind(this)
    this.onResize = this.onResize.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.select = this.select.bind(this)

    this.scene = new Scene()
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.renderer = new WebGLRenderer({ alpha: true })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    document.querySelector('.homeCanvas').appendChild(this.renderer.domElement)
    this.light = new AmbientLight(0x404040, 2) // soft white light
    this.scene.add(this.light)
    this.spotlight = new SpotLight(0xffffff)
    this.spotlight.position.set(10, 10, -10)
    this.scene.add(this.spotlight)
    this.camera.position.z = 5

    this.raycaster = new Raycaster()
    this.mouse = new Vector2()

    let geometry = new PlaneGeometry(2, 2, 2)
    let material = new MeshBasicMaterial({ color: 0x7ea58a })
    let plane = new Mesh(geometry, material)
    plane.position.x += 3
    plane.position.y -= 1
    this.scene.add(plane)

    let map = new TextureLoader().load(require('@/assets/' + 'paint' + '.png'))
    material = new SpriteMaterial({ map: map, color: 0xffffff })
    let sprite = new Sprite(material)
    sprite.scale.set(5.5, 5.5, 1)
    sprite.position.x += 3
    sprite.position.y -= 0.5
    this.scene.add(sprite)

    geometry = new PlaneGeometry(1, 1, 2)
    material = new MeshBasicMaterial({ color: 0xe9e9e9 })
    plane = new Mesh(geometry, material)
    plane.position.x += 0.5
    plane.position.y += 0.5
    this.scene.add(plane)

    geometry = new CircleGeometry(1, 32)
    material = new MeshBasicMaterial({ color: 0xFCE1DD })
    let circle = new Mesh(geometry, material)
    circle.position.x += 1
    circle.position.y += 2.3
    this.scene.add(circle)

    circle = new Mesh(geometry, material)
    circle.scale.set(0.5, 0.5, 1)
    circle.position.y -= 1.8
    this.scene.add(circle)

    circle = new Mesh(geometry, material)
    circle.scale.set(0.2, 0.2, 1)
    circle.position.x -= 1
    circle.position.y -= 2.5
    this.scene.add(circle)

    const dots = new Dots(+0.5, -1.2)
    dots.createDots().forEach(Element => this.scene.add(Element))

    map = new TextureLoader().load(require('@/assets/silhouette.png'))
    material = new SpriteMaterial({ map: map, color: 0xffffff })
    sprite = new Sprite(material)
    sprite.scale.set(2.5, 7.5, 1)
    sprite.position.x += 2
    this.scene.add(sprite)
    this.time = 0

    window.addEventListener('resize', this.onResize)
    window.addEventListener('mousemove', this.onMouseMove, false)
    window.addEventListener('mouseover', this.select, false)
  }

  onMouseMove (event) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
  }

  select (event) {
    this.raycaster.setFromCamera(this.mouse, this.camera)
    let right = true
    // calculate objects intersecting the picking ray
    const intersects = this.raycaster.intersectObjects(this.scene.children)
    for (let i = 0; i < intersects.length; i++) {
      if (right) {
        intersects[i].object.position.x += 1
        right = false
      } else {
        intersects[i].object.position.x -= 1
      }
    }
  }

  onResize () {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  start () {
    requestAnimationFrame(this.start)
    this.time += 0.01

    this.renderer.render(this.scene, this.camera)
  }
}
