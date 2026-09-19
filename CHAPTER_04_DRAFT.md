# Chapter 4: On Elimination — The Minimum Viable Proof

---

You have a vision of what Level 1 looks like for you.
You have stress-tested it against its most likely failure.
You have designed an experiment that is read-only, bounded, and safe to run.

Now comes the part where most people stop again.

Not because they run out of courage. Because they run out of clarity. They sit down to build their first thing and immediately confront a version of the same problem: *where exactly do I start?*

The answer is elimination. Cut everything that is not necessary to prove the concept. Not permanently — just for now. Because the minimum viable thing is not a compromise. It is the fastest path to knowing whether the larger thing is worth building at all.

---

## Shell vs. Brain — What to Actually Build

When you wrote your 2035 press release, you imagined something complete. That is exactly what the exercise was designed to produce. The trap is trying to build toward that destination all at once — and more specifically, building the wrong part of it first.

Most people, when they sit down to build, reach for what they can see. The interface. The name. The landing page that explains what the product does. The mockup that shows what it looks like. In the workshop, we call this building the Shell.

The Shell is not the product. The Shell is the container for the product. Containers that contain nothing are just boxes.

What you need to build is the Brain — the intelligence, the logic, the actual decision-making that is the value you promised. Strip away everything physical from your press release. Strip away the name, the branding, the interface. What is left? What is the actual decision that needs to happen? What does the system need to know — and what does it do with what it knows?

The Brain is almost always the same thing: **data plus decisions**. What information goes in, and what output comes out?

The workshop example that makes this concrete is SleepGuard. The 2035 vision: a Neural-Weave Pillow that detects your mood and plays the exact audio frequency to induce sleep. The Shell is the pillow — the hardware, the neural interface, the physical device. Obviously impossible to build in 48 hours.

But the Brain? The Brain is: take signals about someone's current state, determine the right audio response, deliver it. Data — the user's state — plus a decision — the right frequency. Both buildable today, without any hardware, using an AI agent that asks a few questions and queues the right audio. Teams in the workshop call this the Sleep Concierge Agent. It does exactly what the pillow promised. It just does not have a pillow around it yet.

The Shell was 2035. The Brain was already buildable in 2025.

The same gap exists in almost every ambitious vision. Find the Brain in your press release. That is what you build first. Everything else can wait.

---

## What Elimination Actually Means

Elimination in this context is not giving up. It is identifying the minimum surface required to prove the thing that matters.

In practice, this means making four decisions:

**One task.** Not a workflow. Not a system. One task that the agent will own, end to end. It should be a task you currently do yourself that consumes time but not judgment — or consumes judgment that you could describe precisely enough to put in a brief. Email summarisation. Meeting note extraction. Content research for a specific topic. Daily monitoring of a metric you care about. One thing.

**One data source.** Not every source you eventually want connected. The one source that is necessary for this specific task. If the task is summarising emails, the data source is email. If the task is monitoring a dashboard, the data source is the dashboard. Everything else waits.

**One output.** Not a multi-channel deployment. One place where the result appears that you can review. A daily summary document. A Telegram message. A log file. Something you can read every morning and evaluate: did the agent do what I wanted? Is the output accurate? Is it useful?

**One week.** Not a six-month roadmap. Run the experiment for one week. At the end of the week, you will know whether it works, what it gets wrong, and what to adjust. That is enough to decide whether to expand it.

This is not a limited ambition. It is a precise one. The scope of the first experiment is narrow specifically so that the feedback loop is tight. Tight feedback loops produce learning fast. Learning fast is what gets you to Level 1.

---

## What Happens When You Run It

The first time you run a real experiment — not a demo, not someone else's use case, but your task, your data, your output — something shifts.

It is not always a perfect result. Usually it is not. The first output will be slightly off in a way that teaches you something: either the task was not scoped narrowly enough, or the context you provided was not precise enough, or the output format was not what you actually needed.

Each of those is valuable. Because the correction required to fix the output is also the process of articulating more clearly what you actually want. And when you articulate that clearly enough for an agent to do it, you have done something that has a value beyond the agent: you have made explicit something you previously held only as instinct.

Run the corrected version. Evaluate it. Adjust again if needed. By the third iteration, most experiments produce outputs that are genuinely useful — not because the agent got smarter, but because your instructions got clearer.

