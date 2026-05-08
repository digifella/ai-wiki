---
wiki-ingested: true
domain: undecided
group: needs-review
---
<https://www.youtube.com/watch?v=GG9yOsPEGek>

Here is a [[concepts/summary|summary]] of the video transcript formatted in [[concepts/markdown|Markdown]].

# Tesla’s AI Patent: The "Multiplication to Addition" Breakthrough

**Source:** [[entities/dr-know-it-all|Dr. Know-it-all]] (crediting "Tesla Ming" for spotting the patent) **Core Thesis:** The fundamental rule for AI breakthroughs is **"Multiplication is bad; Addition is good."** Tesla’s new patent applies this rule to solve long-term [[concepts/memory|memory]] issues in Full Self-Driving (FSD) and Optimus robots.

* * *

## 1\. The Problem: The Tyranny of Multiplication

In [[concepts/neural-networks|Neural Networks]] (NNs), memory and [[concepts/continuity|continuity]] rely on math. However, the traditional method of calculating weights involves heavy multiplication.

* **The Vanishing/Exploding Gradient:** When you multiply numbers (especially small ones like 0.01) over and over again—which happens in deep networks or over long timeframes (e.g., 30 seconds at 30fps)—the numbers eventually degrade.
	* _Vanishing:_ The number becomes effectively [[concepts/zero|zero]].
	* _Exploding:_ The number shoots toward infinity.
* **The Consequence:** The AI loses "memory." A car might forget a stop sign seen 30 seconds ago because the mathematical values representing that stop sign have vanished due to repeated multiplication.
* **The [[concepts/hardware|Hardware]] [[concepts/cost|Cost]]:** To combat this, computers usually increase precision (32-bit, 64-bit, 128-bit). This requires massive memory bandwidth and [[concepts/compute|compute]] power, which isn't feasible in a car or humanoid robot due to power and thermal constraints.

## 2\. The Evolution of AI Memory

* **RNNs & LSTMs:** Earlier architectures used heavy multiplication and failed at long-context tasks.
* **[[concepts/transformers|Transformers]]:** Revolutionized AI by converting some multiplication into addition (via [[concepts/attention-mechanisms|Attention mechanisms]]), allowing for larger [[concepts/context-windows|context windows]], though they still suffer from drift over long periods.

## 3\. The Solution: Rotary Positional [[concepts/encoding|Encoding]] (RoPE)

Tesla utilizes a concept called **RoPE**. Instead of treating data as static numbers, it treats them as vectors (magnitude and direction).

* **Rotation:** To encode position/time, the vector is rotated.
* **Why it helps:** Rotating a vector involves **adding** angles (degrees) rather than multiplying values. This moves the math from a multiplicative domain to an additive domain.

## 4\. Tesla’s Patent: The "Cheat [[concepts/code|Code]]" (Logarithmic Addition)

Tesla engineers patented a way to run elite, high-precision [[concepts/models|models]] on cheap, 8-bit hardware by converting the remaining multiplication tasks into addition tasks.

### How it works:

1. **The Logarithm Rule:** They utilize the mathematical property:
	$\\log(a \\times b) = \\log(a) + \\log(b)$ This allows the system to add two logarithms rather than multiplying two complex numbers.
	
2. **Lookup Tables (LUTs):** Calculating logarithms is computationally expensive. Tesla bypasses this by using a **Lookup Table**.
	* Instead of doing the math, the chip looks up the pre-calculated log value.
	* They map high-precision numbers into **256 bins** (perfect for 8-bit integers).
3. **Non-Uniform Bins:** Since neural networks deal mostly with small numbers (near zero), the lookup table is "weighted." It has high [[concepts/solution|resolution]] for small numbers and lower resolution for large numbers.
4. **Reconstitution:** At the end of the process, they convert the log-space answer back to a standard number (using techniques like Horner’s Method to approximate Taylor expansions) using mostly addition.

## 5\. The Benefits

* **Stability:** Moves from "vanishing gradients" to "linear drift." Errors accumulate linearly (slowly) rather than exponentially (instantly).
* **Efficiency:** Allows cheap **8-bit chips** to perform like high-end **32-bit systems**.
* **Performance:**
	* Zero compute heavy lifting (just fetching values from a table).
	* Minimal memory bandwidth usage.
	* No thermal throttling.
* **Result:** This allows Tesla vehicles and Optimus bots to maintain "long-term memory" (30+ seconds) without needing a supercomputer in the trunk.

* * *

**Summary:** Tesla has patented a method to perform high-fidelity AI calculations using low-fidelity hardware by converting complex multiplication problems into simple addition problems using logarithmic lookup tables.

## Related Concepts
- [[concepts/neural-networks-nns|Neural Networks (NNs)]] — [Wikipedia](https://en.wikipedia.org/wiki/Neural_Networks_%28NNs%29)
- [[concepts/weights|Weights]] — [Wikipedia](https://en.wikipedia.org/wiki/Weights)
- [[concepts/vanishingexploding-gradient|Vanishing/Exploding Gradient]] — [Wikipedia](https://en.wikipedia.org/wiki/Vanishing/Exploding_Gradient)
- Vanishing Gradient — [Wikipedia](https://en.wikipedia.org/wiki/Vanishing_Gradient)
- Exploding Gradient — [Wikipedia](https://en.wikipedia.org/wiki/Exploding_Gradient)
- Rotation Positional [[concepts/encoding|Encoding]] (RoPE) — [Wikipedia](https://en.wikipedia.org/wiki/Rotation_Positional_Encoding_%28RoPE%29)
- Logarithmic Addition — [Wikipedia](https://en.wikipedia.org/wiki/Logarithmic_Addition)
- Lookup Tables (LUTs) — [Wikipedia](https://en.wikipedia.org/wiki/Lookup_Tables_%28LUTs%29)
- Horner’s Method — [Wikipedia](https://en.wikipedia.org/wiki/Horner%E2%80%99s_Method)

## Related Entities
- [[entities/tesla-ming|Tesla Ming]] — [Wikipedia](https://en.wikipedia.org/wiki/Tesla_Ming)
- [[entities/tesla|Tesla]] — [Wikipedia](https://en.wikipedia.org/wiki/Tesla)
- Optimus robots — [Wikipedia](https://en.wikipedia.org/wiki/Optimus_robots)
- Full Self-Driving (FSD) — [Wikipedia](https://en.wikipedia.org/wiki/Full_Self-Driving_%28FSD%29)