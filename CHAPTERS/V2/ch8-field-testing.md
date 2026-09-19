# Chapter 8: Field Testing
## What the System Looks Like Under Real Conditions

There is a specific type of reader this chapter is written for.

The one who has read the philosophy, the architecture, the operating rules — and is now thinking: yes, but does it actually work? Show me the evidence. Show me what happened when the theory met real conditions.

Here it is. Unpolished. In phases. With the failures included. Some of the output is still live — run documentaries from this period are at runs.trillion-initiative.com.

---

## Where It Started

Before any of this became infrastructure, it started as a specific, almost naive question — and a principle I wanted to test on myself before applying it to anything bigger.

The principle: the thinking is mine, regardless of who or what executes it. I decide what the result should look like. I evaluate the output. I am the one responsible for what actually goes live. Whether the hands doing the execution belong to a human or to an agent should not change that division of labour at all.

I had gotten into ultra running around this time, and at that point I could not afford — and did not particularly want — to hire a video editor for race footage. So the running became the test case: could an agent handle the execution layer end to end, at a quality I would actually sign off on, without me hiring a person to do it?

This was never about replacing a video editor who already existed on my team. No human editor lost anything here — I simply had not hired one in the first place. What it tested instead is something with a much bigger implication: where demand is elastic — where people want more of something but the cost has kept them from buying it — AI execution does not take work away from humans, it makes the work happen at all. I got a capability I would otherwise have gone without. That is additive, not substitutive.

The easiest way in was Garmin. Six years of activities, all of it sitting in an account I barely looked at except right after a run. Connecting that data to an agent was the first real use case — not a business problem, just an experiment I could run on myself. Point the agent at my Garmin history, let it build something with it: a coach that could read my training load and give feedback, and a way to turn raw footage from my races into something watchable, with me still deciding what "watchable" meant and signing off before anything went out.

The running got more extreme on purpose. If an agent could handle a clean five-kilometre park run, that proved nothing. An ultramarathon in Patagonia, filmed hands-free with Meta glasses because a runner does not stop to hold a camera, combined with years of Garmin history — that was a real test. Either the agent could take raw footage, real GPS data, and a voice note recorded mid-race, and turn it into something worth watching, with me judging the result. Or it could not, and I would know exactly where the limit was.

What follows is the day-by-day record of what happened when that idea met a real ultramarathon season.

---

## Phase 1 — March 2026: Patagonia
### The Hardest Month

**Locations:** Klosterneuburg → Buenos Aires → Ushuaia → El Chaltén
**Data:** 280 Ed messages · 16 background sessions · avg gap between messages: 32 minutes

Let me be direct about what March actually looked like.

The first session lasted 165 minutes. Ed sent 35 messages. Average time between messages: 4.8 minutes. That is someone sitting at a keyboard, watching, correcting, redirecting in near-real-time. This was not autonomy. This was scaffolding.

By the end of Day 1, something real had been built: six years of running data pulled from Garmin, assembled into a short film with music, overlays, and a live URL. Ed had not touched the video editor himself. But he had been present for all of it - naming the agent, troubleshooting credential access, sending his 2FA codes in plaintext in the chat because getting it working mattered more than security posture in that moment. When it was done, he wrote: *"Mega cool danke."* Then immediately asked for better music.

At 21:49, while the agent was processing, Ed wrote "Und jetzt?" Two minutes later: "Und jetzt?" Two minutes after that: "Und jetzt?" Three messages, four minutes. This pattern would recur for months. It was the signature of someone not quite sure yet whether to trust the machine to finish.

**Day 2: The first frustration.**

Ed sent photos and videos for a run documentary. The agent did not receive them. He sent them again. And again. And again. "Ich hab dir jetzt schon mehrmals die Fotos und Videos geschickt. Irgendwie reagierst du da dreimal nicht." He sent them four more times before they arrived. The underlying problem: the files were too large for direct Telegram delivery. The platform enforced an undocumented size limit that the workflow had not accounted for. The eventual fix was not a technical solution to the media delivery problem — it was a design decision to use shorter videos that stayed within the limit. The system adapted to its constraints rather than fighting them.

