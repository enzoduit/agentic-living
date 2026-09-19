# Chapter 5: On Nomination — Deputising What Does Not Require You

---

You have crossed from Level 0 to Level 1. You have proven one thing: a system can do the thing. One experiment, one task, one week — and you have demonstrated that autonomous operation is real for you, not just in principle.

The question arrives immediately: what next?

The answer is Nomination. Not more experiments on the same scale as the first. The practice of identifying what should be handed to an agent permanently — not as a task, but as a responsibility — and growing the stack one nomination at a time.

---

## What the Data Actually Shows

Let me give you the numbers first, because numbers are harder to dismiss than philosophy.

For the first four months of my experiment, the ratio of autonomous background sessions to interactive ones stayed roughly flat. Somewhere between five and thirty percent of all activity was automated — scheduled checks, cron jobs, reports that ran whether or not I was at a keyboard. No clear trend.

Then July: fifty-seven percent autonomous.

In a single month, the agent ran 728 autonomous sessions alongside 542 interactive ones. For the entire first four months combined, there had been 33 autonomous sessions total.

This did not happen because of a single decision. It happened because of dozens of nominations made over four months — each one adding a layer to the stack, each one expanding what the system held without me. The July numbers are not the result of a moment. They are the result of a practice.

Nomination is how the stack grows.

---

## Task Executor vs. Responsibility Holder

There are two ways people work with AI agents. Most people default to the first. The most powerful practitioners use the second.

The first way: task executor. You brief it; the agent completes it; you review it; the cycle repeats. Tasks work. They produce real results. But tasks are not what produces a 57% autonomous figure.

The second way: responsibility holder. You define the scope; the agent holds it continuously; it acts without being asked; it finds problems you did not specify.

The difference in results is not incremental. It is categorical.

Most people use agents as task executors. The more powerful use is as responsibility holders.

Here is the distinction in practice. The weak version of nomination sounds like this: *"Monitor our domain's performance and tell me if it drops."* This produces a task executor — a system that checks once, reports, and waits for the next instruction.

The strong version sounds like this: *"Your responsibility is that this domain ranks first on Perplexity for our target queries. The metric is position. You can check this yourself. If we are not ranked first, investigate why and propose specific changes. If we are gaining ground, identify what is working and recommend how to extend it. You hold this outcome. Report to me only when you have a specific recommendation or when the situation changes materially."*

The first gives you a reporter. The second gives you an employee.

---

## The Data Security Officer

The clearest example from my own system: the Data Security Officer.

I know what a Data Security Officer does. I know their checklists, what they audit, what they document, what they flag. So rather than giving my agent a checklist to run once, I gave it a job: *"You are the Data Security Officer for this system. That is your responsibility. Hold it. Do what that job requires."*

The agent built a compliance profile. It created automated monitoring. It flagged exposures. It documented everything. The output was not a task completed — it was a function held.

On July 17, running its daily check without being asked, it found something I had not specified: the portal where the agent itself operates had no access control on it. Anyone who knew the address could open it.

The agent flagged it, protected the portal, extended monitoring to seven domains, and built a permanent alert layer. By the time I received the summary, the problem was already solved.

A task executor would have run its check and moved on. A responsibility holder found something outside its assigned scope, understood why it mattered, and acted.

An agent holding a responsibility is not the alternative to an expert. It is the alternative to the gap.

If you are already running OpenClaw and want a ready-to-use interface for managing the digital employees you nominate, I have built an open-source framework for exactly this: **[→ Digital Employee Framework](https://github.com/enzoduit/de-framework)**. Fork it, adapt it to your stack, and use it as the management layer for the roles you are building.

---

## The Knowledge Principle

Here is the one thing that governs everything in this chapter — and the one most people get wrong.

You need to understand the role you are nominating well enough to evaluate whether the agent is fulfilling it correctly.

Not to do it yourself. You are nominating because the execution should not be yours. But you need to be able to read the output and judge it. You need to ask the right questions, challenge a result that looks wrong, and refine the standard over time.

**No knowledge plus AI is dangerous.** The agent will produce something, and you will have no way to tell whether it is doing it well or poorly. You cannot catch the moment things go wrong. You cannot improve what you cannot evaluate.

**Sufficient knowledge plus AI is extremely powerful.** You set the brief. You evaluate the output. You refine the criteria. The agent executes at scale; you hold the standard.

I knew what a Data Security Officer does. That knowledge is what made it safe to nominate that role. Not deep expertise — I am not a security specialist — but sufficient understanding to know when the agent's work was correct and to ask a sharp question when it was not.

This is the threshold: not the ability to do the job yourself, but enough domain knowledge to rate and challenge the output. If you cannot evaluate whether the nomination is working, you have not delegated a responsibility. You have abandoned one. These are not the same thing.

This principle also means something positive: the practice of nomination forces you to articulate your expertise. To brief a nomination properly, you must describe the role precisely enough for someone else to hold it. That articulation is valuable in itself. Many people discover, when they try to brief their first nomination, that they understand their own work more clearly than they did before.

---

## Your Fifth Step

Look at the ongoing responsibilities in your working life — not one-off tasks, but things that need continuous attention: monitoring something, maintaining something, holding a standard over time.

For each, ask: *do I understand this well enough to evaluate someone else doing it?*

Pick the one where your answer is clearest. Brief it as a role, not a task. Write the strong version: define the outcome, give the agent the metric it can use to evaluate its own performance, and be specific about what good looks like.

Then open an AI conversation and type this:

> *"I want to brief an AI agent to hold a role with ongoing responsibility, not just complete a task. The role is [your responsibility]. Here is what I understand about what the role requires: [describe it as you would to a new employee]. Based on this, what would the agent need to have access to, what would it monitor or produce on a regular basis, and how would you suggest I design the brief so I can evaluate whether it is doing it correctly? I am not a developer and do not want to write code. Plain language only."*

Pay attention to what the AI asks you to clarify. Every clarification request is a gap in your current brief — and a gap the agent would have fallen into if you had not caught it first.

→ *If you are within an organisation:* your first nomination is not a product or a new system. It is an ongoing responsibility in your current role — something that needs regular attention, that someone competent could hold with the right brief. Name that responsibility. Brief it the strong way. The conversation is exactly the same.

---

What you do with the hours that nomination returns — how you translate the freed attention into real output — is the chapter that follows this one.

---
