# Chapter 7: Building the Digital OS

## Connecting Calendar, Files, and Tools

An agent that can only answer questions is a very expensive search engine.

The capability that makes agentic living possible is not reasoning — it is connection. The ability for the agent to reach into your actual life: your calendar, your inbox, your files, your code repositories, your infrastructure, your clients' systems. Not to talk about these things, but to act on them.

This chapter is about how to build that connection.

---

## The Architecture

The full system has seven layers. Each one does a specific job. Together they create something that can act continuously in the world without you present.

| LAYER | COMPONENT | FUNCTION |
|---|---|---|
| **Human Interface** | Mobile phone (Telegram / WhatsApp) | Issue intent, review results, approve decisions |
| **Agent Harness** | OpenClaw on cloud VPS | Runs continuously, routes all messages, manages agent lifecycle |
| **Reasoning** | LLM API (Claude / GPT-4) | Executes the Observe → Reason → Act loop |
| **Memory** | Workspace files + session history | Persistent context across all sessions |
| **Tools** | Terminal, APIs, browser, GitHub | Takes action in the real world |
| **Background** | Cron jobs + heartbeats | Autonomous scheduled tasks — no human trigger required |
| **Decisions** | Decisions interface | Surfaces human-required approvals in the right moment |

The human lives at the top and bottom of this stack: setting goals, approving outputs. Everything in the middle runs without them.

---

## What Needs to Be Connected

Before writing any instructions or building any workflows, connect the agent to the infrastructure it needs. Think of this as giving a new employee access to the building — they cannot do anything useful until they can get through the doors.

**Email.** The agent needs to read incoming messages and identify what requires attention. In practice, this means connecting it to your inbox with read access. The agent does not send emails without your approval — it drafts them, flags them for review, and delivers them to you for a final decision. But it needs to see what is arriving.

This connection paid for itself on day fifteen of the experiment. While I was at the Ushuaia race expo preparing to run 130 kilometres through Patagonian mountains, the agent ingested 3,971 emails from my professional inbox, identified the 639 I had personally written, and built a profile of how I write — my vocabulary, my sentence rhythm, my average length, my sign-off. "LG Enzo." Used 362 times. I did not set this up. The system set itself up while the race preparation happened. From that point on, the agent could draft emails in my voice.

**Meeting transcripts.** Every meeting — online and in person — should be transcribed and fed to the agent automatically. Not as a note-taking convenience. As an ongoing context layer.

When the agent has access to the transcripts of every relevant conversation, it does not need to be briefed on the background. It already has it. Decisions made three weeks ago are in the transcript. Context from a client call last month is in the transcript. The concern a team member raised in a standup is in the transcript. The agent can draw on all of it when it is working on something relevant, without you spending ten minutes re-establishing the context every time.

I set up Krisp to transcribe all meetings automatically — both online calls and in-person conversations — and deliver structured summaries to the agent within minutes of each meeting ending. The transcripts become part of the agent's working memory. The context accumulates. Over time, the agent knows the history of every project, every client, every ongoing conversation, without anyone having to maintain a separate briefing document.

**Files and documents.** The agent needs access to your workspace — the documents you reference, the notes you keep, the projects you are working on. This is not about making the agent a document manager. It is about giving it the context it needs to act usefully. An agent that cannot see your existing materials will constantly ask clarifying questions that you should not have to answer.

**Infrastructure and code.** If you run any technical systems — websites, APIs, databases, deployment pipelines — the agent needs access. On day thirteen of the experiment, the agent was given the keys to the company's internet infrastructure: domain records, web addresses, the ability to provision new services. This was not a small step. It meant the agent could update DNS, redirect web addresses, and deploy new configurations without anyone touching a technical console. It also began monitoring for new customer sign-ups every thirty minutes, notifying me when one arrived.

**Calendar.** The agent needs to know what is happening in your time. Meetings create follow-up actions. Deadlines create preparation requirements. The calendar is the rhythm of your working week, and the agent needs to see it to act in sync with it.

**The decision channel.** This is the most important connection, and the one most people forget. You need a way for the agent to reach you when something genuinely requires your judgment — a formatted, asynchronous channel that does not require you to be watching. In my setup, this is a decisions interface: every item waiting for human approval is assembled with full context and delivered as a voice-navigable list. I work through it on a walk. One decision, full context, minimum friction.

---

## What Not to Connect

Not everything should be connected, and not everything should be given write access.

The principle is simple: grant the minimum access required for the task, and expand it only when the agent has demonstrated reliable judgment within that scope.

Read access before write access. Restricted scope before broad scope. The agent does not need write access to your email to draft emails — it can draft them in a file and present them for approval. The agent does not need to be able to send money to manage your finances — it can prepare recommendations and present them for decision.

The security incident on July 17 of the experiment is the clearest illustration of why this matters. The agent ran its daily infrastructure check and found that the portal where it operates — where its task queue sits, where its monitoring lives, where its decisions are logged — had no access control on it. Anyone who knew the address could open it.

The agent flagged it, protected the portal, extended the monitoring to seven domains, and built a permanent alert layer.

I received a summary message. The portal was already protected by the time I read it.

This worked because the agent had been given the specific access required to fix security issues. Not unlimited access to everything — specific access for this specific purpose. The scope was right. The outcome was right.

Design access carefully. Then expand it as trust is earned.

---

## The Memory Layer

One connection that is easy to underestimate is memory.

An agent without persistent memory is like a new employee who forgets everything from the previous conversation every morning. They are capable, but you spend all your time re-establishing context rather than making progress.

The memory layer in this system is straightforward: a set of files that the agent reads at the start of each session and writes to at the end. These files contain what the agent needs to know about your situation, your preferences, your ongoing projects, and the decisions that have been made. Not a database with complex queries — plain text files, organised logically, read and updated by the agent as part of normal operation.

This is the difference between working with an agent that knows you and working with an agent that is meeting you for the first time. The first is dramatically more valuable. And it requires nothing more sophisticated than a file system the agent can access.

---

## The Background Layer

Once the connections are established, the system needs a way to act without being prompted.

This is the cron layer — scheduled jobs that fire automatically, at intervals you define, without any message from you. Daily email reviews. Weekly project summaries. Nightly infrastructure checks. Ongoing monitoring loops that run twice a week and have never needed your attention since they were set up.

The first cron job in the experiment fired on March 18, 2026. I was at the Ushuaia race expo. The session lasted 0.2 minutes. The agent ran a curl command, checked whether an SSL certificate had been issued for a domain, and logged the result. I did not know it had happened until I checked later.

That 0.2-minute session is the moment the experiment changed. Before it, every task required me to initiate. After it, the system had a schedule that ran whether or not I showed up.

By July, the agent was running 728 autonomous background sessions in a single month — monitoring, checking, summarising, reporting — alongside 542 interactive sessions with me. The human was no longer the only one working.

Connect the tools. Establish the memory. Set the schedule. The system is now ready to be operated.

*"We should conduct ourselves not as if we ought to live for the body, but as if we could not live without it."*
— Seneca, Letters to Lucilius
