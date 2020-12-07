---
title: 'Contribution'
date: '2020-12-06'
description: 'Starting in the world of open source'
---

We are in week 10 of the Nearsoft academy program. It is the second week of the third phase. This week we had to start contributing to open source projects. The goal is to make at least two pull requests. Just one thing is sure: I will be coding a lot until the end of the year which is great. I think I'm ready for it. Also, I found out an activity that can become my hobby for the months to come or maybe years!?

### **Open-source**

During this week my main thought was: Why did I do this before? Months ago, during my first stages of learning, I used to do little projects or exercises but sometimes I had the feeling that I wasn't learning enough either improving both soft and hard skills.

I was not improving my soft skills because I was doing small projects on my own. I wasn't part of large projects with other developers where I could practice my communication or see the dynamic of working with other developers.

I was not improving my hard skills enough since I was in a sort of comfortable environment with tutorials and not so big challenges.

I think all these things can be solved by contributing to open source. Now, I understand why the best developers in the world, started their careers in the open-source world.

I think it will be my new hobby next year. Also, since we are in a pandemic and there's a lot of time at home, it is a good time to getting involved in open source. So, I keep contributing every time to more complex and ambitious projects.

Also, it is a good chance to meet other developers around the globe which is exciting.

### **Pragmatic programmer**

This week I learned from this great book that lots of comments in our code break the principle of DRY - don't repeat yourself. Because when you write lots of comments you are repeating the knowledge already expressed by the code itself. If you need to change the code you would need to change the comments as well. If not, there's the risk that comments get out of date and untrustworthy comments are worse than no comments at all.
So here we have to keep in mind a couple of things bad code requires lots of comments and that comments should be just for high-level explanations.
This week I didn't read as much as I wanted. Next week I'm changing my reading session to the morning. This is a productivity hack I have seen often in blog posts, books, articles, etc. When you are struggling to keep doing something you have to do it first thing in the morning.

### **Java**

I committed myself to study the Java language for the next months daily. So far, I know the basis of its syntax and environment. However, I still have so much to learn about it. But if I keep practicing it consistently I'm sure I can make huge progress in the next couple of months. For this purpose, I've been using the learning platform of jet brains: [https://www.jetbrains.com/academy/](https://www.jetbrains.com/academy/)

It is great for me since I don't like to watch video tutorials. I think my way of learning is by reading and doing. So, in this platform through readings and interactive exercises, you learn the basics of the language. Little by little I am getting used to the language.

### **Backend and server-side programming**

I had been focused more on frontend development however I want to jump into the backend as well so I design a series of materials to start getting a solid understanding of backend development. I had curated content about web architecture, design patterns, event-driven development, relational databases, and so on. I will be writing more about these topics in the following weeks. So far, I am reading lots of articles to get a general context before getting deeper into one by one.

Specifically, this week I read about 101 web architecture. My technical vocabulary and knowledge got wider with concepts like job queues, full-text search service, caching services, cloud storage, and load balancers.

### **React**

In one of my contributions of this week I had to make a timer component that counts down when the page is rendered. It needed to have a default value of 180 seconds. The default value could be changed through props. Also, there must have an input so the user can set the time and override the default. 

 I took the approach to use a useState hook to save the input and then when the user click the set time button with the setter setSeconds update the timer. 

This was my code:

```jsx
const [userTime, setUserTime] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setUserTime(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSeconds(userTime);
    setUserTime('');
  };

		<input value={userTime} onChange={handleChange}  type="number" />
    <button onClick={handleSubmit}>Set Time</button>
```

One of the reviewers of the projects tell me that the code I wrote worked fine but there was a better solution using references. createRef() allows you to save a a mutable state that doesn't make the component to re render every time the state changes - as it happens with useState. This results in a better performance. 

Also, to have a better accessibility in the component I was asked to add a form element which handled an onSubmit event. With the type submit in the button element you connect it to the onSubmit of the form so you don't need an onClick here. 

This was my code after applying the changes requested:

```jsx
// you import createRef from 'react'

// declare a variable with the createRef with a value of null
// create ref retuns an object with current a valur properties
const userTime = createRef(null);

// with this approach you just need an handleSubmit function where you update
// the seconds state with the value of ref which change according to the value
// the user inputs
const handleSubmit = (e) => {
    e.preventDefault();
    const userTimeElement = userTime.current
    setSeconds(userTimeElement.value);
    userTimeElement.value = ''
};

// change the imput to add ref instead of onChange. 
//Also, add form element with an onSubmit element y change butto to type submit
<form onSubmit={handleSubmit}>
	<input ref={userTime} type="number" />
	<button type="submit">Set Time</button>
</form>
```

With this example we can see that there are many ways to solve a problem. Some are better than others. I think this is one of the things that you get with experience and code reviews with more experienced developers. 

### **Last thoughts**

This week was hard, as the program has been consistent since it began. But, as well as very rewarding since there were lots of learnings. I have felt that the dots of the first phase are connecting day by day lasts weeks. I tried to go back to my notes of those days to have a wider understanding of what it takes to be effective in the software development industry. Sometimes I feel overwhelmed because I realize the gaps in my knowledge. Also, I don't know where I should focus the most, I would like to learn all the languages and technologies but time is a limited resource. So, I need to choose and it's when I get frustrated. I hope things get clearer as time goes on.