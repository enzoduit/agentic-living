# Chapter 3: On Grounding — Building the Infrastructure of Trust

---

Before you build anything, you need to trust the thing you are building with.

That sounds obvious. But in practice, it is the step most people skip — and the reason most early experiments with AI agents end badly. Not because the technology failed. Because the person setting it up had not thought carefully enough about what they were actually connecting, to what, with what permissions, and why.

This chapter is about building that trust correctly. Not by hoping for the best. By designing the constraints first.

---

## The Fear That Is Not Irrational

When I describe what I have built — an agent that runs continuously on a server, with access to my files, my emails, my calendar, my code, my communications — the reaction I get most often is some version of: *"Doesn't that mean it can do anything? Doesn't that mean you've lost control?"*

This is the fear that keeps more people at Level 0 than any other. And I want to be direct: it is not an irrational fear. It is pointing at a real risk. The question is not whether the risk exists — it does — but whether you can design around it intelligently.

The short answer is: yes. But only if you are deliberate about it before you start.

Here is what most people imagine when they think about an AI agent with access to their system: a single large entity with unrestricted access to everything, making decisions they cannot predict, reading what it should not read, changing what it should not change, acting without asking. Something like handing your house keys to a stranger and saying "please tidy up" without specifying what tidy means, what you want touched, and what is absolutely off limits.

That image is wrong. But it is only wrong if you make it wrong — if you design the system so that it is not that.

---

## The Isolation Principle

The first thing to understand is that a well-designed agentic system is not one entity with unlimited access to everything. It is a set of specifically scoped capabilities, each with defined boundaries, each operating only within the space you have intentionally given it.

Think of it not as handing over the house keys, but as giving a specific person a specific key to a specific room, with specific instructions about what they are allowed to do in that room.

The agent I run on my server does not have unrestricted access to my computer. It has access to a defined environment: a server that I control, with connections to specific services that I have deliberately chosen to connect. When a new connection is needed — a new service, a new data source, a new capability — I add it intentionally. Nothing connects without a decision.

This isolation is not a limitation on what agents can do. It is what makes them safe to run. And critically, it is what makes the output trustworthy — because you know exactly what the agent had access to when it produced it.

---

## The Read-Only First Principle

The second thing to design correctly is permissions. Specifically: start with read-only access, and earn write access over time.

This is the practical equivalent of what you would do with any new employee. You would not give a person you hired last week the ability to delete your company's database. You would give them the ability to read it, understand it, work with it — and only expand their permissions as trust was built and demonstrated.

The same logic applies here, and it is surprisingly easy to implement. Most services and APIs offer both read and write access as separate permission levels. When you first connect an agent to a service — your email, your calendar, your files, your business data — connect it read-only. See what it does with that access. Evaluate the outputs. Build confidence.

Only when you have seen the agent handle read access well — when you understand how it interprets the data, what it extracts, what it flags, what it ignores — should you consider giving it write access. And when you do, start with low-stakes write actions: drafting a message that you approve before it sends, creating a document in a sandbox folder, logging a summary to a file you review daily.

The instinct to "give it everything so it can really help" is the instinct that gets people into trouble. More access does not produce better results. Appropriate access, well-defined, produces results you can trust.

---

## The Data Perimeter

The third design decision is what data the agent has access to at all.

Not every piece of data you own should be available to an agent. Sensitive personal data, confidential client information, financial records, legal documents — these have higher stakes if mishandled. They require higher trust before you connect them.

The practical recommendation is to start your first experiments with data that has low sensitivity and high volume. Email newsletters, public-facing content, historical reports, meeting notes from internal planning sessions — these give the agent enough to work with to produce genuinely useful outputs, without exposing anything you could not recover from if something went wrong.

As the system proves itself — as the outputs are consistently correct, consistently within the space you defined, consistently aligned with what you would have done yourself — you expand the data perimeter. Deliberately. Not because the agent has earned it in some abstract sense. Because you have evidence that it handles data the way you want it handled.

---

## What This Looks Like in Practice

Let me make this concrete with how I actually started.

The first thing I connected was my running data. Ten years of activities from Garmin — GPS tracks, heart rate records, pace data, elevation profiles. The stakes of something going wrong: effectively zero. If the agent misread a pace number or drew an incorrect conclusion about my training load, the consequence was a wrong number in a report I would review anyway. No sensitive information. No irreversible action possible. High volume of data that could teach the agent a lot about how to work with it.

From there, I expanded: calendar data (read-only), email (read-only, for analysis and drafting), then specific file folders, then specific APIs. Each new connection was a deliberate choice. Each one came after I had seen the previous connections work correctly.

The first time I gave the agent write access — the ability to actually publish something, not just draft it — was months into the experiment, for a specific use case I had watched it handle perfectly in read-only mode for weeks. And even then, the first published outputs were things I reviewed before they went live.

This is not how technology demos work. Technology demos show you the full capability immediately. This is how responsible deployment works: trust earned incrementally, access expanded in proportion to demonstrated reliability.

---

## The Fear, Answered

So: does connecting an AI agent to your systems mean it can go wild with your data?

No — if you design it correctly.

The isolation principle means it only has access to what you have explicitly given it. The read-only first principle means it cannot change anything until you have decided it is ready to. The data perimeter principle means you are not exposing sensitive information until you have built the evidence that it handles less sensitive information correctly.

What you are building, when you do this well, is not a system that does whatever it wants with your life. You are building a system that does exactly what you have defined, within exactly the space you have defined, and reports back to you so that you can see what it is doing. The autonomy is real. The constraint is also real.

That combination — genuine autonomy within genuine constraints — is what makes it useful and what makes it safe. One without the other is either useless or dangerous.

---

## Your Third Step

You have your 2035 vision. You have stress-tested it against its most likely failure. Now you design your first real experiment.

The constraint: it must be read-only. The agent can observe, analyse, summarise, extract, and report — but it cannot change, post, send, or publish anything.

Open an AI conversation and type this:

> *"I want to design my first real AI experiment. It needs to be read-only — the AI can look at things, summarise things, and tell me things, but it cannot change or send anything. Here is what I have access to that I would be comfortable with an AI reading: [list 2-3 things — your calendar, your email, your files, your notes, a dataset you work with, whatever applies]. Given that, what is the most useful thing an AI could do for me right now that would show me something about my own work that I currently cannot see? Design the experiment."*

Let it design the experiment. Then ask it one follow-up question: *"What would I need to give you access to in order for this to work, and how would I do that safely?"*

You do not have to run the experiment yet. But by the end of this conversation, you will know what your first real experiment is, what access it requires, and what the output will look like.

That is grounding. You are no longer imagining Level 1. You are designing the path to it.

---
