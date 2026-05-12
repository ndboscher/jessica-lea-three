import {
  Clock,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  SRGBColorSpace,
  TextureLoader,
  Vector2,
  WebGLRenderer,
} from 'three'
import './style.css'

const base = import.meta.env.BASE_URL

const assets = {
  logo: `${base}assets/jessica-lea-logo.svg`,
  heroPhoto: `${base}assets/jessica-linkedin-keynote-3.jpg`,
  heroDepth: `${base}assets/jessica-linkedin-keynote-3-depth.png`,
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
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))

  const scene = new Scene()
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1)

  const pointer = new Vector2(0.5, 0.5)
  const targetPointer = new Vector2(0.5, 0.5)
  const imageResolution = new Vector2(800, 533)
  const resolution = new Vector2(1, 1)

  const loader = new TextureLoader()
  const texture = loader.load(assets.heroPhoto, (loadedTexture) => {
    loadedTexture.colorSpace = SRGBColorSpace
    const { image } = loadedTexture

    if (image?.width && image?.height) {
      imageResolution.set(image.width, image.height)
    }
  })
  texture.colorSpace = SRGBColorSpace
  const depthTexture = loader.load(assets.heroDepth)

  const material = new ShaderMaterial({
    uniforms: {
      uTexture: { value: texture },
      uDepthTexture: { value: depthTexture },
      uProgress: { value: 0 },
      uPointer: { value: pointer.clone() },
      uResolution: { value: resolution },
      uImageResolution: { value: imageResolution },
    },
    vertexShader: `
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;

      uniform sampler2D uTexture;
      uniform sampler2D uDepthTexture;
      uniform vec2 uPointer;
      uniform vec2 uResolution;
      uniform vec2 uImageResolution;
      uniform float uProgress;

      vec2 coverUv(vec2 uv, vec2 resolution, vec2 imageResolution) {
        float screenRatio = resolution.x / resolution.y;
        float imageRatio = imageResolution.x / imageResolution.y;

        vec2 scaledSize = screenRatio < imageRatio
          ? vec2(imageResolution.x * resolution.y / imageResolution.y, resolution.y)
          : vec2(resolution.x, imageResolution.y * resolution.x / imageResolution.x);

        vec2 offset = screenRatio < imageRatio
          ? vec2((scaledSize.x - resolution.x) * 0.5, 0.0)
          : vec2(0.0, (scaledSize.y - resolution.y) * 0.5);

        return (uv * resolution + offset) / scaledSize;
      }

      float rectMask(vec2 point, vec2 halfSize) {
        vec2 edge = smoothstep(halfSize, halfSize - vec2(0.025), abs(point));
        return edge.x * edge.y;
      }

      float crossMask(vec2 point) {
        float horizontal = rectMask(point, vec2(0.28, 0.025));
        float vertical = rectMask(point, vec2(0.025, 0.28));
        return max(horizontal, vertical);
      }

      vec3 screenBlend(vec3 base, vec3 blend) {
        return 1.0 - (1.0 - base) * (1.0 - blend);
      }

      void main() {
        vec2 uv = vUv;
        vec2 pointer = (uPointer - 0.5) * 2.0;
        vec2 sampleUv = coverUv(uv, uResolution, uImageResolution);

        float depthSample = texture2D(uDepthTexture, sampleUv).r;
        vec2 displacedUv = coverUv(
          uv + depthSample * pointer * 0.012,
          uResolution,
          uImageResolution
        );

        vec3 baseColor = texture2D(uTexture, displacedUv).rgb * 0.68;

        float aspect = uResolution.x / uResolution.y;
        vec2 tiled = fract(vec2(uv.x * aspect, uv.y) * 50.0) * 2.0 - 1.0;
        float scanShape = crossMask(tiled);
        float flow = 1.0 - smoothstep(0.0, 0.028, abs((1.0 - depthSample) - uProgress));

        vec3 scanColor = vec3(1.2, 1.15, 1.1) * scanShape * flow;
        vec3 color = screenBlend(baseColor, scanColor);

        float vignette = smoothstep(1.12, 0.18, distance(uv, vec2(0.5)));
        color *= vignette;

        gl_FragColor = vec4(color, 1.0);
      }
    `,
  })

  const imagePlane = new Mesh(new PlaneGeometry(2, 2), material)
  scene.add(imagePlane)

  const handlePointerMove = (event) => {
    const bounds = stage.getBoundingClientRect()
    targetPointer.x = (event.clientX - bounds.left) / bounds.width
    targetPointer.y = (event.clientY - bounds.top) / bounds.height
  }

  const handlePointerLeave = () => {
    targetPointer.set(0.5, 0.5)
  }

  stage.addEventListener('pointermove', handlePointerMove)
  stage.addEventListener('pointerleave', handlePointerLeave)

  const resize = () => {
    const { clientWidth, clientHeight } = stage
    renderer.setSize(clientWidth, clientHeight, false)
    resolution.set(clientWidth, clientHeight)
    material.uniforms.uResolution.value = resolution
  }

  const resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(stage)
  resize()

  const clock = new Clock()

  const animate = () => {
    const elapsed = clock.getElapsedTime()

    pointer.lerp(targetPointer, prefersReducedMotion ? 1 : 0.08)
    material.uniforms.uPointer.value.copy(pointer)
    material.uniforms.uProgress.value = prefersReducedMotion ? 0.62 : (elapsed * 0.3) % 1

    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }

  animate()
}
