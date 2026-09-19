# Chapter 8: Management by Abstraction

## Running 3 Companies Phone-Only

There is a distinction that took me months to understand properly, and it changed how I think about agents entirely.

The difference between a **task** and a **responsibility**.

A task is done when the action is complete. You gave an instruction, the agent followed it, it is finished. A responsibility is held when the outcome is right — and when the agent keeps checking, keeps monitoring, keeps acting, without being asked again.

Most people use agents as task executors. They send a message, the agent does the thing, they send another message. This is useful. It is also a fraction of what is possible.

The shift from task execution to responsibility holding is the shift that makes it possible to run multiple companies from a phone.

---

## The Three Levels

There is a progression in how humans delegate work — to other humans, to software, or to agents. Understanding where you are in this progression is the first step to moving further along it.

| LEVEL | WHAT YOU GIVE | WHAT YOU GET |
|---|---|---|
| **Direct Execution** | Step-by-step instructions for every action | Exactly what you described — nothing more, nothing less |
| **Task Delegation** | A defined task with acceptance criteria | The task completed; escalation when something is unclear |
| **Management by Abstraction** | An outcome, boundaries, and a quality standard | The agent decides the path; you review the result |

Most people with agents operate at Level 1. They describe processes, not outcomes. They tell the agent what to do, in what order, and then watch to make sure it happens correctly.

This is expensive. It requires your presence. It does not scale.

Level 3 — Management by Abstraction — is where the experiment lives. You set a clear target state. You define the boundaries the agent cannot cross without checking with you. You establish what good looks like. Then you step away.

The agent figures out the path.

---

## What Management by Abstraction Actually Looks Like

Three operating rules changed how I work, and they apply regardless of what you are building or managing.

**Rule 1 — Specify outcomes, not steps.**

The difference between a weak brief and a strong one is not detail — it is the level at which the instruction is written.

A weak brief describes a task: "Monitor our SEO performance." A strong brief describes a responsibility: "You are responsible for our AI search visibility. Each week, check where we are cited on Perplexity and similar engines for our target queries. If we have dropped since last week, investigate why and propose what to change. If we are gaining ground, identify what is working and double it. Send me a summary every Monday with a specific recommendation — not a status report, a recommendation."

The first brief makes the agent a scheduler. The second makes it a function holder. The difference in the outputs over three months is not incremental — it is categorical.

The outcome format also forces you to think more carefully about what you actually want. When you have to describe what good looks like precisely enough for a system to pursue it without asking clarifying questions, you discover how often you were not quite sure yourself. That clarity is valuable regardless of whether an agent is involved.

**Rule 2 — Establish thresholds, not approvals.**

The most common failure mode in agentic operations is the approval bottleneck. Every action requires your sign-off. The agent cannot proceed without you. You become the constraint.

Tim Ferriss solved the same problem in *The 4-Hour Workweek* with his virtual assistants. His rule: any problem that can be resolved for less than $100 in a way that makes the customer happy — just fix it. Do not email me, do not ask permission, just act. The threshold was explicit. Below it, autonomy. Above it, escalation.

The principle transfers directly to agents. Grant autonomous authority up to a defined boundary, and surface everything above that boundary to you.

In practice: the agent can spend up to a certain amount without checking with me. It can make code changes that do not break production without checking with me. It can draft and queue emails without checking with me — but cannot send them. It can update DNS records for domains it has been explicitly authorised to manage without checking with me — but cannot touch anything outside that scope.

Within those thresholds, it acts. Outside them, it flags.

This requires you to think carefully about where the real risk lives — not because you want to minimise approvals, but because you want approvals to happen when they are genuinely needed and not happen when they are not. An approval for a task that the agent handles correctly every time is a tax on your attention. Design it out.

**Rule 3 — Weekly check-ins, not running commentary.**

Imagine hiring an intern who comes to your desk every five minutes. "I finished this paragraph — should I start the next one?" "I found three options for this — which do you want?" "I wasn't sure whether to include this — what do you think?" Each question is reasonable in isolation. Together, they destroy your focus and produce a working relationship where the intern cannot take a single step without supervision.

Now imagine the same intern with a different setup: a weekly check-in where you review what they have done, answer any open questions, and set the direction for the next week. Between check-ins, they figure it out. They make judgment calls. They escalate only when something genuinely cannot wait.

The second intern gets better over time. The first never does — because they never develop the judgment that comes from working independently.

Configure the agent the same way. Summaries on a schedule you define. Updates only when something genuinely requires your input. Not every five minutes. Not as a running commentary on what it is doing. A message when there is something worth your attention.

The day-to-day of running this system is quieter than people expect. The agent has a schedule. It runs. You interact with outputs, not processes. The exception is when something breaks — and when it does, you fix it from your phone, you add a guardrail, and you move on.

---

## Digital Employees

There is a further step beyond Management by Abstraction that the experiment revealed over time.

Rather than giving an agent a series of objectives to pursue, you can give it a role.

I gave one agent the role of Data Security Officer. Not a checklist to run once. Not a recurring task to execute on a schedule. A job. "You are responsible for the security posture of this system. That is your domain. Do what that job requires."

The agent built a compliance profile. Created automated monitoring. Documented everything. Flagged issues when they arose. Extended its own scope when it identified a gap in coverage.

On July 17, it found something during a routine check: the portal where the agent operates had no access control. Anyone who knew the address could open it. The agent flagged it, created an access application, verified the fix, and extended the monitoring to seven domains.

I received a summary message. The portal was already protected by the time I read it.

The comparison that matters here is not agent versus a human security expert. It is agent versus what most small organisations actually have in that role — which is nothing. The audit was deferred. The monitoring was sporadic. The documentation did not exist.

An agent holding a responsibility is not the alternative to an expert. It is the alternative to the gap.

| DELEGATION MODEL | WHAT YOU GIVE | WHAT HOLDS IT |
|---|---|---|
| **Task** | "Run this check on Monday" | A calendar reminder |
| **Objective** | "Maintain our security posture" | The agent, continuously |
| **Role (Digital Employee)** | "You are the Data Security Officer" | The agent, with judgment |

The role model produces something qualitatively different from a task or an objective. It produces an agent that asks itself, unprompted, what it should be doing — within the boundaries you have established. It is the difference between an employee who does what they are told and an employee who owns their domain.

Building these requires more upfront investment than configuring a task. You need to write a role description clear enough that the agent understands its scope. You need to define what good looks like, what bad looks like, and what requires escalation. You need to let it run and observe where its judgment does not match yours — then refine.

The return on that investment is a system that holds responsibilities you currently hold yourself, continuously, without forgetting and without needing to be reminded.

*"Withdraw into yourself as much as you can. Associate with those who will make you better."*
— Seneca, Letters to Lucilius
