# Chapter 7: Management by Abstraction
## Running 3 Companies Phone-Only

There is a distinction that took me months to understand properly, and it changed everything.

The difference between a **task** and a **responsibility**.

A task is done when the action is complete. You gave an instruction, the agent followed it, finished. *(A brief aside: this is exactly the case where it is not an agent — it is a very sophisticated assistant. Everyone loves to talk about agents, but this is not agentic behaviour. An agent does not stop when the task is done. It holds the outcome.)*

Responsibility is held when the outcome is right — and the agent keeps checking, keeps monitoring, keeps acting without being asked again. That is the difference. Not whether the agent can execute. Whether it stays responsible after execution.

Most people use agents as task executors. The more powerful use is as responsibility holders. The difference in results is not incremental. It is categorical.

---

## The Three Levels

There is a progression in how humans delegate — to other people, to software, or to agents. Understanding where you are on this progression is the first step to moving further along it.

| LEVEL | WHAT YOU GIVE | WHAT YOU GET |
|---|---|---|
| **Direct Execution** | Step-by-step instructions for every action | Exactly what you described — nothing more |
| **Task Delegation** | A defined task with acceptance criteria | The task completed; escalation when unclear |
| **Management by Abstraction** | An outcome, boundaries, and a quality bar | The agent decides the path; you review the result |

Most people with agents operate at Level 1. They describe processes, not outcomes. They tell the agent what to do, in what order, then stay in the chat window to make sure it happens correctly.

This is expensive. It requires your presence. It does not scale.

Level 3 is where the experiment lives.

---

## Three Rules for Level 3

**Rule 1 — Specify outcomes, not steps.**

A weak brief describes a task: "Monitor our SEO performance."

A strong brief describes a responsibility. And a strong brief is built around a goal with a measurable success criterion — not a sequence of actions.

Here is the difference in practice. The weak version tells the agent what to do: *"Each week, check where we appear on Perplexity for these queries."* That is a task description. The agent will execute it. It will not hold anything.

The strong version defines the goal and gives the agent the tools to measure its own progress: *"Your responsibility is that this domain ranks first on Perplexity for our target queries. The metric is position. You can check this yourself by querying the Perplexity API. If we are not ranked first, investigate why — analyse what the current top results have that we do not — and propose specific changes. If we are gaining ground, identify what is working and recommend how to extend it. You hold this outcome. Report to me only when you have a specific recommendation or when the situation changes materially."*

The difference: the first tells the agent what actions to take. The second defines the world that should exist, gives the agent a way to measure whether it does, and makes the agent responsible for the gap.

The agent can now evaluate its own performance against a concrete criterion without asking you. That self-measurement capability is what makes the loop genuinely autonomous.

When you have to describe what good looks like precisely enough for a system to pursue it without asking clarifying questions, you often discover you were not quite sure yourself. That clarity is valuable regardless of whether an agent is involved.

**Rule 2 — Establish thresholds, not approvals.**

Tim Ferriss solved this problem in *The 4-Hour Workweek* with his virtual assistants. His rule: any problem that can be resolved for less than $100 in a way that makes the customer happy — fix it. Do not email me. Do not ask for permission. Just act.

The same principle applies to agents. Grant autonomous authority up to a defined boundary. Surface everything above that boundary to you.

In practice: the agent can spend up to a certain amount without checking with me. It can make code changes that do not break production without checking. It can draft and queue emails but cannot send them. It can update DNS records for authorised domains but nothing outside that scope.

Within the threshold: it acts. Above it: it flags. No approval queue needed for everything below.

**Rule 3 — Weekly check-ins, not running commentary.**

Imagine hiring an intern who comes to your desk every five minutes. "I finished this paragraph — should I start the next one?" "I found three options — which one?" "I wasn't sure whether to include this — what do you think?"

Each question is individually reasonable. Together, they destroy your focus and make it impossible for the intern to develop independent judgment.

Now imagine the same intern with a different setup: a weekly check-in where you review what they have done, answer open questions, and set direction for the next week. Between check-ins, they figure it out. They escalate only when something genuinely cannot wait.

The second intern gets better over time. The first never does.

Configure the agent the same way. Summaries on a schedule. Updates only when something genuinely requires your input. Not every five minutes. Not a running commentary. A message when there is something worth your attention.

---

## Digital Employees

There is a further step beyond Management by Abstraction.

Rather than giving an agent a series of objectives, you give it a role.

The clearest example from the experiment: the Data Security Officer.

I know what a Data Security Officer does. I know their checklists, what they audit, what they document, what they flag. So rather than giving my agent a checklist to run once, I gave it a job. "You are the Data Security Officer for this system. That is your responsibility. Hold it. Do what that job requires."

The agent built a compliance profile. Created automated monitoring. Flagged exposures. Extended its own scope when it identified coverage gaps. Did all of this without being asked each time.

On July 17, it found that the portal where it operates had no access control. Anyone who knew the address could open it. The agent flagged it, protected the portal, extended monitoring to seven domains, and built a permanent alert layer.

I received a summary message. The portal was already protected by the time I read it.

| DELEGATION MODEL | WHAT YOU GIVE | WHAT HOLDS IT |
|---|---|---|
| **Task** | "Run this check on Monday" | A calendar entry |
| **Objective** | "Maintain our security posture" | The agent, on a schedule |
| **Role (Digital Employee)** | "You are the Data Security Officer" | The agent, with judgment |

The comparison that matters: not agent versus a human expert. Agent versus what most small organisations actually have in that role — which is nothing. No audit. No monitoring. Not because they do not care. Because they cannot afford the role.

An agent holding a responsibility is not the alternative to an expert. It is the alternative to the gap.

*The system is connected and running. Now comes the stress test.*

---

*The architecture is in place. You have eliminated what did not require you, and nominated your deputies. The system runs. Now comes the hardest question — not only what do you actually do with the attention you have recovered, but what does it mean to translate it into real life. To make **Agentic Living** happen — not just as a system, but as a way of being.*
