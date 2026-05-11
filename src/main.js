import {
  AmbientLight,
  BufferAttribute,
  BufferGeometry,
  Clock,
  Group,
  IcosahedronGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Points,
  PointsMaterial,
  Scene,
  TorusGeometry,
  TorusKnotGeometry,
  Vector2,
  WebGLRenderer,
} from 'three'
import './style.css'

const base = import.meta.env.BASE_URL

const assets = {
  logo: `${base}assets/jessica-lea-logo.svg`,
  heroPhoto: `${base}assets/jessica-linkedin-keynote-3.jpg`,
  aboutPhoto: `${base}assets/jessica-linkedin-keynote-1.jpg`,
  contactPhoto: `${base}assets/jessica-linkedin-keynote-2.jpg`,
}

document.querySelector('#app').innerHTML = `
  <div class="site-shell">
    <header class="site-header">
      <a class="brand" href="#top" aria-label="Jessica Lea home">
        <img src="${assets.logo}" alt="Jessica Lea logo" />
        <div>
          <span class="brand-name">Jessica Lea</span>
          <span class="brand-tag">Strategy designer and leadership partner</span>
        </div>
      </a>

      <nav class="site-nav" aria-label="Primary">
        <a href="#services">Services</a>
        <a href="#approach">Approach</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <a class="button button-secondary header-cta" href="#contact">Book a discovery call</a>
    </header>

    <main id="top">
      <section class="hero-panel">
        <div class="hero-copy">
          <p class="eyebrow">Three-dimensional thinking for leaders in motion</p>
          <h1>Bring clarity to the business puzzles that are really people puzzles.</h1>
          <p class="hero-text">
            Jessica Lea helps senior leaders see patterns faster, make sharper calls, and move
            teams through complexity with confidence.
          </p>
          <p class="hero-subtext">
            This new concept site pairs Jessica's warm, high-trust brand with a more immersive
            visual system - built for modern consulting, coaching, and transformation work.
          </p>

          <div class="hero-actions">
            <a class="button button-primary" href="#contact">Start the conversation</a>
            <a class="button button-ghost" href="#services">Explore the experience</a>
          </div>

          <div class="insight-rail">
            <article>
              <span>Systems</span>
              <strong>Strategy shaped by how organizations actually behave.</strong>
            </article>
            <article>
              <span>Signal</span>
              <strong>Research, leadership instinct, and facilitation in one room.</strong>
            </article>
            <article>
              <span>Momentum</span>
              <strong>From ambiguous challenge to aligned action.</strong>
            </article>
          </div>
        </div>

        <aside class="signal-card" aria-label="Interactive brand scene">
          <div class="signal-stage">
            <canvas id="signal-canvas" aria-hidden="true"></canvas>
            <div class="stage-copy">
              <p class="card-label">Jessica's edge</p>
              <h2>Strategic depth, visual calm, and human-centered movement.</h2>
              <div class="signal-tags" aria-hidden="true">
                <span>People</span>
                <span>Strategy</span>
                <span>Action</span>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section class="content-section" id="services">
        <div class="section-heading">
          <p class="section-label">What this new site can foreground</p>
          <h2>A more cinematic front door for Jessica's consulting and coaching work.</h2>
        </div>

        <div class="services-grid">
          <article class="feature-card feature-card-wide">
            <p class="card-label">Transformation</p>
            <h3>Strategic transformation design</h3>
            <p>
              Reframe portfolio decisions, operating models, and leadership challenges through a
              stronger visual story and a clearer decision architecture.
            </p>
          </article>
          <article class="feature-card">
            <p class="card-label">Facilitation</p>
            <h3>Executive alignment</h3>
            <p>Turn complex stakeholder conversations into movement, commitment, and next steps.</p>
          </article>
          <article class="feature-card">
            <p class="card-label">Insight</p>
            <h3>Decision support</h3>
            <p>Translate research, market ambiguity, and organizational dynamics into direction.</p>
          </article>
        </div>
      </section>

      <section class="content-section split-section" id="approach">
        <div class="split-copy">
          <p class="section-label">The approach</p>
          <h2>Built around signal, pattern recognition, and practical action.</h2>
          <p>
            The Three.js hero introduces a more dimensional way to express Jessica's value:
            finding shape in complexity without losing warmth, trust, or clarity.
          </p>
          <ol class="process-list">
            <li><span>01</span> Decode the dynamics underneath the visible business problem.</li>
            <li><span>02</span> Design a path leaders can actually align around and execute.</li>
            <li><span>03</span> Facilitate the shift from insight to confidence to movement.</li>
          </ol>
        </div>

        <div class="quote-card">
          <p class="card-label">Why this direction works</p>
          <blockquote>
            A more immersive site can signal sophistication without becoming cold - especially when
            the experience still feels grounded in conversation, clarity, and trust.
          </blockquote>
          <p class="quote-note">Designed from the first Jessica Lea site's palette, imagery, and tone.</p>
        </div>
      </section>

      <section class="content-section about-section" id="about">
        <div class="about-grid">
          <div class="photo-panel">
            <img src="${assets.aboutPhoto}" alt="Jessica Lea speaking on stage" />
          </div>

          <div class="about-copy">
            <p class="section-label">About Jessica Lea</p>
            <h2>Strategy, transformation, and leadership support with real human range.</h2>
            <p>
              Jessica Lea works across healthcare, pharma, and consumer sectors to connect insight,
              organizational behavior, and strategic movement. She brings the range of a scientist,
              strategist, facilitator, and operator to the same conversation.
            </p>
            <p>
              This concept pushes that positioning into a more premium digital format without losing
              the grounded tone of the original site.
            </p>
          </div>
        </div>
      </section>

      <section class="content-section contact-section" id="contact">
        <div class="contact-copy">
          <p class="section-label">Next step</p>
          <h2>Ready to turn this concept into a launch-ready lead engine?</h2>
          <p>
            Replace the placeholder details below with Jessica's preferred booking flow, email, and
            social links to publish this as a polished public-facing site.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="mailto:your-email@example.com">Email Jessica</a>
            <a class="button button-ghost" href="https://your-calendar-link.com">Open booking link</a>
          </div>
        </div>

        <div class="contact-card">
          <div class="contact-photo-panel">
            <img src="${assets.contactPhoto}" alt="Jessica Lea at a keynote event" />
          </div>
          <p class="contact-line"><span>Email</span> your-email@example.com</p>
          <p class="contact-line"><span>Booking</span> your-calendar-link.com</p>
          <p class="contact-line"><span>LinkedIn</span> linkedin.com/in/your-profile</p>
        </div>
      </section>
    </main>
  </div>
`

