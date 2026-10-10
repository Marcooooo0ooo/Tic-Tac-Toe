# Tic-Tac-Toe 🎮

A Tic-Tac-Toe game for the browser, built with plain **HTML**, **CSS** and **JavaScript**. You play as **X** (the kid) against the computer, **O** (the robot).

## 🎓 Why this project exists

This project was created for a **high school course taught to middle school students** (13–14 years old). Its goal is to **show and explain how programming works** by building something fun and familiar from scratch.

While building the game, students meet the basic ideas of programming:

| Idea | Where you can see it |
| --- | --- |
| **Variables** | `board`, `gameOver`, `difficulty` |
| **Arrays** | the board is an array of 9 items; `winningLines` is an array of arrays |
| **Loops** | checking every winning line, clearing every cell |
| **Conditionals** (`if / else`) | "is the cell empty?", "did someone win?" |
| **Functions** | `play()`, `markCell()`, `randomMove()` ... |
| **Events** | clicking a cell or a button runs a function |
| **HTML + CSS + JS together** | structure, looks and behavior in separate files |

The code is commented in plain English so it can be read in class.

## 📁 Project structure

```
tic-tac-toe/
├── index.html        # the structure of the page
├── style.css         # colors and layout
├── script.js         # the game logic
├── favicon.svg       # the little icon in the browser tab
├── images/
│   ├── background.svg   # the sky and hills behind the game
│   ├── player.svg       # the player's character
│   └── robot.svg        # the computer's character
└── README.md
```

## ⬇️ How to download the project from GitHub

### Option 1 - Download a ZIP (easiest)

1. Open the repository page on GitHub.
2. Click the green **Code** button.
3. Click **Download ZIP**.
4. Unzip the file and open `index.html` in your browser (double-click it).

### Option 2 - Clone with Git

```bash
git clone https://github.com/<username>/<repository-name>.git
cd <repository-name>
```

Then open `index.html` in your browser.

> Replace `<username>` and `<repository-name>` with the real ones from the repository page.

## 🍴 How to fork the project

A **fork** is your own copy of the project on your GitHub account. You can change it freely without touching the original.

1. Log in to [GitHub](https://github.com).
2. Open the repository page and click **Fork** (top right).
3. Choose your account and click **Create fork**.
4. Clone **your** fork to your computer:

   ```bash
   git clone https://github.com/<your-username>/<repository-name>.git
   ```

5. Make your changes, then save them to GitHub:

   ```bash
   git add .
   git commit -m "Describe what you changed"
   git push
   ```

### Optional: put your game online with GitHub Pages

1. In your fork, go to **Settings → Pages**.
2. Under **Branch**, choose `main` and the `/ (root)` folder, then click **Save**.
3. After a minute, your game will be online at `https://<your-username>.github.io/<repository-name>/`.

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

## 🧪 Ideas for students

- Change the colors in the `:root` block at the top of `style.css`.
- Replace the kid or the robot with your own drawing (keep the file name, or change it in `index.html`).
- Change the robot's waiting time (the `500` in `script.js`).
- Change the messages shown at the end of the game in `showResult()`.
- Add a new rule to the Hard mode to make the robot even smarter.
- Add a scoreboard that counts wins and draws.

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript (no libraries, no frameworks)
- [Fredoka](https://fonts.google.com/specimen/Fredoka) font from Google Fonts (the game still works offline with a system font)

## 📄 License

Add the license you prefer here (for example MIT) so others know how they can reuse the project.
