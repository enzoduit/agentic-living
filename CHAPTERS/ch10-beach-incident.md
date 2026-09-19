# Chapter 10: Emergency Response from a Spanish Beach

## Handling Incidents

Day 110 of the experiment. Altafulla, Catalonia.

It was sunset. Sand between my toes. No laptop in sight.

Then one of my agents crashed — the one that manages the other agents. The one running operations for clients. I needed terminal access to my server. From my phone. Right there on the beach.

First reaction: hands over my head.

One hour of troubleshooting. A human error — mine. I had not connected my VPN before arriving at the beach. What should have been a ten-minute fix became an hour of working around the connectivity issue I had created for myself.

Then: fixed.

And then something strange happened. I did not stop. I kept going. Voice commands. New things implemented. Full flow state, for another hour. Honestly the most productive hour of the week.

---

## What Made It Work

The beach incident is not a story about a dramatic recovery. It is a story about design.

The system survived because of decisions made weeks earlier — before there was a crisis to survive.

The agent infrastructure was in the cloud, not on a local machine. When the agent crashed, I could reach it from anywhere. No laptop required. No office required. No particular physical location required.

The tools I needed — terminal access, diagnostic scripts, the ability to restart services — were accessible from my phone. Not convenient from my phone. Not possible with effort from my phone. Actually designed for my phone, as the primary interface, from the beginning.

The second hour of productive work that followed the fix was not an accident. When the crisis resolved and the adrenaline settled, the setup was intact. The agents were running. The context was there. All I had done was pick up from where the system had been before the crash. Everything I needed to work was already in my hands.

This is what it means to design without backdoors.

A backdoor is any dependency that pulls you back to a specific device, location, or set of conditions to function. The Mac Mini at home — backdoor. The laptop in the office — backdoor. The fast internet connection as a requirement — backdoor. Every time you build something that only works "properly" under specific conditions, you are creating a failure mode for every other condition.

The design principle: if it does not work from a phone, on a bad connection, while you are doing something else — it is incomplete. Build it so it works there first. Everything better is a bonus.

---

## The Security Incident

Six weeks after Altafulla, a different kind of incident.

July 17, 2026. The agent ran its daily infrastructure check — a routine scan I had set up as part of the Digital Employee configuration — and found something.

The portal where the agent itself operates — where its task queue sits, where its monitoring data lives, where its decisions are logged — had no access control on it. Anyone who knew the address could open it.

How long it had been that way: unknown.

The agent flagged it in its next summary. Created a Cloudflare Access application to protect the portal. Verified the fix. Then extended the daily check to cover seven domains and built a permanent alert for any future gap.

I received a summary message. The portal was already protected by the time I read it.

This is the detail worth sitting with: the agent found its own security gap. Fixed it. Built a monitoring layer so it could not happen again. And the whole sequence happened while I was not watching.

Not because I had told it to find security gaps. Because I had told it to hold the responsibility of a Data Security Officer — and a Data Security Officer checks for these things. The responsibility was the instruction. The specific action was the agent's judgment.

---

## What Incidents Actually Are

In a traditional setup, an incident is an emergency. Something has gone wrong, someone needs to intervene, and until the intervention happens the problem persists.

In an agentic setup, an incident is information. The system encountered something outside its operating parameters. It handled what it could, flagged what it couldn't, and is waiting for a decision.

The Altafulla crash was an incident I had to handle myself — the agent could not fix its own process crash. But I had the tools to handle it from the beach. The fifteen minutes I lost to the VPN mistake were my own. The fix was straightforward once I connected properly.

The security gap was an incident the agent handled without me. I found out after the fact. The only thing the summary required was reading.

The pattern that emerges over time: as the system matures, the incidents you have to handle personally get smaller and less frequent. The incidents the system handles without you get larger and more sophisticated. The ratio shifts. Not because nothing breaks — things always break — but because the system's scope of autonomous action has grown.

By July 17, the agent's scope of autonomous action included: find a security gap, create access controls, verify the fix, extend the monitoring, build an alert. That is not a small scope. Six months earlier, none of it existed.

---

## The Line That Stayed

Walking back up the beach after the fix, I had the thought that became the clearest summary of what agentic living actually feels like:

*Industrial revolution: more hours at the assembly line.*
*Digital revolution: more hours in front of a screen.*
*Agentic living: finally free from the screen. Not from the work. The intensity counts. Not the hours.*

The screen is where we perform work for an audience that includes ourselves. It is where we demonstrate that we are working. The agent does not need the performance. It needs the outcome.

Remove the performance. Deliver the outcome. That is what the Altafulla hour was about — and what every other hour of the experiment, done well, was about.

*"Where is the wise man? He is wherever you find him, whether on the beach, in the mountain, or in the crowd."*
— Seneca (attributed)