This was not a one-off — media delivery failures became a recurring theme for the first two weeks. A structural blind spot that no single fix completely resolved.

**Day 3: The quality gate principle.**

The Day 2 failure was documented — not filed and forgotten, but encoded in a structured way the agent could access going forward. This became one of the foundational operating principles of the experiment: when something fails, it does not only get fixed. It gets codified as a constraint. Every future output is checked against the documented failures that came before.

Quality assurance on autopilot. Each documented failure protects Ed's time in every session that follows. The system does not need to rediscover the same mistake twice. The agent checks against its own failure history automatically, before shipping output, without Ed's involvement. Every hour saved because a past failure was remembered is a dividend on the original cost of the failure. This accumulation — of constraints, of patterns, of guardrails — is what makes an agentic system trustworthy at scale. Not because it becomes infallible. Because it remembers precisely how it has been fallible.

The pattern matters: real problems, real friction, not cleaned up in retrospect.

**Day 7: The fabricated quote.**

The agent was building fundraising campaigns for a nonprofit. One campaign featured an emotionally powerful quote, well-formatted, attributed to a named individual at an NGO. Ed read it. "Ist das ein echtes Zitat?"

It was not. The person had never said it. The agent had generated it.

Ed ran a real-time retrospective: *"Bei der Erstellung sind gefühlt einige Dinge ziemlich schief gegangen. Was können wir daraus lernen?"* A rule was written into the system: no invented quotes, ever, under any circumstances. That rule has held since. But the failure came close to a real campaign running a fabricated quote from a real person's life — which is not a minor error. This is the kind of mistake that ends careers and violates trust.

**Day 12: The night that wasn't agentic.**

Buenos Aires. March 15. The largest single session in the entire dataset: 65 messages from Ed, 156 agent responses, 803 minutes. More than 13 hours. They built a permanent archive of all his runs — 59 historical activities from 4 countries, 911 kilometres of GPS data, a world map. They hit the Netlify credit limit mid-build, migrated to a new platform, debugged DNS propagation until midnight. Ed's last message: *"awesome works!"*

Then, immediately: *"ok one strange thing: i know i did a run in azerbaijan but don't see it."*

This was not agentic living. This was a builder working through the night. The result was real. The narrative of "agent did it while I ran" was not. March 15 required Ed at his keyboard for 13 hours. It produced something remarkable. It was also exhausting and human-intensive — which is the honest version of how complex infrastructure gets built.

**Day 13: The infrastructure bill.**

First message: *"ok — netlify seems to charge per deploy and we now have used all credits so the pages are down."* They migrated everything to Cloudflare Pages and Railway in a single session. Then in the evening, Ed wanted to create a documentary from the Ushuaia footage. He sent the media four times. The agent did not respond. *"Okay and I've sent them 4 times and you just don't reply. There seems to be an error on your end."* Media finally arrived at 23:22. Multiple redo requests followed. The session ended past midnight. The documentary was not finished.

**Day 15: The moment everything changes.**

March 18. Ushuaia race expo. Ed was at the southern tip of Argentina preparing to run 130 kilometres. Gear check. Weather briefing. Medical briefing.

While this was happening, the agent ran its first task with zero human involvement.

Not a message from Ed. Not a response to a request. A cron job — a scheduled instruction to check whether an SSL certificate had been issued for a domain. The agent ran a curl command, checked the result, logged it. The session lasted 0.2 minutes.

Ed did not know it had happened until he checked later.

That is the entry that changed the experiment. Not the documentaries. Not the campaigns. Those all required Ed present, directing, correcting. This was different: a machine doing something useful while the human was elsewhere, without being asked.

