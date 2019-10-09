## Scenario

# Part 1

The application should accepts an ongoing series of user supplied numbers as inputs, and output notifications when certain conditions are met. It will operate as follows:

1. On startup, the program will prompt the user for the number of seconds (X) between outputting the frequency of each number to the screen.
2. Every X seconds the program will display, in frequency descending order, the list of numbers and their frequency.
3. If the user enters 'halt' the timer should pause.
4. If the user enters 'resume' the timer should resume.
5. If the user enters a number that is one of the first 1000 Fibonacci numbers, the system
   should alert "FIB"
6. If the user enters 'quit', the application output the numbers and their frequency, a
   farewell message, and finally terminate.

# Part 2 - Changes to your application

1. You have a new requirement to implement for your application: its logic should stay exactly the same but it will need to have a different user interface (e.g. if you wrote a web app, a different UI may be a REPL).
Please describe how you would go about implementing this new UI in your application? Would you need to restructure your solution in any way?

Answer: I have mostly seperated and exported the functions may need exposure. If tha application needed to be consumed by the UI, it can easily trigger functionality and pass on inputs. Report function can be also utilize directly and `doFunctionality()` function can be called by the UI directly by passing input to trigger predefined set of actions like `halt`,`quit` and `resume`. Further some other action functions can be directly accessible from outside if requred. `Read()` function may not be requred and UI input will be able to provide input to the application.

2. You now need to make your application “production ready”, and deploy it so that it can be used by customers.
Please describe the steps you’d need to take for this to happen.

Answer:

* add more tests and increase the test coverage over 90%
* reorganise the code and refactor to improve the code quality. and more type checking and declare types.
* use webpack bundler to minimize or if not preferable in order to perform `treeshaking`.
* code compiled to /build folder and compilation can be done using ```yarn compile``` and run the compiled code with `yarn start`.

3. What did you think about this coding test - is there anything you’d suggest in order to improve it?

Answer:

* well designed coding test and covers many important aspects.
* Also evalueate the modularise development.
* may be able to evalueate knowladge on some js concepts like `currying`, `generators` and `streams`.

## Application Setup

The application is tested on node v10.15.0.'

install packages please run following commands:

note: yarn package manager is recomended.

```npm -g install yarn```
```yarn install```

## Running the Application (dev environment)

Run fowllowing command to run excecute the application on dev environment.
Dev runtime execute typescript application using 'ts-node' and there may be performance implication.  

```yarn dev```

## Running the Application (production environment)

todo: It is important to use module bundler tool like `webpack` to perform `treeshaking` on dependancies. It may help to reduce the application size and may improve performance.

note: this application uses only one non production dependency.

run fowllowing command to run excecute the application on dev environment.

* compile the typescript program.
* run the compiled code.

```yarn compile```
```yarn start```

## Run Tests / Test Coverage

Tests are written in typescript and it uses ts-jest as a preprocessor of typescipt.

The test suite configure to run coverage report, Code coverage is currently very low and in production enviromnment expect to be over 90% code coverage overall (currently the coiverage limit set to 40% please refer to `jest.config.js`).

Run the following command to run the test suite using jest:

```yarn test```

You can view the test results in your browser by opening ./test-reports/test-report.html

## License

SEE LICENSE IN LICENSE
