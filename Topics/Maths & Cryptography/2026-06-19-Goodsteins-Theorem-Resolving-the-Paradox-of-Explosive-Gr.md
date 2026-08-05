---
wiki-ingested: true
title: "Goodstein's Theorem: Resolving the Paradox of Explosive Growth to Zero"
date: 2026-06-19
source_type: youtube_summary
provider: Google
api: Gemini 2.5 Flash
modes: Summary
domain: maths-logic-crypto
group: mathematical-reasoning-proof
type: "source-summary"
---
<!-- domain-nav -->
> domain-badge slug=maths-logic-crypto name=Maths, Logic & Crypto

Generated: 2026-06-19 · API: [[concepts/gemini-25-models|Gemini 2.5]] Flash · Modes: Summary

---

## Goodstein's Theorem: Resolving the Paradox of Explosive Growth to Zero
**Clip title:** The Simple Rule that BREAKS [[concepts/mathematics|Mathematics]]
**[[entities/tasia-custode|Author]] / channel:** Up and Atom
**URL:** https://www.youtube.com/watch?v=XUDkQA7cVWI

### Summary
The video introduces [[concepts/goodsteins-sequence|Goodstein's sequence]], a mathematical sequence that begins with any natural number and follows three steps: first, rewriting the number in [[concepts/hereditary-base-notation|hereditary base notation]] using the current base (starting with base 2 for the initial number); second, "bumping the base" by increasing all instances of the current base to the next integer; and third, subtracting one. A striking aspect of this sequence is its rapid, explosive growth. For example, starting with 19, the sequence quickly generates numbers of trillions, then 155 digits, and eventually 2,185 digits, seemingly heading towards infinity. However, the central claim, known as Goodstein's Theorem, states that every such sequence, regardless of its starting number or how large it becomes, [[entities/will|will]] always eventually terminate at [[concepts/concept-of-nothingness|zero]].

The video elaborates on "hereditary base notation," which expresses a number using only a specified base and numbers smaller than that base, with this rule applying recursively to all exponents within the expression. This notation is crucial for understanding the "bump the base" step. The apparent paradox lies in how a sequence can grow to astronomical [[concepts/musical-scales|scales]] through the "bumping" mechanism, yet invariably descend to [[concepts/concept-of-nothingness|zero]] despite only subtracting one at each step. This behavior is so counter-intuitive that for some starting numbers, the sequence continues for more steps than the estimated [[concepts/universe-age|age of the universe]] before eventually reaching zero, making direct computation impossible for a general [[concepts/proof|proof]].

To resolve this paradox, the mathematician Reuben Goodstein, ironically a "finitist" who typically rejected infinite concepts in [[concepts/mathematics|mathematics]], turned to Georg Cantor's [[concepts/theory|theory]] of infinite ordinals. Cantor's ordinals provide a way to count past all natural numbers (e.g., omega, omega+1, omega*2, omega^2, etc.). A unique property of these infinite ordinals is that while one can count infinitely *upward*, one can only count *downward* a finite number of steps before needing to "jump" to a smaller ordinal, and this downward process is guaranteed to eventually reach zero. Goodstein devised a function that maps each term in a Goodstein sequence to an "ordinal shadow." Crucially, even as the Goodstein sequence increases exponentially, its corresponding ordinal shadow is *strictly decreasing*.

Because the ordinal shadow sequence is always decreasing, and based on the fundamental property of ordinals, it must eventually reach zero. Since every step in a Goodstein sequence has a corresponding ordinal shadow, the termination of the ordinal shadow implies the termination of the Goodstein sequence itself, proving the theorem by contradiction. This remarkable result also served as a powerful vindication for Cantor. Later work by Jeff Paris and Laurence Kirby demonstrated that Goodstein's Theorem, a truth purely about finite natural numbers, cannot be proven using only the axioms of Peano arithmetic (the standard system for natural numbers). Instead, it inherently requires the concept of infinite ordinals. This illustrates that sometimes, to prove truths about finite systems, a more powerful framework involving infinity is necessary, highlighting a profound philosophical question about whether [[concepts/mathematical-concepts|mathematical concepts]] are invented or discovered.

### Video Description & Links
#### Description
Get Nebula using my link for 50% off an annual subscription: https://go.nebula.tv/upandatom
Watch my exclusive documentary Is Math Invented or Discovered? https://nebula.tv/ismathinvented
Watch 17 Pages: https://nebula.tv/17pages?ref=upandatom

Support Up and Atom directly on Patreon  
https://www.patreon.com/upandatom

Subscribe to Up and Atom for [[concepts/physics|physics]], math and computer [[concepts/science|science]] videos
https://www.youtube.com/c/upandatom

For a one time donation, head over to my PayPal :)  https://www.paypal.me/upandatomshows

*A big thank you to my AMAZING PATRONS!*
[[entities/michael|Michael]] Seydel, Brian Wilkins, Thorsten Auth, Chris Flynn, [[concepts/feynman|Richard]] O McEwen Jr, [[entities/dr-scott|Scott]] Ready, Izzy Ca, [[entities/chef-john|John]] H. Austin, Jr., [[entities/david|David]] Johnston,  Thomas Krause, Ave Eva Thornton, Anne Tan, abc, Nahuel Hernán Espiño, Norman Jaffe, Jim Wright, Elliot Glazer, Cumaco, John Doe, Dirk Wouters, Stoney Bair, Francisco, Marc-Antoine, Thomas Urech, chuck zegar, David Tuman, Ben Mitchell, Jim Felich, [[entities/jeremy|Jeremy]], DONALD McLeod, Ron Hochsprung, James Matheson, Tim Ludwig,  Dagmawi Elehu, Jeffrey Smith, Alex [[entities/hackman|Hackman]], Joel Becane, [[entities/paul|Paul]] Barclay, John Lakeman, Jana Christine Saout, Jeff Schwarz, Yana Chernobilsky, Michael Dean, Chris Amaris, Matt G, Dag-Erling Smørgrav, John Shioli, Bli Blop, Steve Archer, Antonio Gonzalez, Robert Ball, AdamM, JAMES WONG, Wolf Witt, Benedict, Janusz Górecki, Prashant Savalia, Henrik Horneber, Markus S., AudioFreak, Lauren Fish, Matthew Lewis, Pawel W, Bryan Hughes, Trance Maharaj, Matt, Jonathan Rayback, [[entities/smarter-every-day|Smarter Every Day]], Bunny Lushington, Jane!, Motty Porat, Carlos Escolar, Anthony Docimo, robert lalonde, Cassandra Durnord, Paul Bunbury, Richard Rensman, David Shlapak, Kent Arimura, Phillip Rhodes, Michael Nugent, Roland Gibson, Joe McTee, Oleg Dats, [[entities/simon-sinek|Simon]] J. Dodd, Tang Chun, William Toffey, omg.science, Cameron Tacklind, Lance Ahmu, Steve [[entities/ibm-watson|Watson]], Andi B, Thomas P Taft, Pablo de Caffe, Taylor Hornby, Colin Byrne, Spuddy, Sascha Bohemia, Stephen Britt, KG, Hansjuerg Widmer, John Sigwald, O C, Carlos Gonzalez, James Palermo, Thomas V Lohmeier, Chris Teubert, Wolfgang Ripken, Nicolas Frias, Louis M, ROBERT C PAYNE, Rick DeWitt, Gene Levitsky, Pat Gunn, RobF, Vincent Seguin, Michael Brunolli, Shawn, [[entities/steven|Steven]] Wheeler, Philip Freeman, Jareth Arnold, and Simon Dargaville.

[[concepts/creator|Creator]] - Jade Tan-Holmes 
Script - Jade Tan-Holmes
Animations and SFX - Nebula Studios
Music - epidemicsound.com

Special thanks to Adam Whittaker, Kristaps Balodis, Esteban Martínez Vañó and Vasanth Kris for fact checking this video. 

Chapters
0:00-2:18 Intro
2:18-9:22 Goodstein's Theorem
9:22-18:34 Infinite Ordinals
18:34-23:39 The Ordinal Shadow
23:39 Cantor's Vindication

#### URLs
- https://go.nebula.tv/upandatom
- https://nebula.tv/ismathinvented
- https://nebula.tv/17pages?ref=upandatom
- https://www.patreon.com/upandatom
- https://www.youtube.com/c/upandatom
- https://www.paypal.me/upandatomshows

## Related Concepts
- [[concepts/goodsteins-sequence|Goodstein's Sequence]] — [Wikipedia](https://en.wikipedia.org/wiki/Goodstein%27s_Sequence)
- [[concepts/hereditary-base-notation|Hereditary Base Notation]] — [Wikipedia](https://en.wikipedia.org/wiki/Hereditary_Base_Notation)
- [[concepts/bumping-the-base|Bumping the Base]] — [Wikipedia](https://en.wikipedia.org/wiki/Bumping_the_Base)
- [[concepts/recursive-subtraction|Recursive Subtraction]] — [Wikipedia](https://en.wikipedia.org/wiki/Recursive_Subtraction)
- Goodstein's Theorem — [Wikipedia](https://en.wikipedia.org/wiki/Goodstein%27s_Theorem)
- Goodstein Sequence — [Wikipedia](https://en.wikipedia.org/wiki/Goodstein_Sequence)
- [[concepts/bumping-the-base|Base Bumping]] — [Wikipedia](https://en.wikipedia.org/wiki/Base_Bumping)
- Infinite Ordinals — [Wikipedia](https://en.wikipedia.org/wiki/Infinite_Ordinals)
- Peano Arithmetic — [Wikipedia](https://en.wikipedia.org/wiki/Peano_Arithmetic)
- Mathematical Induction — [Wikipedia](https://en.wikipedia.org/wiki/Mathematical_Induction)
- Godel's Incompleteness Theorems — [Wikipedia](https://en.wikipedia.org/wiki/Godel%27s_Incompleteness_Theorems)
- Formal Systems — [Wikipedia](https://en.wikipedia.org/wiki/Formal_Systems)
- Finitism — [Wikipedia](https://en.wikipedia.org/wiki/Finitism)
- Ordinal Shadow — [Wikipedia](https://en.wikipedia.org/wiki/Ordinal_Shadow)
- Transfinite Recursion — [Wikipedia](https://en.wikipedia.org/wiki/Transfinite_Recursion)
- Independence [[concepts/proof|Proof]] — [Wikipedia](https://en.wikipedia.org/wiki/Independence_Proof)
- Natural Numbers — [Wikipedia](https://en.wikipedia.org/wiki/Natural_Numbers)
- Explosive Growth — [Wikipedia](https://en.wikipedia.org/wiki/Explosive_Growth)

## Related Entities
- [[entities/up-and-atom|Up and Atom]] — [Wikipedia](https://en.wikipedia.org/wiki/Up_and_Atom)
- [[entities/gemini-25-flash|Gemini 2.5 Flash]] — [Wikipedia](https://en.wikipedia.org/wiki/Gemini_2.5_Flash)
- Reuben Goodstein — [Wikipedia](https://en.wikipedia.org/wiki/Reuben_Goodstein)
- Georg Cantor — [Wikipedia](https://en.wikipedia.org/wiki/Georg_Cantor)
- Jeff Paris — [Wikipedia](https://en.wikipedia.org/wiki/Jeff_Paris)
- Laurence Kirby — [Wikipedia](https://en.wikipedia.org/wiki/Laurence_Kirby)
- Nebula — [Wikipedia](https://en.wikipedia.org/wiki/Nebula)
- Patreon — [Wikipedia](https://en.wikipedia.org/wiki/Patreon)