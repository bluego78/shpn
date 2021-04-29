# Sherpany Code Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so you have to download/clone the package, go to your local folder by terminal and do the command:

### `npm install`

and then:

### `npm start`

# What will you find in the app

The folders structure:

- node_modules
- public (where you can find the index.html file)
- src (the main directory, where you can find every component)
    
    Let's go deeply into src folder:
    
    - components (all the react components are here)
    - contexts (here is the context i used to manage the state)
    - helpers (I use to put here files with common functionalities, tools, etc..)
    - imgs (guess... :-))
    - interfaces (here are all the Interfaces I've implemented to typize the objects)
    - scss (yes the scss are here)
    - tests (some test i wrote)
    
- .env file (contains come environment variables)
- .tsconfig.json (configuration for typescript)
- other files: .gitignore, package.json package-lock.json

# Some notes about the development process

I choose to use contexts to manage the state between components and not a reducer (redux) because the application is small and the useContext Hook is useful.
Unfortunately, it's hard to test, this is why you'll find less tests, because i choose to put the context into a useState Hook, anchd then pass it to the children, and this is really hard to mock (if you figure out, please tell me how :-)) I had to admit that TESTS are my weakness (but I'm learning. I will got it soon).

I used bootstrap for some css class and for the gear icon, but i wrote the biggest part of the css.

I didn't use any components to get the Infinite Scroll, because I just want to show my skills.

# Hope you'll enjoy, let me know!
