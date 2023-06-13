import { useEffect } from 'react'
import * as THREE from 'three'

const Flag = () => {
  const flagThree = () => {
    var renderer: any, planeBuffer: any, scene: any, camera: any, planeBuffer: any
    init()
    animate()

    function init() {
      const section: any = document.querySelector('section.flag')
      // Renderer.
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(window.innerWidth, window.innerHeight)

      // Create camera.
      camera = new THREE.PerspectiveCamera(50, section.clientWidth / section.clientHeight, 0.1, 1000)
      camera.position.z = 40

      // Create scene.
      scene = new THREE.Scene()

      const loader = new THREE.TextureLoader()
      const material = new THREE.MeshBasicMaterial({
        opacity: 0,
        transparent: true,
        map: loader.load('/flag.jpeg', () => {
          material.opacity = 1
        })
      })
      const geometry = new THREE.PlaneGeometry(22, 15, 35)
      planeBuffer = new THREE.Mesh(geometry, material)
      scene.add(planeBuffer)
      planeBuffer.rotation.set(-0.1, 0, -0.1)

      // Add listener for window resize.
      window.addEventListener('resize', function () {
        camera.aspect = section.clientWidth / section.clientHeight
        camera.updateProjectionMatrix()
        renderer.setSize(section.clientWidth, section.clientHeight)
      })

      // Add element dom
      section.appendChild(renderer.domElement)
    }

    function animate() {
      requestAnimationFrame(animate)
      wavesBuffer(0.6, 2)
      renderer.render(scene, camera)
    }

    function wavesBuffer(waveSize: any, magnitude: any) {
      const theTime = performance.now() * 0.001
      const pos = planeBuffer.geometry.attributes.position

      let center = new THREE.Vector3(0, 0, 0)
      var vec3 = new THREE.Vector3()
      for (var i = 0, l = pos.count; i < l; i++) {
        vec3.fromBufferAttribute(pos, i)
        vec3.sub(center)

        const z = Math.sin(vec3.length() / -waveSize + theTime) * magnitude

        pos.setZ(i, z)
      }

      pos.needsUpdate = true
    }
  }

  useEffect(() => {
    flagThree()
  }, [])

  return <section className='flag hidden md:block'></section>
}

export default Flag
