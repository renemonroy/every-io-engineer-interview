![Storybook Screenshot 1](https://github.com/renemonroy/every-io-engineer-interview/blob/main/screenshot.png?raw=true)

## Quick Start

1. yarn install
2. yarn run start
3. open your browser to http://localhost:4200/

## Overview

The project is organized inside a monorepo. There are 2 main folders: `libs/` and `apps/`. The main project is inside `apps/engineer-interview` and depends on `libs/ui-web-library`.

All components exist mainly at the UI Web Library folder and the project is ready to add tests and stories for Storybook. Given the amount of time I have at the moment I decided to not add tests or stories yet but they can be added simply and the structure folder of a component would look like this:

```
- UIButton
  - UIButton.tsx
  - UIButton.stories.ts
  - UIButton.styles.ts
  - UIButton.test.ts
  - UIButton.types.ts
  - UIButton.utils.ts
```

### Main Stack

The stack is basically as follows:

- Typescript
- React
- Styled Components
- Styled System
- NX

### Decisions Made

Unfortunetely, I didn't have enough time to work on the challenge to add more things I'd love to show, like stories, tests and a custom store (similar to Redux). But the project focused on the main biggest factors mentioned:

1. Readability.
2. Organization.
3. Bugs free.

## Video Intro

https://www.loom.com/share/3df7fcb5424644638b00724cb178e2ff

- [Getting Started with the Every.io engineering challenge.](#getting-started-with-the-everyio-engineering-challenge)
  - [The biggest factor will be your code:](#the-biggest-factor-will-be-your-code)
  - [Requirements](#requirements)
  - [Quick Start](#quick-start)
- [Original CRA README below](#original-cra-readme-below)
  - [Getting Started with Create React App](#getting-started-with-create-react-app)
  - [Available Scripts](#available-scripts)
    - [`yarn start`](#yarn-start)
    - [`yarn test`](#yarn-test)
  - [Learn More](#learn-more)

# Getting Started with the Every.io engineering challenge.

Thanks for taking the time to complete the Every.io code challenge. Don't worry, it's not too hard, and please do not spend more than an hour or two. We know you have lots of these to do, and it can be very time consuming. If you feel like adding fancy animations, or getting all hip and fresh with the design, go ahead, but it won't earn you any extra points.

## The biggest factor will be your code:

1. How readable, is your code.
2. How did you organize your components.
3. Are there any bugs.

## Requirements

[See the prototype for an example.](https://www.figma.com/proto/kd49ArXbBt0vi1kBSLkmC1/Code-Challenge?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1)

You will be creating a basic todo list, with the following functionality.

1. The list has 3 states. Each represented by a column. Similar to Trello.
   1. `Todo`
   2. `In Progress`
   3. `Done`
2. Each list item has a right and left arrow button.
   1. The right arrow moves the list item from:
      1. `Todo` to `In Progress`
      2. `In Progress` to `Done`
   2. The Left arrow moves the list item from
      1. `Done` to `In Progress`
      2. `In Progress` to `Todo`
3. If the list in the in the `Todo` column, the left button should be disabled
4. If the list is in the `Done` column, the right button should be disabled.
5. There should be form with a text input below the buttons. When the user submits the form, the text from the text input should be added to a new todo item in the `Todo` column.