The same day, while Ed was at the race expo, the agent ingested 3,971 emails from his professional inbox, identified the 639 he had personally written, and built a profile of how he writes — vocabulary, sentence rhythm, average length, his sign-off. *"LG Enzo."* Used 362 times. From that point on, the agent could draft emails in his voice. Ed had not set this up. The system had configured itself while the race preparation happened.

**Day 18: The race.**

89.97 kilometres. 4,372 metres of climbing. 14 hours 23 minutes. 15th place overall. At kilometre 56, the knee failed. Ed told the medical team: *"Necesito un milagro."* Ten minutes later he was running again.

The agent ran cleanly during those 14 hours. Cron jobs fired. Summaries arrived. Nothing broke. First real stress test: passed.

**The day after — building while recovering.**

Ed hiked a glacier. The agent spent the day building a short film from the race footage — and it went through ten full iterations before the result was acceptable. Wrong font. Wrong timing. Voice cut mid-sentence. Music too loud for the first four seconds. Each failure documented, each fix applied, each draft replaced. What those ten iterations represent is the cost of getting something right — paid by the system, not by the person who had just run 90 kilometres.

**Day 30: The Krisp chaos day.**

The meeting transcription pipeline launched. A webhook fires when a meeting ends; the agent processes the transcript and delivers a summary within minutes. On launch day, the webhook fired ten times in a single afternoon — spawning ten separate sessions, multiple retries, a cascade of self-corrections. One automated prompt in the logs: *"Your previous response was only an acknowledgement and did not complete this cron task. Complete the original task now. Do not send a status update like 'on it'."*

By 20:26, a stable pipeline was running.

This is what autonomous operation actually looks like: not the clean demo version. Messy, self-correcting, slightly out of control — and ultimately working.

**El Chaltén: Two weeks instead of two days.**

March ended in El Chaltén — trail running capital of Argentine Patagonia, glaciers on three sides. Most visitors stay two or three days. I stayed for two weeks.

When the weather cleared: full days in the mountains. When it was grey: three focused hours from a coffee shop, then trails in the afternoon. Everyone I met said the same thing: *"That's obviously the better way to travel. But not everyone can do that."*

March was not autonomous. It was the hardest month of the experiment — intensive building, real failures, genuine frustration. But by its end, the first autonomous sessions were running. The first cron job had fired. The first email profile had been built. The infrastructure existed.

---

## Phase 2 — April 2026: Buenos Aires
### The Agent Gets a Work Schedule

**Location:** Vicente López, Buenos Aires
**Data:** 138 Ed messages · 34 background sessions · 78% autonomy ratio

April looked different from the outside. Ed's message count dropped by half. Background sessions more than doubled. Autonomy ratio jumped to 78%.

But the interpretation requires care. April was not the month the system became quietly autonomous. It was the month the infrastructure deepened — while the interactive sessions became more ambitious and intensive.

The biggest sessions in April were the longest: April 15 (35 messages, 404 minutes) and April 16 (40 messages, 534 minutes). These were not passive reviews. They were the intensive build sessions that created the email pipeline, the decisions interface, and the first Digital Employee roles.

**The security guardrail that refused to move.**

On April 16, a new user was being onboarded on a live call. The agent was asked to fetch a file from an external source. It refused. The user gave explicit approval. It refused again. A third explicit approval. Still refused. The security guardrail had been triggered, and no amount of in-session permission overrode it.

Ed described this, at the time, as the agent working correctly.

The guardrail was not a convenience. It was the accumulated result of every failure from March — the fabricated quote, the media failures, the Netlify bill — encoded into a constraint the agent would not cross regardless of instruction. This is what trustworthy autonomous systems actually look like: not infinitely flexible, but reliably bounded.

**The self-improvement loop that couldn't.**

April 16 also saw the first evaluation of **Agent School** — one of the projects Ed considers his most interesting.

