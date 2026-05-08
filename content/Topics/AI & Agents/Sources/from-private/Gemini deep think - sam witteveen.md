---
wiki-ingested: true
domain: ai-agents
group: google-ai-ecosystem
---
<https://www.youtube.com/watch?v=Nmv4YxpbhU8>
The video provides an in-depth look at [[entities/google|Google]] [[entities/deepmind|DeepMind]]'s recent achievement of a [[concepts/gold-medal-standard|gold-medal standard]] at the [[concepts/international-mathematical-olympiad|International Mathematical Olympiad]] (IMO) using their new **[[entities/gemini-2-5-pro|Gemini 2.5 Pro]] with Deep Think** model. It also compares this to previous attempts and a concurrent achievement by OpenAI.
Here's a detailed [[concepts/summary|summary]]:
**1\. Introduction to Deep Think & IMO Context (0:00-0:26)** The video begins by highlighting Google DeepMind's recent success in achieving a gold-medal standard at the International Mathematical Olympiad (IMO) with Gemini 2.5 Pro Deep Think. It briefly sets the stage by mentioning the long-standing goal for AI companies to [[entities/microsoft-excel|excel]] in such competitions and hints at a similar achievement by OpenAI.
**2\. What is the International Mathematical Olympiad (IMO)? (0:26-2:09)**

* The IMO is the world's most prestigious and exceptionally difficult [[concepts/mathematics|mathematics]] competition for pre-university students, held annually since 1959.
* Countries are represented by six elite mathematicians who solve six difficult problems in algebra, combinatorics, geometry, and [[concepts/number-theory|number theory]].
* Medals are awarded to the top half of contestants, with approximately 8% receiving a prestigious gold medal.
* **Google's 2024 Attempt:** Last year, Google DeepMind's AlphaProof and AlphaGeometry 2 systems achieved a silver-medal standard (28/42 points), solving four out of six problems. However, this required specialist formal languages and significantly longer processing times than humans were allowed.

**3\. Deep Think's Novel Approach for IMO 2025 (2:09-3:18)**

* **Shift in Strategy:** Unlike 2024, where Google used specialized systems for _formal mathematics_, their 2025 approach used an "Advanced Gemini with Deep Think" model for _informal mathematics_. This means the model directly processed the natural language problems without requiring translation into formal mathematical languages.
* **Deep Think Explained:** Deep Think is described as an enhanced [[concepts/reasoning|reasoning]] mode that uses new research techniques, enabling the model to consider multiple hypotheses before responding. It extends Gemini's "[[concepts/parallel-thinking|parallel thinking]] time," exploring different [[concepts/ideas|ideas]] simultaneously, revising, and combining them over time to arrive at the best answer. It also incorporates novel reinforcement [[concepts/learning|learning]] techniques to encourage exploration of reasoning paths, making it more intuitive over time.
* **Benchmarks (0:00-3:18):** Google I/O showcased benchmarks for Gemini 2.5 Pro Deep Think, comparing it against Gemini 2.5 (without Deep Think), OpenAI's GPT-3, and [[concepts/gpt-4|GPT-4]] mini. Deep Think consistently outperformed in: **Mathematics ([[concepts/usamo-2025|USAMO 2025]]):** 49.4% (vs. 34.5% for Gemini 2.5, 21.7% for GPT-3, 19.1% for GPT-4 mini) **[[concepts/code|Code]] (LiveCodeBench v6):** 80.4% (vs. 71.4% for Gemini 2.5, 71.1% for GPT-3, 72.5% for GPT-4 mini) **Multimodality (MMMU):** 84.0% (vs. 79.6% for Gemini 2.5, 82.9% for GPT-3, 81.6% for GPT-4 mini) The video [[concepts/notes|notes]] this superior performance is due to its "deep thinking" capability, making it well-suited for the IMO.

**4\. OpenAI's Parallel Achievement & Controversy (3:22-4:47)**

* Simultaneously with Google's announcement, OpenAI also tweeted that their experimental reasoning LLM achieved "gold medal-level performance" in the IMO.
* They scored 35 out of 42 points on five of the six problems, releasing their proofs on [[entities/github|GitHub]].
* A point of controversy was that rumors suggested Google was asked to delay their announcement, allowing humans to celebrate first, implying a competitive race between [[entities/ai-labs|AI labs]].

**5\. Deep Think Demos & Performance Characteristics (4:47-15:32)** The video features several live demos of Deep Think, highlighting its strengths and a key limitation:

