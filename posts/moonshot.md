---
title: 'Moonshot thinking'
date: '2020-10-05'
description: 'kmslkclknclsknclns'
---

# What I did learn - week 3

Created: Oct 19, 2020 8:22 PM

We are in week 3 of the academy program. 

Overall, in this week we have dive into testing drive development. Also, we saw some material about machine learning, communication and other fancy topics. 

**Moonshot thinking**

It was exciting to see the launch of SpaceX this year to the International Space Station. It makes the world to think in space traveling again. Rockets, astronauts and high technology were topics that were in the media for weeks. All the event was amazing. But, if we think that we as species got the moon more than 40 years ago it is so incredible. How can they even make it with that technology?

That's what moonshot is about: to make an impossible goal.; then, make the disruptive technology and the environment that makes it reachable. 

Astro Teller is the director of google X which is a innovative lab where they ideate, test and launch disruptive projects, he used to say - "it is easier to get a 10x improvement than just 10 percent of it in anything. " 

To apply moonshot thinking we have to follow three steps:  

- Huge problem
- Breakthrough technology
- Radical solution.

**The future of programming** 

There is a talk with this title by Bret Victor where he makes a really interesting thought experiment. He assumed it was 1980 and talked about how programming will be in 40 years from that moment.  

During his talk he focuses on four ideas that he expect will be the future of programming languages. 

1. Coding - Direct manipulation of data
2. Procedures - goals and constraints
3. Text dump - spatial representations 
4. Sequential - concurrent 

With this experiment Victor wanted to show the possibilities of programming languages that haven't been discussing enough and are not in the mainstream. Nowadays, we have the computer power to explore these ideas, we just to have our minds. As Victor says: 

> Technology changes quickly, people minds changes slowly. It is easy to adopt new technology but it could be hard to adopt new ways of thinking.

When something has change in programming there has been always resistance. Mostly because people needs to unlearn and learn again the new way. 

**The best presentation of your life**

During the first phase of the academy program we have to give four talks about any subject we find relevant. To tell you the truth, it is a challenge since this talks must be in English and in front o many people, in our case, specifically,  in front of many people virtually speaking because of the 2020 pandemic. 

When I am writing this I have given two out four. I think they were okey but the next two will be better because now I have some tricks to make a greater impact in the audience. 

Therefore, I want to share some techniques that I have learn in the last days and I will apply in my next talks. 

These techniques have two goals: make people think and make people feel. They are the basis to have  a great presentation. 

**Make people think**

- Give something new. Explain why it is useful.
- Simplify. Less is more
- Order - if your talks is long less than 20 minutes go from general to particular, go from particular to general otherwise.
- Structure your content
- Association

**Make people feel**

- Have public participate
- Make questions
- Speak with images - you can use a rule, if you have to say something with less than ten words use an  image instead.
- Use objects
- Emit your emotions

**Machine Learning**

What is machine learning?

ML is a subfield of Artificial Intelligence, they study of algorithms that learn from examples and experience instead of relying on hard-coded rules. 

We have two libraries to start experimenting with ML:

- Scikit-learn
- Tensor flow

The state of the art: 

**Collect Training Data** 

Examples of the problem we want to solve. 

The more training data we have, the better a classifier we can create.

**Train Classifier** 

We can think of it as a box of rules in a form of a decision tree created by an algorithm. 

We can think a classifier as a function that takes some data and assign a label to it. 

We need to train a classifier with a recipe called supervised learning.

**Make predictions** 

The classifier takes an input and compares it with the training data to predict the result. 

**Vim**

Once I watched a tutorial where the developer was writing code in an editor that looked so sophisticated. He didn't use the mouse at all and it seems that his fingers along with his mind were in a pure state of flow. While he was speaking and tapping the keyboard the screen showed code without any interruption. So, I did some research and found out that the editor the instructor was using was Vim. 

Vim is a command-line editor  based on the Vi editor of the Unix systems originated in 1976. It's founded in the philosophy that when programming, you spend most of your time reading/editing code not writing it. Consequently, vim is a model editor, it has different modes for inserting text vs manipulating text. 

This week I did my first steps in this editor. First I learn how to enter and exit the editor. Specially, I focused on learning how to exit the editor since it is a common question in Stack overflow, it is not that hard but you need to understand about modes which it is the basis to understand the  main functionality: add, edit, delete text, navigate among files and so on. 

Now, I know the basics but being productive requires practice so you can work with it automatically. That is when magic happens - it's what I've heard. In order to be able to use vim productively I committed myself to continue practicing day by day. I think, this way it will be a matter of weeks to gain relevant skill on it so I can use it in a project. I will be recording my journey on this. 

**Test Driven Development**

TDD is a programming technique where you write test code before implementation code. 

This means that you write test code with the desired behavior of your program. The test output shows a descriptive message that inform the implementation of the program. 

To look at it another way, you need to think about what you want to do and then think about how to test it. 

In TDD we have something called red-green-refactor cycle. The output of a test can be either green, if pass, or red if it doesn't. After writing the test the code should always fail at first to see the implementation for the desired behavior. Then, we have to write code that make the test pass which will show the output in green. Finally, we have to optimize our code. 

**Unit testing Development**

Unit tests are automats tests written by developers theirselves to ensure a section (or unit) of an application works as expected. This unit could be a function, class, method and so on. 

We have two types 

**Solitary**

It is the unit that is isolated from the rest of the unit. it is to see if the unit by itself has the expected behavior. 

**Sociable**

The tested unit relies on other units to fulfill its behavior. Although, this term could sound contradictory the key is to write the test of a unit assuming that everything other than the unit is working correctly. 

It is important to highlight that you should just run those tests that are operating over the part of the code you are working on. 

Before commit changes to version control, you should run the tests. That is a step  in Continuous Integration system. 

**Xunit**

This is the name of a series of frameworks to organize and run units tests. They came from Junit which was the pioneer of those sort of frameworks for testing. For example, the red/green indicator was something it brought to the development world. And, most importantly it was the one that makes easy for developers to define tests in the environment they were working in.  

**Java**

This week we had to solve a problem in Java: a movie recommender. And, to tell you the truth I barely know about the language and its environment. I just knew, for instance, that it is pretty popular. it uses OOP and it's compiled. It was designed and built in the 90s in sun micro systems. Besides that, I never have use it and didn't know its syntax. But, following the philosophy that claims: it doesn't matter what you don't know but how quickly you can learn it, I put my hands on it. 

With a series of articles I learned how to install it, the Java build tools,  its dependencies how to manage them and so on. 

To learn the syntax I used codecamy which to me it is a great resource to learn the basic syntax of a language. It was not that hard as I thought but being honest, I wasn't used to typed languages and semi colons  -I don't use it in javascript- so this was challenging at first. 

To improve the performance of the movie recommender it was better to use Hash maps instead of lists so it was great to apply my late learnings on data structures. It is a topic that I am pretty interested in diving into deeply.  

I want to keep experimenting with Java in the next weeks. An important part of the digital infrastructure we have as a civilization runs on Java so I think it is worth learning.