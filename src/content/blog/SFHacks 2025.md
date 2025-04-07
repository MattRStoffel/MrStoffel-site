---
tags:
  - blog
date: 2025-04-06
title: SFHacks 2025
---

I am writing this the Sunday after attending SFHacks 2025 so my apologies for the run on sentences and bad writing you are about to experience, I am not responsible for your continued participation in this exercise. 
## What do
*Hack a Thon*

Who would want to stay awake spending their entire weekend working on a project, writing code that will in all likelihood never see the light of day after the weekend of writing it? Only a crazy person or someone who is doing it, not to make something truly useful but to learn. This weekend I attended SFHacks with a group of friends and it was one of the most novel and awesome experiences I've had at SF State.

My group was pulled together as a sort of connection we have with an enthusiasm for technology and the urge to build something that we thought would be an awesome learning experience over anything else. I am proud of what we built because it was something that was made for the sake of itself. We weren’t pandering to anyone. We built it for the novelty, and to learn something new. The things in life that are worth doing are not easy and this was something I would do again in a heartbeat. 
## What make
*Version control*

I have had building a version control system on my todo list for a long time and this was the perfect excuse to put that into practice. While git exists for managing code and other text files there is a gap in the world of.... any other kind of file i can think of off the top of my head. 
There are tools like git-lfs, which is an extension built on top of git that can handle binary files but there is a gap in its usability and that is acknowledged by the creators themselves. They say "Git LFS Is Not Designed for Artists" and that much is true. There is no integration with popular tools combined with the performance penalty they would experience when accessing their binary files in the system. All of the tools we could find did not store the diffs as the integral part of their version control system.

We decided to create "[Stewdio](https://github.com/MattRStoffel/stewdio)" We decided to address those two issues and we learned why no one else has attempted to solve that issue long term in any big way, let alone doing it in 48 hours. We decided to "keep it simple" and implement a single branch version control system that featured immutable versioning with real-time server syncing. 

Avoiding branches was one of the first things we decided when we first started working on it because we realized how herculean of a task it would be to handle any sort of merge conflicts with audio. That along with our expectation that most producers would not be working on a project in a distributed way the same way software is made, we just couldn't see a reason to spend the little time we had on making that happen.

My favorite problem that Stewdio solves is the file size problem. We are storing only the diffs of the files we change. Once a file is added to the repository any changes are tracked and only the changes are saved. Depending on the way edits are made we are saving orders of magnitude more space with our approach over traditional binary versioning systems. 
## How use
*CLI*

We built out a relatively robust cli for Stewdio using [cobra](https://github.com/spf13/cobra), which is an amazing tool for cli applications, making every command easy to write for interacting with Stewdio. This is one of my most favorite libraries in go because of how easy it makes writing actually good cli programs. I could go on forever about how great it is but really rather than hearing me talk about it just go check it out for yourself and make something neat, I would love to see it :)

Our main goal was to have the cli built out and i think we did an awesome job at that. We were hoping that once we built out a good cli we could take that and build out extensions for the DAWs that producers use so Stewdio would be used in an environment that they are already comfortable with, it was only obvious that is the only way there would be any adoption of the thing. 

I somehow was swindled into working.... front end..... WEB. I have some words to say to the web dev world and most of them come from a place of loathing and a combination of respect and confusion. I do not like react, javascript or almost anything that touches javascript in general. I am confused why anyone would chose to write javascript when there are so many other things to do with their lives, but that is neither here nor there. 

I threw together a nice little frontend that would visualize the waveforms to display the diffs in the versions knowing full well that if this project took off this would be vestigial organ that once served a purpose but would be almost instantly obsolete. It turns out that while i made a nice little visualizer that it was obsolete before we even finished the judging portion of the hackathon. I learned a lot!
## What fun
*Hearts*

I was not relegated to the lands of web the whole weekend and was able to work on some part of the project like logging and "pining" changes. There are so many things I love about the hackathon experience but the code quality is absolutely not one of them. I think it was so fun to be able to see first hand how fast a codebase could degenerate into confusion and how, if you are working on a small enough code base how it can be saved last minute. It was like riding a rollercoaster of asking ourselves if one feature would even work or not.

All in all I would say that hackathons are something that everyone should try once in their lives. Starting with an idea and coming out with a "finished" product in the span of 48 hours is such a fun novel experience. You end up learning so much, making friends and memories with them that will last a lifetime. You also get to see what you are capable when pushed and also get to learn what its like to drink too much redbull. 10/10 would hack a Thon again. 

#### [Look at our code :)](https://github.com/MattRStoffel/stewdio)