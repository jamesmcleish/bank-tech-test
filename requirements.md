Normal Constraints:

Does your code start with a feature test?

Do your tests pass?

Is code coverage >95%?

Do your unit tests mock the dependencies of the object they are testing?

Does the linter pass with no warnings?

Are your variable method and class names clear and descriptive?

Does your code read clearly, like an explanation of your program?

------------------------------------------------------------------------------
Does your README
Describe how to install dependencies, run your tests, and run the project?	
Describe your approach?	
Describe how you structured your code and why?	
Include a screenshot of your running app?	
Have reasonable spelling & grammar?	
------------------------------------------------------------------------------

Do commit messages describe clearly what that commit does?

Does class/method/function/spec follow the single responsibility principle?
(Ask each class, spec and method/function what it does, if the reply involves the word "and" you probably need to refactor.)

Is each method & class as small as possible?

------------------------------------------------------------------------------
Do you notice any of the following common problems in your code?

One or two classes that do all the work
One class is significantly longer than all of the others
Most methods don't return anything, instead they modify instance variables
The feature tests don't use a test framework (e.g. RSpec or Jasmine)
The decimal points are missing on the end of the numbers
The tests only pass today, because the dates aren't mocked or passed in as arguments
Transaction is abbreviated to `trans` or `txn`
A Transaction class that has a method that prints itself
------------------------------------------------------------------------------

Can you think of any alternative designs or approaches that might work better?

------------------------------------------------------------------------------
Additional Constraints:

Where possible, do you always test for behaviour, rather than state?

Do your test descriptions read clearly?

Do you make appropriate use of the testing framework's methods to keep your test code clean?
eg for RSpec: `described_class` , aliasing an explicit `subject`, `context`,  using `let()` carefully

Is each method fewer than 7 lines?

Are all your classes fewer than 50 lines?

Do you have a clear separation between your program logic and output? (Eg for Ruby: Do you call `puts` only once in your program?)
If you loop through an array passing a block of code with puts in it: you're calling `puts` for each loop. Aim to construct the string representation of the statement before calling `puts`.

------------------------------------------------------------------------------
Strict Constraints:

Does your project commit history clearly show evidence of a thorough TDD process?
Does each commit diff show a unit test or cohesive set of unit tests and the corresponding source code?

Have you mocked the dependency Time?
Would your tests pass if you ran them tomorrow? Feb 29th? DST?

Are all your line lengths fewer than 80 characters?

Do you have at least 3 classes that you can reasonably justify?

Are all your methods fewer than 5 lines?
Don't count the method name and `end` keyword

Are all your classes fewer than 30 lines?
Don't count the class name and `end` keyword

Do you use appropriate data structures to hold the necessary values your program needs?
Eg: If you keep the statement header line in a method - it gets created every time you invoke the method. What are the parts of the statement output that change often and which parts stay the same? How can you refactor your code to make this clear?


