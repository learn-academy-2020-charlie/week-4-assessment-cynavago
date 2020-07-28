# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer:
  Instance variables are variables that are created using the @ symbol. They are able to store data. For example, a car can have different attributes such as @oil or @wheels. These are instance variables that hold information. An instance variable is locally scoped to the class it belongs to.

  Researched answer:
  An instance variable is a kind of variable that starts with the @ symbol & is used inside classes to give them a place to store data. 
  
  Things to note:
  -An undefined instance variable always returns nil
  -Instance variables don’t have to be created in the initialize method, but that’s how you give them an initial value
  -You can’t access instance variables from outside the class, only if you create a new "window" into that class.


2. What is a block in Ruby?

  Your answer:
  Blocks in Ruby are pieces of code that are surrounded by the curly braces or by do/end. Inside the block, you have certain functions that need to be executed by the code.

  Researched answer:
  A block is a piece of code that accepts arguments, and returns a value. A block is always passed to a method call. A block, essentially, is the same thing as a method, except it does not have a name, and does not belong to an object.


3. Ruby has an implicit return. What does that mean?

  Your answer:
  In Ruby, we don't use a return the same way we use it in Javascript. In Ruby, an implicit return means that a line inside do/end or a block returns the last value automatically. 

  Researched answer:
  Any statement in Ruby returns the value of the last evaluated expression. A simple example is the getter method. An explicit return would be using the return keyword. An implicit return is without the return keyword, this is possible because ruby automatically returns the last evaluated expression. You didn’t explicitly state you want to return, but it still happening, so it implicit.


4. What is object-oriented programming? How is it different than functional programming?

  Your answer:
  Object-oriented programming is a way of computer programming that uses objects, which are pieces of code that are independent of each other and store data/behavior inside. OOP allows you to make individual objects based off a blueprint in a class.

  Researched answer:

  Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which are data structures that contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods.

  Functional programming is a programming paradigm, a style of building the structure and elements of computer programs, that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.

  OOP says that bringing together data and its associated behavior in a single location (called an “object”) makes it easier to understand how a program works. FP says that data and behavior are distinctively different things and should be kept separate for clarity.


5. What is the difference between a class and an object?

  Your answer:
  Objects hold data and behavior while classes contain all the objects and the methods inside it. 

  Researched answer:
  An object is a unit of data. A class is what kind of data it is. In Ruby, all values are objects and all objects belong to a class. The class defines what data and behavior exist in the object. For example, 3 and 5 are different numbers. They are not the same object. But they are both integers, so they belong to the same class. Here are more examples:


## Looking Ahead: Terms for Next Week
- PostgreSQL
PostgreSQL is an open source relational database management system ( DBMS ) developed by a worldwide team of volunteers. PostgreSQL is not controlled by any corporation or other private entity and the source code is available free of charge.

- API
A set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service.

- CRUD
In computer programming, create, read, update, and delete are the four basic functions of persistent storage. 

- Ruby on Rails
The Rails framework helps developers to build websites and applications, because it abstracts and simplifies common repetitive tasks. Rails is written in Ruby, the programming language which is also used alongside Rails.

- ORM
Object-relational mapping in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language. 

- Active Record
Active Record is the M in MVC - the model - which is the layer of the system responsible for representing business data and logic. Active Record facilitates the creation and use of business objects whose data requires persistent storage to a database.