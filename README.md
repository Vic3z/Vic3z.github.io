
# LetterRank

## Introduction
LetterRank is a word-guessing game where the player tries to guess a 5-letter word. The game provides feedback on each guess, indicating whether the letters in the guess come before or after the correct letters in alphabetical order.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [Dependencies](#dependencies)
5. [Configuration](#configuration)
6. [Documentation](#documentation)
7. [Troubleshooting](#troubleshooting)
8. [Contributors](#contributors)
9. [License](#license)

## Installation
To run the game locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Vic3z/Vic3z.github.io
    cd letterrank
    ```
2. Open `index.html` in your preferred web browser to start the game.

## Usage
The game can be played directly in a web browser. Here are the basic instructions to play:

1. Open `index.html` in a web browser.
2. Start guessing the 5-letter word by typing on your keyboard or clicking the on-screen keyboard.
3. The game will provide feedback on each guess:
   - Letters that come before the correct letter in alphabetical order will be highlighted in orange.
   - Letters that come after the correct letter will be highlighted in yellow.
4. Continue guessing until you find the correct word or run out of attempts.

## Features
- **Word Guessing**: Players can guess a 5-letter word.
- **Feedback System**: Provides feedback on each guess by highlighting letters.
- **Leaderboard**: Displays the results of previous games using a bar chart.
- **On-screen Keyboard**: Allows input through both physical and on-screen keyboards.
- **Responsive Design**: Works well on different screen sizes.

## Dependencies
- **Chart.js**: Used for rendering the leaderboard.
    ```html
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    ```

## Configuration
No specific configuration is required. Ensure that all files (`index.html`, `style.css`, `game.js`, `cookies.js`, and `it_words.js`) are in the same directory.

## Documentation
### Files
- **index.html**: The main HTML file that sets up the game's structure and includes necessary scripts and styles.
- **style.css**: The stylesheet that styles the game's interface.
- **game.js**: Contains the main logic for the game, including handling guesses and providing feedback.
- **cookies.js**: Manages the storage of game results in the browser's local storage.
- **it_words.js**: Contains the list of possible 5-letter words used in the game.

## Troubleshooting
If the game is not functioning as expected, ensure the following:
- All files are in the same directory.
- You are using a modern web browser.
- JavaScript is enabled in your web browser.

## Contributors
- **Vincenzo Santonicola** - Initial work - [Your GitHub Profile](https://github.com/Vic3z)

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
