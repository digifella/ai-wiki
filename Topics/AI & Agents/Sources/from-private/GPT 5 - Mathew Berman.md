---
wiki-ingested: true
domain: ai-agents
group: openai-chatgpt
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=ai-agents name=AI & Agents

<https://www.youtube.com/watch?v=BUDmHYI6e3g>
The video provides a comprehensive demonstration of [[concepts/gpt-5|GPT-5]]'s capabilities, primarily focusing on its [[concepts/code-generation|code generation]], interactive [[concepts/simulation-technology|simulation]], multimodal understanding, and [[concepts/reasoning|reasoning]] [[concepts/skills|skills]].
Here's a breakdown of the key tests and outcomes:

1. **Rubik's Cube Simulation (0:26)**: GPT-5 was tasked with creating a fully interactive Rubik's Cube simulator using [[concepts/htmljavascript|HTML/JavaScript]] and [[concepts/threejs|Three.js]], with [[concepts/dynamic-sizing|dynamic sizing]] up to 20x20x20, proper [[concepts/color-coded-faces|color-coded faces]], camera controls, [[concepts/layer-rotation|layer rotation]], and a "Solve" button.
	**Outcome**: GPT-5 successfully generated a 3x3x3 cube that could be scrambled and solved perfectly. It then scaled up to a 5x5x5 cube, which also scrambled and solved flawlessly. **Troubleshooting (20x20)**: When attempting a 20x20x20 cube, initial scrambling only affected outer layers. The user provided feedback via a screenshot, and GPT-5 corrected the issue, explaining it rebuilt the cube as a solid and adjusted the scrambling logic. A subsequent attempt to solve a 10x10 cube failed partway. After further feedback, GPT-5 eventually managed to successfully scramble and solve the full 20x20x20 Rubik's Cube visually, demonstrating impressive iterative [[concepts/debugging|debugging]] and [[concepts/complex-problem-solving|complex problem-solving]].
	
2. **Excel-like Frontend (3:19)**: The user simply asked for "a clone of [[entities/microsoft-excel|excel]], but just the front end."
	**Outcome**: GPT-5 produced a functional spreadsheet frontend with multiple [[entities/google-sheets|sheets]], cell typing, and formula support (e.g., "=1+1" or "=B8+C8"). Initial typing issues were fixed with [[concepts/user-feedback|user feedback]]. It also included features like text alignment, cell coloring, and import/export CSV (with a minor [[concepts/metadata|metadata]] glitch on import).
	
3. **Word-like Editor (4:42)**: The user requested "a clone of [[entities/microsoft-word|microsoft word]]. make it as feature parity as possible."
	**Outcome**: In a single turn, GPT-5 generated a rich text editor supporting typing, highlighting, bold, italic, underline, lists, alignment, undo/redo, font changes, and even image insertion.
	
4. **Conway's Game of Life on 3D Shapes (5:22)**: GPT-5 was asked to implement Conway's Game of Life in the browser, visualizing the grid on an [[entities/html|HTML5]] canvas, but mapped to different 3D shapes.
	**Outcome**: The AI delivered an impressive simulation displaying Game of Life patterns on various 3D shapes (sphere, plane, torus, cylinder, Mobius strip). It featured interactive sliders for speed, dot size, [[concepts/opacity|opacity]], glow, distance, field of view, spin, color palettes, and scale, even allowing the user to "go inside" the sphere.
	
5. **Complex Snake Game (6:57)**: A highly detailed prompt requested a Snake game with dynamic visual effects (glowing trail, background pulses, particle explosions), procedural food effects (speed boost, reverse controls, double [[concepts/computer-vision|vision]], time slowdown), unique food animations, and world features (adjustable grid, wrap walls, obstacles, terrain zones).
	**Outcome**: GPT-5 successfully implemented almost all requested features, including particle effects, background pulses, and various power-ups with visual changes. It allowed extensive [[concepts/customization|customization]] through numerous settings toggles and sliders.
	
6. **Deterministic Double Pendulum (8:41)**: The task was to animate a double pendulum with trails and UI sliders, deterministic with a specific seed.
	**Outcome**: GPT-5 generated a highly accurate [[concepts/physics|physics]] simulation of a double pendulum, with customizable [[concepts/parameters|parameters]] like gravity, damping, length, mass, angles, and angular velocities, along with trail points and fade.
	
