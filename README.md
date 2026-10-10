# Tic-Tac-Toe 🎮

A Tic-Tac-Toe game for the browser, built with plain **HTML**, **CSS** and **JavaScript**. You play as **X** against the computer, **O**.

## 🎓 Why this project exists

This project was created for a **high school course taught to middle school students** (13–14 years old). Its goal is to **show and explain how programming works** by building something fun.

Afterwards, the project was improved both **graphically and in the code** so it could be included in my personal portfolio.

## 📁 Project structure

```
tic-tac-toe/
├── index.html        # the structure of the page
├── style.css         # colors and layout
├── script.js         # the game logic
├── images/
│   ├── background.svg   # the sky and hills behind the game
│   ├── favicon.svg      # the little icon in the browser tab
│   ├── player.svg       # the player's character
│   └── robot.svg        # the computer's character
└── README.md
```

## ⬇️ How to download the project from GitHub

### Option 1 - Download a ZIP (easiest)

1. Open the [repository page](https://github.com/Marcooooo0ooo/Tic-Tac-Toe) on GitHub.
2. Click the green **Code** button.
3. Click **Download ZIP**.
4. Unzip the file and open `index.html` in your browser (double-click it).

### Option 2 - Clone with Git

```bash
git clone https://github.com/Marcooooo0ooo/Tic-Tac-Toe.git
cd Tic-Tac-Toe
```

Then open `index.html` in your browser.

## 🕹️ How the game works

1. You are **X** and you always start. Click an empty cell to place your mark.
2. The robot (**O**) waits a moment and then plays.
3. The first one to get **three marks in a row** (horizontal, vertical or diagonal) wins. The three winning cells turn yellow.
4. If all nine cells are full and nobody has three in a row, it's a **draw**.
5. At the end of the game a message appears on the screen. Its colors change depending on the result: **you win**, **the robot wins** or **draw**.
6. Press **Play again** (or **New game** at any time) to start a new round.

## ⚙️ Difficulty modes

Choose the mode with the **Easy** and **Hard** buttons. Changing the mode starts a new game, so nobody can switch in the middle of a round.

### 🟢 Easy

The robot picks **any free cell at random**. It doesn't try to win and doesn't try to stop you, so you can win quite often.

In the code: `randomMove()`.

### 🔴 Hard

The robot follows a few simple rules, always in the same order:

1. If it can **win** right now, it does.
2. If you are about to win, it **blocks** you.
3. It takes the **center** if it's free.
4. It takes a free **corner**.
5. Otherwise it plays in any free cell.

These rules make it hard to beat, but not impossible: there are tricks that can fool it. Can you find one?

In the code: `smartMove()` and `findWinningMove()`.

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript

## 📄 License

This project is released under the [MIT License](LICENSE).