* **IMO Problem 1 (4:47-10:25):**
	The model is given IMO Problem 1 directly in natural language. It immediately indicates "Generating your response... Ready in a few minutes." The video shows a stopwatch running. It takes over **5 minutes** for the first "Show thinking" summary to appear, and the full [[concepts/solution|solution]] is delivered after **16 minutes and 10 seconds**. The generated solution correctly identifies the possible values for k as {0, 1, 3} and provides a detailed [[concepts/proof|proof]], matching Google's officially released human-like solution. The long "time to first token" and overall response time is a consistent characteristic of Deep Think, explained by its parallel exploration of multiple reasoning paths.
	
* **AIME Problem 13 (10:25-11:37):**
	Another complex math problem (combinatorics) is input. The model again provides a "Show thinking" summary, breaking down the problem (Decomposing, Refining Intersection Probabilities, Estimating Chord Intersections, etc.). The final calculation for the expected number of regions (204) is correct. This response also took a significant amount of time (around 13 minutes).
	
* **Voxel Art Scene ([[concepts/code-generation|Code Generation]]) (11:37-12:50):**
	A creative prompt asking to "[[concepts/design|Design]] and create a very creative, elaborate, and detailed voxel art scene of a Sala Thai..." Deep Think provides detailed "thinking" steps (Designing the Scene, Formulating the HTML). It generates HTML code using [[concepts/threejs|Three.js]] library and displays a functional 3D voxel art scene in the browser, complete with a Sala Thai structure, tropical trees, and cherry blossoms, which the presenter [[concepts/highlights|highlights]] as a clear success.
	
* **Angry Birds Style Game (Code Generation & Iteration) (12:51-15:32):**
	**Attempt 1:** User asks for an Angry Birds game using Pygame. Deep Think correctly states it cannot execute Pygame directly but offers an HTML/CSS/JavaScript version. It generates a basic game. **Feedback & Iteration:** User provides feedback that the ball doesn't travel far enough, only one pig, and no structures. **Attempt 2:** Deep Think acknowledges the "excellent feedback," outlines planned improvements (increased power, structures, multiple pigs, improved collision), and generates updated code. **Result:** The improved game is shown running, with better [[concepts/physics|physics]] and structures, demonstrating Deep Think's ability for iterative refinement and complex code generation, even though it still has some limitations compared to the original Angry Birds.
	

**6\. Conclusion & Availability (15:32-16:28)**

* Deep Think is incredibly impressive at complex, reasoning-heavy tasks.
* Its main trade-off is speed; it takes significantly longer to generate [[concepts/responses|responses]] due to its intensive parallel thinking process. This means it might not be practical for every use case.
* **Availability:** Currently, [[entities/google-ai|Google AI]] Ultra subscribers can use Deep Think in the [[entities/gemini-app|Gemini app]] with a fixed set of daily prompts by toggling "Deep Think" in the model dropdown. Deep Think automatically integrates with tools like code execution and [[concepts/google-search|Google Search]] and can produce much longer responses. Google plans to release Deep Think (with and without tools) via the [[entities/gemini-api|Gemini API]] in the coming weeks to trusted testers, aiming to understand its usability for developers and enterprises.
* Teams are continuously working on making Deep Think faster, more reliable, and user-friendly for Gemini app users.

## Related Concepts
- [[concepts/deep-think|Deep Think]] — [Wikipedia](https://en.wikipedia.org/wiki/Deep_Think)
- [[concepts/international-mathematical-olympiad-imo|International Mathematical Olympiad (IMO)]] — [Wikipedia](https://en.wikipedia.org/wiki/International_Mathematical_Olympiad_%28IMO%29)
- [[concepts/ai|AI]] — [Wikipedia](https://en.wikipedia.org/wiki/AI)
- [[concepts/gemini-25-pro|Gemini 2.5 Pro]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Pro)
- [[concepts/gemini-embeddings|Google DeepMind]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_DeepMind)
- [[concepts/whisper-ai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)
- [[concepts/speech-recognition|Deep Learning]] — [Wikipedia](https://en.wikipedia.org/wiki/Deep_Learning)
- [[concepts/uncanny-valley|Artificial Intelligence]] — [Wikipedia](https://en.wikipedia.org/wiki/Artificial_Intelligence)
- [[concepts/mathematics|Mathematics]] Education — [Wikipedia](https://en.wikipedia.org/wiki/Mathematics_Education)
- Computational Thinking — [Wikipedia](https://en.wikipedia.org/wiki/Computational_Thinking)

## Related Entities
- [[entities/sam-witteveen|sam witteveen]] — [Wikipedia](https://en.wikipedia.org/wiki/sam_witteveen)
- [[entities/google-deepmind|Google DeepMind]] — [Wikipedia](https://en.wikipedia.org/wiki/Google_DeepMind)
- [[entities/gemini-25-pro|Gemini 2.5 Pro]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Pro)
- [[entities/openai|OpenAI]] — [Wikipedia](https://en.wikipedia.org/wiki/OpenAI)