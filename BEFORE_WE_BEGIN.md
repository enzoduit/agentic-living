# A Note Before We Begin

*This page is for the reader who has heard the word "agent" and is not entirely sure what it means. If that is you, read this first. It will take three minutes and it will make the rest of the book land differently.*

---

## What an Agent Is — and Is Not

A chatbot responds to you. You type something, it replies, it stops. You type again, it replies again. The conversation is the entire product. The moment you close the window, nothing continues.

An agent does something different.

An agent is given a goal — and then it runs. It thinks about what to do, takes an action, observes what happened, and thinks again. This loop — Thought → Action → Observation → Thought — repeats without you prompting it at each step. It can run for minutes, hours, or indefinitely. While you are doing something else entirely.

This is the difference that changes everything. A chatbot requires you to be present. An agent does not.

The research paper that forms the backbone of this loop is called ReAct: Reasoning and Action. Reading it is what started everything in this book. You do not need to read it. You just need to hold the loop in mind: Thought → Action → Observation. That is what an agent does, over and over, until the goal is reached or you tell it to stop.

*ReAct = Reasoning and Action. The name comes from the research paper that formalised this loop — the same paper that started everything in this book.*

---

## The Safety Question

The first thing most people ask: *"Does that mean the AI has access to my computer and can do anything?"*

No — if you design it correctly.

Here is the simplest way to think about it. Imagine a computer with nothing on it. A completely fresh machine. You install one piece of software. Then, deliberately and one by one, you add the things you want it to have access to: your calendar, your files, your email drafts, your data. Each addition is a conscious decision.

The agent can operate on everything inside that machine. It cannot reach beyond it.

Nothing is on the machine by default. Nothing connects without your decision. The perimeter is yours to draw — and once drawn, the agent cannot cross it.

This is exactly how the system described in this book is set up. Not a powerful AI with keys to everything. A defined environment, deliberately built, expanded only when the evidence says it is ready.

Chapter 3 walks through exactly how to build yours.

---

*With those two things clear — what the loop is, and why the perimeter makes it safe — you are ready for the rest.*

---