This process — run, evaluate, refine, run again — is the texture of Level 1 in its early phase. It is not passive. It is not "let the AI do everything." It is active collaboration, where your contribution is the clarity of your thinking and the quality of your goal-setting, and the agent's contribution is the execution that makes your thinking visible.

---

## Pro Tip: Quality Gates Before the Output Reaches You

There is one additional design decision that significantly improves the quality of what you get back — and reduces the back-and-forth that makes early experiments feel exhausting.

Define the quality criteria upfront, and tell the agent to check its own output against them before it sends you anything.

Without this, the default pattern is: agent produces something, sends it to you, you give feedback, agent revises, you evaluate again. This works — but every iteration requires your time and attention. You are the quality gate.

With criteria built in, the pattern changes. The agent produces something, checks it internally against the criteria you defined, and if it does not meet them, it revises before you ever see it. What arrives is already past the first round of review. You are no longer the first reader — you are the final one.

Here is what quality criteria look like in practice. For a daily email summary: "Check that every item is a direct quote or accurate paraphrase from an actual email. Check that the three most important items are listed first. Check that the total summary is under 200 words. If any of these is not met, revise before sending."

That is a quality gate. The agent runs it, not you. The result: less back-and-forth, higher quality from the first version, and more of your attention available for the things that actually require a decision from you.

---

## The Question of What to Eliminate from Your Life

There is a second kind of elimination that becomes available once the first experiment is working.

Up until this point, elimination has been about scoping the experiment down. Now it becomes about looking at your actual working day and asking: what here should not be mine?

Not what is boring. Not what is tedious. What genuinely does not require your judgment?

This is a different question, and it is harder to answer honestly. Most people have spent years treating all of their work as if it requires them equally — because no alternative existed. When the alternative appears, suddenly some of the work reveals itself as never having required a human at all. It was only being done by a human because there was nothing else to do it.

The candidates are usually obvious once you look for them: the recurring reports that follow the same structure every time, the research tasks that involve gathering and summarising information that already exists, the monitoring tasks that require checking something and flagging a deviation, the formatting and filing that happens after the real work is done.

These are not small things. For most people doing knowledge work, they account for two to four hours of every working day. That is one full working day per week — returned to you, if you are willing to design the system that handles it.

Eliminate from your own plate what does not belong there. This is not laziness. This is precision. The goal is not to work less. The goal is to work on the things that actually require you.

---

## Your Fourth Step

Take your read-only experiment design from the last chapter. Apply the four decisions:

One task. One data source. One output format. One week.

Then run it.

Before you start, write one sentence describing what success looks like. Not "it works" — something specific. "The daily summary contains the three most important things I would have noticed myself, without me reading everything." "The meeting notes capture every action item with the right owner." "The research briefing gives me enough to make a decision without reading the original sources."

That sentence is your evaluation criterion. At the end of the week, you will know whether you met it.

If you are unsure how to set the experiment up technically, use this prompt:

> *"I want to run a one-week AI experiment. The task is [your task]. The data source is [your one source]. The output should be [your one output]. I want to keep this as simple as possible — the goal is to test whether the concept works, not to build a complete system. I am not a developer and I do not want to write code. Please suggest existing AI tools and services I can use, and explain each step in plain language without technical jargon. What is the simplest way to get this running today?"*

Let the AI walk you through the setup. Ask follow-up questions until the path is clear.

Then run it.

Whatever happens in that first week — success, partial success, complete failure — you will have crossed a line that most people never cross. You will have moved from imagining Level 1 to testing it, in your context, on your terms.

That is not a small thing. That is the crossing.

**→ [The challenge — The Minimum Viable Proof](https://agentic-living.com/mvp)**
**→ [An example — SleepGuard: From Vision to Brain](https://agentic-living.com/sleepguard)**

→ *If you are working within a job:* your MVP is not a product. It is proof that one task in your role can be handled better. Look at your working week and find the task that takes the most time and requires the least judgment — the one that exists because someone has to do it, not because it requires you specifically. Design the experiment around that one task. If it works, you have demonstrated Level 1 in your context. That demonstration is also what makes the conversation with your organisation possible.

---
