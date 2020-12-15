---
title: 'Basic but powerful principles'
date: '2020-12-14'
description: 'Keep complexity under control'
---

Hello there, we are in week 11 in the Nearsoft Academy program. The goal of this program is to turn recent graduates into world-class software engineers. There are five phases which one with its own purpose. Now, we are in the third one that is about contributing to open source projects. So in this phase, I am mostly reading codebases and coding a lot.

Now, let me share my learnings and takeaways of the week.

### Frontend challenge

One of the uses of the state in the frontend is to change the view responding to events, like user interactions. The issue I worked on this week was about building a whole view of sort of a user dashboard view.

Therefore, I made extensive use of the useState react hook to change the sort of cards displayed and the grid they were on.

The challenge was the level of detail of the design. It follows the principles of material design from Google. Also, the layout has mobile and desktop views.

I follow the mobile-first approach to make the view. Once I read that in terms of performance, it is better to make the layout and styles first for mobile views. Also, if we see that 67 percent of your visitors will visit your sites from their mobile devices it is a good practice to start with the mobile view.

**What is Material Design?**

According to the official site, [material.io](http://material.io/) "Material is a design system created by Google to help teams build high-quality digital experiences for Android, iOS, Flutter, and the web".

Material Design is guided by print design methods - typography, grids, space, scale, color, and imagery - to create hierarchy, meaning, and focus that immerse viewers in the experience.

The open-source project I'm working on uses a styles library called material UI which is a library that applies CSS-in-JS. This is a way to write CSS in javascript files. This allows you to write your CSS in the same file along with your components in React. Also, you can apply logic to makes your styles react to events, states, and user interaction.

### Principles DRY, KISS, YAGNI

I set two hours a day to read about general concepts or principles of software development. This week I dived into three basic but powerful principles that have the purpose of reducing the complexity of your code. In the introduction of the book "Eloquent Javascript," the author **Marjin Haverbeke** says that "*keeping programs under control is the main problem of programming*.. *the art of programming is the skill of controlling complexity*...*The great program is subdued - made simple in its complexity".*

Therefore, If we need to keep the complexity of our code under control we need principles that help us with it. This is what DRY, KISS and YAGNI are about. So let me explain one by one so we can grab an overview of each.

### KISS

For sure, you are not going to be the only person that sees your code. Once I heard a bit of advice that you, as a developer, need to keep in mind that you don't write code for machines but other developers. That's why it is critical to write simple code, avoiding unnecessary complexity as you can since the simpler your code is, the simpler it will be to maintain it in the future, for you or others.

KISS means "**Keep It Simple Stupid",** and it is a term coined by an engineer called Kelly Johnson. He was the lead engineer in a company that design airplanes for the US navy in the 60s. He was in charge of the development of the famous spy plane U2.

Kelly had the idea that simplicity should be a key goal in design. This would make it simpler to fix the planes in any scenario.

The term was adopted in the software development industry as a best practice and a principle that guides design decisions.

In my case, when facing problems I try to think about the most simpler solution. However, this is not as simple as it sounds, to handle complexity and finding an elegant and simple solution requires a lot of experience but I think that it is an ability that can be trained. So, the more I try to apply it, even in small things, the quicker I will develop the skill.

### YAGNI

Before this week I have heard a bit about KISS and DRY principles, however, I have never heard about YAGNI which stands for **"You aren't gonna need it"**. It is part of Extreme Programming which is a framework part of agile methodologies and it focuses on appropriate engineering practices.

Specifically, YAGNI is about avoiding building extra functionalities thinking that we may need them in the future. In most cases, you don't. So, to gain efficiency you need to apply YAGNI during development. Also, YAGNI is behind the practice of "Doing the Simplest Thing That Could Possibly Work".

To apply this principle you need to focus just on the features you are working on at the moment and resist the temptation of trying to think way ahead into the future of the project.

We have to be careful with this principle since we are talking about extra features not writing no clean code for not caring about the future of the codebase.

### DRY

Dry is an acronym for "**Don't Repeat Yourself"**. it refers mainly to keeping a logic unit in one place.

In the book Pragmatic Programmer, which I'm reading right now, the authors Andrew Hunt and David Thomas explain this principle as: "every piece of knowledge must have a single, unambiguous, authoritative representation within a system".

When you don't follow DRY you get the opposite which is WET solutions, which stands for "We Enjoy Typing" or "Write Everything Twice either".

### Last thoughts

This week was hard since I felt less energy and focus. It was harder to work on my issues and to keep my attention during my study sessions. I think it has to be with the social isolation and that I hadn't taken days-off, not even on weekends, for several months. So, this week I learned that to maintain peak performance and high productivity we need days of relaxation.