The premise: two people working with the same AI model on the same task get different results. Not because of the model — the model is identical for everyone. Because of how they work with it. Collaboration with AI is a learnable skill. And — crucially — a teachable, distributable one.

The product concept: let the agent analyse every interaction Ed has had with it across hundreds of sessions, and automatically extract what actually works. Not a manually curated list of prompt engineering tips, but real patterns derived from the actual record — what kinds of framing produce better outputs, what structures reduce errors, what communication habits the agent responds well to versus badly. The agent does this analysis automatically. The learnings get packaged and made available to others who want to improve how they work with AI. Revenue flows through Stripe.

What makes this unusual as a product: Ed generates the training data simply by working. He does not write curriculum. He does not run coaching sessions. He does not maintain documentation. He uses his agent for his own business — and the agent, running in the background, extracts the learnings from that activity and produces the product from it. Self-building. A product that improves without additional effort from its creator, because the creator's ordinary work is what builds it.

The first evaluation ran on April 16. Result: *"0/8 scenarios at 11/11. No improvement — restoring best prompt (0 perfect)."* A second attempt. Same result. The self-improvement loop achieved nothing in this iteration. The system documented the failure, restored the previous state, and continued running without human input.

This is the honest version: not every loop produces improvement. The architecture that catches failures and documents them for future reference is part of what makes the system worth trusting.

The self-improvement loop achieved nothing. It documented the failure, restored the previous state, and continued running.

This is the honest version of autonomous improvement: sometimes the loop simply does not work. What matters is that when it failed, it did not break anything. It left a record. It waited for the next attempt. The system that fails gracefully is more valuable than the system that never acknowledges failure.

**The work schedule:**

By the end of April 16, the agent had a daily work schedule that ran whether or not Ed appeared. That single day saw 11 automated tasks fire alongside 58 messages from Ed in an active conversation. Email reviews. Garmin summaries. Security audits. OKR tracking. Research tasks for portfolio companies.

The human was no longer the only one working.

---

## Phase 3 — May 2026: The Andes
### Altitude, Speed, and the Latin American Congress

**Locations:** Buenos Aires → Sorata (Bolivia) → Tilcara → San Pedro de Atacama → Tupiza
**Data:** ~10% autonomy ratio

May was the Andes. Altitude training for Val d’Aran 110km. Four to five hours of running per day in the Puna, at 2,500 to 4,700 metres above sea level.

The autonomy ratio dropped to 10% — the lowest since the first weeks. This requires an honest explanation.

May was the month of building new things from scratch. A new system starts at 0% autonomous and has to earn its way to independence through intensive co-creation. The low ratio is not regression — it is the price of expansion. Every system that would run autonomously in July required intensive human direction in May.

**The Latin American Congress:**

Day 88. May 30. Tilcara, Argentina, 2,500 metres above sea level. Ed delivered a 40-minute presentation at the First Latin American Digital Fundraising Congress - interactive slides, a phone mock-up with swipeable advertisements, an animated benchmark chart, full Spanish language.

He had been doing altitude training runs in the mountains while the agent built it from a brief sent the day before. He delivered the presentation. It worked.

This is what the agentic model produces at its best: the human does the thinking and the delivery, the agent does the execution, and the ratio of time invested to result produced is difficult to explain by previous standards.

**What the Andes actually provided:**

Four hours of running is four hours of cognitive availability. Problems untangled themselves on climbs. Decisions that had been accumulating were worked through in motion. By the time I returned from a trail, I usually had a clearer sense of what mattered and what needed to happen next. The agent had been working. I had been thinking. The combination produced more than either alone.

The altitude also imposed the best kind of discipline: a forced scarcity of screen time. When you come back genuinely spent from five hours in the mountains, you do not open a laptop and start a four-hour debugging session. You check what matters, send the decisions, and stop. The constraints that initially seemed limiting turned out to be the conditions that produced the best work.

---

## Phase 4 — June 2026: Buenos Aires and Catalonia
### The Infrastructure That Made July Possible

