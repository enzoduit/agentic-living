# Chapter 2: On Why Most People Never Cross

---

The question I get asked most often is not "what is AI capable of?"

Most people have a rough answer to that. They have seen the demos. They have read the articles. They know, abstractly, that something significant is happening.

The question I get asked most often is: *"Okay, but what do I actually do?"*

It is a more honest question than it sounds. What it is really asking is: *I believe this is real, but I do not know where to start, and I am not sure I am the kind of person who can do this.* The first part is an information problem. The second part is something else — and it is the part that keeps most people at Level 0 indefinitely.

I want to spend this chapter on that second part. Not the information. The invisible barrier underneath the information.

---

There are three reasons most people never cross from Level 0 to Level 1. They look like practical problems. They are not.

**The first reason is that they are waiting to understand it before they try it.**

This sounds reasonable. In most areas of life, understanding something before doing it is the right order. You study medicine before you practise it. You learn the language before you travel. The understanding comes first; the doing follows.

With AI agents, this order is reversed. You cannot understand what they are capable of by reading about them. You cannot understand them by watching someone else's demo. You can only understand them by doing something with them — and the doing will, almost certainly, feel uncomfortable and imprecise and not quite right the first time.

The reason the 3-day workshop works with a 100% success rate is not that three days is enough time to explain everything. It is that three days is enough time to force people to do something — and the doing produces an understanding that no explanation can replicate. By the end of Day 1, most participants are not at Level 1 yet. But they have done something. And the doing changes the question from *is this real?* to *how far does this go?* That shift is the beginning of the crossing.

If you are waiting to understand it first, you are waiting for something that will not arrive on its own.

**The second reason is fear — that something could go terribly wrong.**

This fear is often unnamed. But it shapes almost every early conversation about agents. You have probably read the stories: AI systems accessing personal data without permission, taking actions nobody asked for. There was significant press around specific platforms — concerns about AI going wild, doing unexpected things with private data. Some of those stories are exaggerated. Some are not. The concern is legitimate.

The answer is not to dismiss the fear. It is to design around it by starting somewhere where the cost of going wrong is effectively zero.

The first thing I automated was not a business problem. Not anything company-sensitive. It was my Garmin data — six years of running activities: GPS tracks, heart rate records, pace data, elevation profiles. Something entirely mine. If the agent misread a pace number or produced a wrong training summary, the consequence was a wrong number in a report I would review anyway. No irreversible action possible. No sensitive data. Nothing that belonged to anyone else.

But from that starting point, something happened I had not fully anticipated. The agent took the raw running data and built something real: a short documentary of my training season, a coaching summary, a live page on a public domain. I had built software end-to-end — from raw data all the way to deployment, publicly visible — without being a developer. It was mine to own entirely. No company involvement, no permissions required, no risk to anyone else. And because the stakes were low, I could see exactly what the agent did and where the limits were.

That experience changed something. Not just because it worked — but because I could hold full responsibility for the outcome.

Start where failure is free. Start with something personal, something yours entirely, something where a wrong output teaches you more than it costs you. The Garmin experiment is the template.

**The third reason is the most subtle, and the hardest to fix.**

Most people, when they try to give an agent a task, discover that they cannot describe it clearly enough for the agent to execute it well.

This feels like a problem with the agent. It is not. It is a problem with the clarity of their own thinking.

When you have been doing something for years, you develop unconscious competence — the ability to do a task well without being able to explain exactly how you do it. The judgment is so integrated that it no longer feels like judgment. It feels like instinct. And when you try to hand that task to an agent, you discover that "do it the way I would do it" is not a specification. It is a hope.

The process of writing clear instructions for an agent — good constraints, real context, explicit criteria for what success looks like — is also the process of articulating your own expertise to yourself. It is uncomfortable and slow the first time. It is one of the most valuable things you will do.

Because once you have articulated it — once the implicit has become explicit — two things happen. The agent can execute it. And you understand your own work more clearly than you did before.

This is one of the paradoxes of Level 1 that nobody prepares you for: the technology forces a precision of thinking that most people have been avoiding for years.

---

I want to name one more thing that sits beneath all three of these, because pretending it does not exist would make this book less useful.

Some part of most people is afraid of this.

Not afraid of the technology failing. Afraid of the technology working. Afraid of what it means for how they have been spending their time, for what they thought their expertise was worth, for the story they have been telling themselves about why their work requires them specifically.

This fear is legitimate. It is pointing at something real. The structural shift I described in the first chapter — the judgment layer moving up, the execution layer moving to agents — does change what expertise means. It does change what your time is for. It does change the story.

The question is not whether the story changes. The question is whether you get to be the one who changes it deliberately, or whether it gets changed around you while you were waiting to understand it first.

---

## Your Second Step

Take out the press release you wrote at the end of the last chapter.

Read it once.

Now — before you open any AI — close the screen. Think offline, without inputs. What is the one thing that could actually go terribly wrong with this vision? Give yourself a few minutes. Let your own thinking happen first, before the AI starts shaping the conversation. When you have a clear sense of the main risk, then open the AI.

Now open a new AI conversation and type this:

> *"I'm going to share something I wrote about a future I want to build. I want you to play devil's advocate. Assume it is the year this launched — and something went wrong. Not everything fell apart, but one thing did. It could be a mistake I made. It could be something I did not anticipate. It could be a way someone else was harmed. Ask me questions until you understand my vision, then tell me the one most likely failure. Be specific and honest — I can handle it."*

Share your press release with the AI. Let it read it. Let it ask questions. Then let it tell you the most likely way your vision fails.

This is the Black Mirror session from the workshop — compressed into fifteen minutes.

The purpose is not to talk yourself out of what you wrote. The purpose is to make what you wrote more honest. A vision that has survived its own stress test is worth pursuing. A vision that has not is just optimism.

After the AI tells you the most likely failure, write one paragraph — in the same document as your press release — describing what you would do to prevent it.

You now have a vision and a first principle for how to build it responsibly. That is not a small thing.

**→ [The challenge — The Black Mirror Session](https://agentic-living.com/black-mirror)**
**→ [An example — SleepGuard in Crisis: How It Could Go Wrong](https://agentic-living.com/black-mirror-example)**

→ *If you are working within a job:* your press release was about your role, not a startup. Run the same exercise: what is the most likely way this vision fails? Maybe it is that you build something your organisation does not allow you to use. Maybe it is that you automate the wrong thing and lose the confidence of your team. Find that specific failure. Then write one paragraph on what you would do to prevent it.

---