setupSignalScene()

function setupSignalScene() {
  const canvas = document.querySelector('#signal-canvas')
  const stage = document.querySelector('.signal-stage')

  if (!canvas || !stage) {
    return
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const renderer = new WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8))

  const scene = new Scene()
  const camera = new PerspectiveCamera(32, 1, 0.1, 100)
  camera.position.set(0, 0.2, 8.5)

  const root = new Group()
  scene.add(root)

  const ambient = new AmbientLight(0xffffff, 1.3)
  scene.add(ambient)

  const key = new PointLight(0xffffff, 16, 30)
  key.position.set(4.5, 4.5, 7)
  scene.add(key)

  const fill = new PointLight(0x36a4aa, 14, 32)
  fill.position.set(-5, -3, 6)
  scene.add(fill)

  const knot = new Mesh(
    new TorusKnotGeometry(1.75, 0.33, 220, 32, 3, 5),
    new MeshStandardMaterial({
      color: 0x2b5682,
      roughness: 0.24,
      metalness: 0.42,
      emissive: 0x13263a,
      emissiveIntensity: 0.4,
    }),
  )
  knot.rotation.x = 0.8
  knot.rotation.z = 0.2
  root.add(knot)

  const halo = new Mesh(
    new TorusGeometry(2.75, 0.045, 12, 220),
    new MeshBasicMaterial({
      color: 0xdaa255,
      transparent: true,
      opacity: 0.88,
    }),
  )
  halo.rotation.x = Math.PI / 2.5
  root.add(halo)

  const shell = new Mesh(
    new IcosahedronGeometry(1.35, 1),
    new MeshBasicMaterial({
      color: 0x8d40aa,
      wireframe: true,
      transparent: true,
      opacity: 0.72,
    }),
  )
  root.add(shell)

  const pointCount = 900
  const positions = new Float32Array(pointCount * 3)

  for (let i = 0; i < pointCount; i += 1) {
    const stride = i * 3
    const radius = 3.4 + Math.random() * 1.8
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)

    positions[stride] = radius * Math.sin(phi) * Math.cos(theta)
    positions[stride + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[stride + 2] = radius * Math.cos(phi)
  }

  const particles = new Points(
    new BufferGeometry(),
    new PointsMaterial({
      color: 0x754098,
      size: 0.045,
      transparent: true,
      opacity: 0.5,
    }),
  )
  particles.geometry.setAttribute('position', new BufferAttribute(positions, 3))
  scene.add(particles)

  const pointer = new Vector2(0, 0)

  const handlePointerMove = (event) => {
    const bounds = stage.getBoundingClientRect()
    pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
    pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
  }

  window.addEventListener('pointermove', handlePointerMove)

  const resize = () => {
    const { clientWidth, clientHeight } = stage
    renderer.setSize(clientWidth, clientHeight, false)
    camera.aspect = clientWidth / clientHeight
    camera.updateProjectionMatrix()
  }

  const resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(stage)
  resize()

  const clock = new Clock()

  const animate = () => {
    const elapsed = clock.getElapsedTime()

    if (!prefersReducedMotion) {
      root.rotation.y = elapsed * 0.25 + pointer.x * 0.22
      root.rotation.x = Math.sin(elapsed * 0.45) * 0.12 + pointer.y * 0.12
      knot.rotation.z = elapsed * 0.2
      halo.rotation.z = elapsed * 0.28
      particles.rotation.y = -elapsed * 0.045
      particles.rotation.x = elapsed * 0.025
    }

    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }

  animate()
}