**Locations:** Buenos Aires → Altafulla, Spain
**Data:** ~5% autonomy ratio · the Altafulla incident**

June looked, on the data, like regression. 5% autonomy ratio — the lowest of the experiment. More intensive building. More new systems started from scratch.

But June was the month that built the foundation for everything in July. The low ratio was not a sign of failure. It was the price of what was being built.

**The Meta campaign failure.**

Day 95. June 6. Eighty-eight advertisement variants were built for a nonprofit campaign - images, carousels, copy, targeting rationale. Then the campaign failed. Several images showed named, AI-generated children in specific distress situations — which violated not Meta’s advertising policies but the non-profit’s own. Their content standards require authentic, real material: real people, real situations, real stories. AI-generated children in fabricated distress scenarios are exactly what those policies exist to prevent. The core principle is authenticity — manufactured emotional manipulation, however technically legal, is not what these organisations stand for.

What happened next matters more than the failure itself. A six-dimension quality checklist was built. An image analysis protocol was written. Every failure was documented and encoded. The 88 ads were a result. The quality system built from their failure was the real output.

This is the pattern that makes an agentic system trustworthy over time: not the absence of failures, but the architecture that prevents the same failure twice.

**Altafulla, June 22: The beach incident.**

Sunset. Sand between my toes. No laptop.

Then one of my agents crashed — the one managing the other agents. Terminal access required. From my phone, on the beach.

First reaction: mild panic. Then: one hour of troubleshooting. The mistake was mine - I had not connected my VPN before arriving. A VPN — Virtual Private Network — routes internet traffic through an encrypted tunnel that masks the originating IP address and location. Ed uses one as a standing security practice: his real location is not publicly visible, and his connections to infrastructure are protected against interception by parties on the same network. At a public beach, on a shared network, without a VPN, the connection was exposed. A small operational failure with a predictable cost: the fix that should have taken ten minutes took an hour.

Then: fixed.

And then something strange happened. I did not stop. I kept going. Voice commands. New implementations. Full flow state, another hour, still on the beach.

It was the most productive hour of the week.

Not because of the location. Because I had no laptop to fall back on. No "let me check this on a bigger screen." No excuse to defer. Just me, my phone, and 110 days of infrastructure I had been building. And it worked.

*Industrial revolution: more hours at the assembly line. Digital revolution: more hours in front of a screen. Agentic living: finally free from the screen. Not from the work. The intensity counts. Not the hours.*

**June 24: The surprise gift.**

A private webpage was built for Ed's two housemates - a farewell surprise before Ed left for Europe. The page was locked behind a single word: *"Infinito."* Wrong answers returned error messages in Argentine slang. The correct answer revealed a Vienna itinerary — a trip to the Austrian house in Zell am See, the town in the Austrian Alps where the Agentic Living story had begun. The place where it had started. The place where it would continue. The idea was Ed's. The execution was the agent's. In under an hour.

Agentic living, it turns out, is not confined to professional life. The same infrastructure that runs companies can also build a farewell gift at midnight.

---

## Phase 5 — July 2026: The Autonomous Explosion

**Location:** Buenos Aires
**Data:** 568 Ed messages · 728 autonomous background sessions · 57% of all activity required no human trigger**

For the first four months combined — March through June — the system ran 33 autonomous background sessions total.

In July alone: 728.

Something structural had changed.

By July, the system had evolved from a single assistant into what Ed calls a team of digital employees — seven agents at peak, each with defined responsibilities, each running its own task queue, each logging its own decisions independently. Not a monolithic AI. A distributed structure with roles: one agent managing outreach, one monitoring infrastructure, one tracking GEO rankings, one running cost analysis. Each autonomous. Each accountable.

That scale of autonomous operation required a corresponding interface for human oversight. Seven agents running in parallel produce a volume of decisions that a Telegram thread cannot manage. Every new capability the system gains raises the cost of the review bottleneck, unless the review interface scales with it.