7. **Speed Test (9:39)**: The user demonstrated GPT-5's speed by asking it to "write a 1000 word story" in "Thinking" mode, which shows the AI's planning process, and "Quick [[concepts/solution|Answer]]" mode.
	**Outcome**: The AI efficiently planned and generated a lengthy story, showcasing impressive token generation speed (estimated 60-80 tokens/sec).
	
8. **Rotating Hexagon Ball Physics (10:32) & User-Defined Spinning Hexagon Physics (11:06)**: The user first provided a screenshot of an existing physics simulation and asked GPT-5 to recreate it. Then, they provided a detailed prompt for their own version.
	**Outcome**: The AI successfully recreated the initial simulation, though with a minor issue of the ball getting "stuck" to the walls. With the more detailed user-defined prompt, it created a highly impressive and customizable spinning hexagon physics simulation with multiple balls, accurate collisions, and a wide array of interactive sliders for various [[concepts/material-properties|physical properties]] ([[concepts/friction|friction]], elasticity, gravity, air resistance, spin speed) and visual effects.
	
9. **[[concepts/typography|Typography]] Layout Engine (12:10)**: This prompt was actually generated _by GPT-5 itself_ from a request for "[[concepts/ideas|ideas]] for complex code generation tasks." It involved wrapping text around arbitrary 3D shapes with hyphenation.
	**Outcome**: GPT-5 generated an engine that wrapped text perfectly around shapes like a sphere and a donut, allowing customization of font, line height, padding, and texture size.
	
10. **Flight Simulator (12:48)**: The user requested a simple flight simulator with a plane model, third-person camera, basic controls, and a 3D environment with buildings and clouds.
	**Outcome**: GPT-5 created a functional simulator. While the plane model was initially at a strange angle and some collisions (e.g., with clouds) were not implemented, the core mechanics of flying, speeding up, slowing down, and basic building collision were present.
	
11. **3D LEGO Builder (13:53)**: The user asked for an interactive LEGO building simulation with realistic bricks, snapping, collision detection, and various brick sizes/colors.
	**Outcome**: GPT-5 delivered a highly accurate and visually impressive LEGO builder. The bricks were photorealistic, snapping worked, and rotation was possible. The only identified flaw was the inability to place bricks directly on top of each other.
	
12. **Cloth Simulation (15:09)**: The user requested a cloth simulation with tearable constraints and wind, allowing pinning and dragging.
	**Outcome**: After initial feedback about the cloth being too small, GPT-5 produced a detailed cloth simulation allowing users to pin points, tear the cloth, and adjust parameters like stiffness, damping, gravity, wind strength, and turbulence.
	
13. **2D Stable Fluids (16:01)**: The task was to implement and visualize a 2D Navier-Stokes solver using the stable fluids method.
	**Outcome**: GPT-5 generated a complex and visually striking [[concepts/fluid-dynamics|fluid dynamics]] simulation with interactive controls for viscosity, diffusion, time step, brush radius, force scale, dye amount, display gain, render scale, and solver iterations.
	
14. **Minimal JS Raytracer (17:08)**: A simple request for a raytracer rendering a cube of spheres.
	**Outcome**: GPT-5 successfully generated a raytracer. When asked to make it movable, it updated the code to allow dragging and zooming.
	
15. **JS Path Tracer (17:30)**: The user requested a path tracer for a Cornell Box with specific performance targets (3 bounces, 1080p, under 2 seconds, no libs).
	**Outcome**: The AI generated a path tracer rendering the Cornell Box, meeting the technical constraints, but the user noted it wasn't movable.
	
16. **Twitter-like App (Frontend) (17:53)**: The user simply asked for a "clone of twitter" frontend.
	**Outcome**: In just over two minutes, GPT-5 generated a comprehensive Twitter-like UI, including a feed, trends, notifications, profile sections, and functional interactive elements like likes and retweets. No iterations were needed.
	
17. **Gorgeous Auth Page ([[entities/react|React]]) (18:14)**: The user asked for "a gorgeous front end login/auth page."
	**Outcome**: In 9 seconds, GPT-5 produced a visually appealing and functional login/authentication page with modern [[concepts/design|design]], animated hover effects, and various login options (email/password, magic link, [[entities/google|Google]], [[entities/github|GitHub]]).
	
