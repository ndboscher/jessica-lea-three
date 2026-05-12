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
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))

  const scene = new Scene()
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1)

  const pointer = new Vector2(0.5, 0.5)
  const targetPointer = new Vector2(0.5, 0.5)
  const imageResolution = new Vector2(800, 533)
  const resolution = new Vector2(1, 1)

  const texture = new TextureLoader().load(assets.heroPhoto, (loadedTexture) => {
    loadedTexture.colorSpace = SRGBColorSpace
    const { image } = loadedTexture

    if (image?.width && image?.height) {
      imageResolution.set(image.width, image.height)
    }
  })
  texture.colorSpace = SRGBColorSpace

  const material = new ShaderMaterial({
    uniforms: {
      uTexture: { value: texture },
      uTime: { value: 0 },
      uPointer: { value: pointer.clone() },
      uResolution: { value: resolution },
      uImageResolution: { value: imageResolution },
      uMotion: { value: prefersReducedMotion ? 0 : 1 },
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
      uniform vec2 uPointer;
      uniform vec2 uResolution;
      uniform vec2 uImageResolution;
      uniform float uTime;
      uniform float uMotion;

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

      float scanBand(float y, float center, float width) {
        return smoothstep(center - width, center, y) - smoothstep(center, center + width, y);
      }

      void main() {
        vec2 uv = vUv;
        float scan = 0.74 - fract(uTime * 0.075 * max(uMotion, 0.15));
        float band = scanBand(uv.y, scan, 0.16);
        float wave = sin((uv.y - scan) * 42.0 - uTime * 7.0 * max(uMotion, 0.2)) * band * 0.012;
        float pointerInfluence = (uPointer.x - 0.5) * 0.03 * (0.35 + uv.y * 0.65);

        vec2 distortedUv = uv;
        distortedUv.x += wave + pointerInfluence;
        distortedUv.y += (uPointer.y - 0.5) * 0.022;

        vec2 sampleUv = coverUv(distortedUv, uResolution, uImageResolution);

        float chroma = band * 0.008;
        vec3 color;
        color.r = texture2D(uTexture, sampleUv + vec2(chroma, 0.0)).r;
        color.g = texture2D(uTexture, sampleUv).g;
        color.b = texture2D(uTexture, sampleUv - vec2(chroma, 0.0)).b;

        float scanLines = 0.5 + 0.5 * sin(uv.y * uResolution.y * 0.18 - uTime * 18.0 * max(uMotion, 0.2));
        color += band * vec3(0.08, 0.02, 0.07);
        color += band * scanLines * vec3(0.12, 0.08, 0.02) * 0.18;

        float glow = smoothstep(0.24, 0.0, abs(uv.y - scan));
        color += glow * vec3(0.06, 0.02, 0.08) * 0.34;

        float vignette = smoothstep(1.08, 0.3, distance(uv, vec2(0.5)));
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
    material.uniforms.uTime.value = elapsed

    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }

  animate()
}