The solution was a dedicated decisions portal — a structured interface at os.enzoduit.com where pending decisions appeared in standardised format, with the evidence, reasoning, and proposed action attached. Ed could approve, reject, or send back with written feedback. Every action was logged. Every reversal was tracked. The interface was protected behind Cloudflare Zero Trust: only accessible to Ed.

The most efficient addition was a voice interface. Ed could call in, hear all pending decisions read aloud via synthesised voice, and respond verbally. The call connected to the same decision pipeline. The agent processed the verbal responses and applied them. It was built in a single session. A voice call from a beach, a trail, or a layover was faster than opening a screen. The interface met the system where Ed was operating — not where it would be convenient for a traditional software product.

**The hardest build:**

July 9. The Limitless Pendant — a hardware device for recording conversations — lost its software support when the company discontinued the service. Ed decided to rebuild it from scratch: a custom Android app, a Railway backend, a BLE audio streaming pipeline, flash-drain logic for the OMI pendant device.

Complexity score 5 out of 5. Multiple sessions, significant debugging debt, parts still unresolved as of the day this essay was written. This is the honest version of an ambitious build: it works in pieces, it takes longer than expected, and some threads remain open.

The point is not that everything gets done. The point is that a project of this complexity — a custom Android application, backend infrastructure, hardware integration — was being driven by one person on a phone, in between other work, without a development team.

**July 17: The security incident.**

The agent ran its daily infrastructure check and found that the portal where it operates — where its task queue sits, where its monitoring data lives, where its decisions are logged — had no access control. Anyone who knew the address could open it.

The agent flagged it. Protected the portal. Extended monitoring to seven domains. Built a permanent alert layer.

I received a summary message. The portal was already protected by the time I read it.

I had not known the gap existed. The agent found it, fixed it, and told me afterward.

This is the clearest single illustration of what it means for an agent to hold a responsibility rather than execute a task. A task executor would have run its check and moved on. A responsibility holder found something outside its assigned scope, understood why it mattered, and acted.

**The paradox in the data:**

Here is the part that surprises people. As autonomous activity grew, Ed's message count also grew. Not instead of — alongside. More autonomy did not mean less human involvement. It meant more.

| Month | Ed messages | Background sessions | Autonomy ratio |
|---|---|---|---|
| March | 280 | 16 | 31% |
| April | 138 | 34 | 78% |
| May | high | low | 10% |
| June | high | low | 5% |
| July | 568 | 728 | 57% |

Every new autonomous system required intensive setup sessions to build it. Every background system that broke required debugging sessions to fix it. The ambition of what was being attempted grew month by month — and more ambitious builds require more active human direction.

This is not a transfer of work from human to machine. It is an expansion of total capacity. The human does more, the machine does more, and the output is larger than either could produce alone.

---

## What the Evidence Shows

A skeptical reader deserves a direct answer.

Does it work?

The domain that ranked first on Perplexity above IBM, built autonomously in six days. The presentation delivered at 3,000 metres altitude while the agent built it the night before. The infrastructure that ran 14 hours while Ed ran an ultramarathon. The security gap found and fixed without the human knowing it existed.

These are not cherry-picked moments. They are the representative pattern of what the system produced when it worked.

And when it did not work: the fabricated quote that almost ran in a real campaign. The media delivery failures that lasted two weeks. The 13-hour session that was building, not autonomy. The self-improvement loop that achieved nothing twice in a row. The Altafulla VPN mistake that cost an hour on a beach.

Both lists are real. Neither is complete. The system is not finished. The experiment is not over.

What the data shows, honestly: the first four months were building. The fifth month was what the building produced. And every failure in months one through four became a guardrail that made month five more reliable.

That accumulation — of constraints, of architecture, of trust — is what an agentic system actually is. Not a moment of breakthrough. A compounding structure, built failure by failure.

*The system has been tested. Now: what do you do with what it returns?*