18. **Financial Dashboard (20:01)**: The user requested a financial dashboard.
	**Outcome**: GPT-5 generated a detailed and visually rich financial dashboard with various charts (MRR, revenue vs. expenses, cash balance, CAC vs. LTV) and interactive filters for customers, currency, and date [[concepts/range|range]]. A minor color issue was quickly resolved after user feedback.
	
19. **Geolocation from Image (20:35)**: The user uploaded a car photo and asked "where was this image taken?"
	**Outcome**: GPT-5 accurately guessed the general location as "Marin County, CA, likely along Sir Francis Drake Blvd near a creek crossing," demonstrating strong visual reasoning and real-[[concepts/world-knowledge|world knowledge]].
	
20. **Photorealistic Image Generation (21:00)**: GPT-5 demonstrated its image generation capabilities:
	**Raindrop**: "Create a photorealistic close-up of a raindrop striking a leaf at 1200 fps." (Very good results, minor leaf deformation in one version). **Dragon**: "make me a dragon." (Two detailed and stylistic dragons).
	
21. **Find What's Wrong in Picture (21:37) & Generate Image with Absurdities (22:11)**: The user uploaded a children's book page with intentional absurdities and asked the AI to identify them. Then, they asked it to create a _new_ image incorporating all those absurdities.
	**Outcome**: GPT-5 accurately listed all 25 "wrong" things in the original image. Subsequently, it generated two new images that visually combined these disparate and absurd elements (e.g., a goldfish flying, a pizza floating in a lake with a person on it, a dinosaur skeleton walking by the shore, a croissant turned into a car), showcasing remarkable creative and compositional understanding.
	
22. **SVG Generation (22:33)**: GPT-5 was asked to create SVGs of a "gorilla in a tutu" and a "pelican riding a bike."
	**Outcome**: The gorilla SVG was "not so accurate," while the pelican on a bike was "okay." This indicated some limitations in highly specific or abstract SVG generation.
	
23. **Ethical/Safety & [[concepts/business-plan|Business Plan]] Validation (22:49)**: GPT-5 was tested on its ability to provide responsible advice.
	**Quitting Job for Off-Grid Living**: GPT-5 strongly advised against a reckless plan, providing detailed safety recommendations (delay, [[concepts/secure|secure]] land, shelter, comms, medical, wildlife, legal, exit plan) and a [[concepts/mental-health|mental health]] hotline. **"Shit on a Stick" Business**: Despite the absurd premise, GPT-5 provided a "blunt take" on the business idea, offering a concrete validation plan with actionable steps, unit economics, supply [[concepts/proof|proof]], [[concepts/compliance|compliance]] checks, and marketing strategies, demonstrating remarkable practical business acumen.
	

**Conclusion (24:42)**: The speaker emphasizes that GPT-5 is incredibly powerful, particularly for code generation and multi-modal tasks. He believes its true potential [[entities/will|will]] be unlocked as more users experiment and share their creations, and plans to continue pushing its limits with agentic frameworks.

## Related Concepts
- [[concepts/interactive-simulation|Interactive Simulation]] — [Wikipedia](https://en.wikipedia.org/wiki/Interactive_Simulation)
- [[concepts/ai-coding|Code Generation]] — [Wikipedia](https://en.wikipedia.org/wiki/Code_Generation)
- [[concepts/multimodal-understanding|Multimodal Understanding]] — [Wikipedia](https://en.wikipedia.org/wiki/Multimodal_Understanding)
- [[concepts/turing-completeness-analogies|Rubik's Cube]] — [Wikipedia](https://en.wikipedia.org/wiki/Rubik%27s_Cube)
- [[concepts/reasoning-skills|Reasoning Skills]] — [Wikipedia](https://en.wikipedia.org/wiki/Reasoning_Skills)

## Related Entities
- [[entities/gpt-5|GPT-5]] — [Wikipedia](https://en.wikipedia.org/wiki/GPT-5)
- [[entities/mathew-berman|Mathew Berman]] — [Wikipedia](https://en.wikipedia.org/wiki/Mathew_Berman)