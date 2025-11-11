
# Kalorie‑Tracker

A modern, vanilla‑JavaScript calorie tracking web app built using object‑oriented programming (OOP) principles.

<img src="assets/screen.png">

---

## 📁 Table of Contents

- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)  
- [Acknowledgements](#acknowledgements)

---

## ℹ️ About

Kalorie‑Tracker is a simple, clean, and lightweight web application for tracking calories: you can log what you’ve eaten, what you’ve burned via workouts, and get a quick summary of your calories consumed vs calories expended.  
This project is written using vanilla JavaScript with a focus on object‑oriented programming — ideal for learning and building core fundamentals.

---

## ✨ Features

- ✅ Add a meal with calories and increment the consumed count  
- ✅ Add a workout (exercise) with calories burned and increment the burned count  
- ✅ See your total “net” calories (consumed minus burned) in real‑time  
- ✅ Clear entries with ease  
- ✅ Clean UI, responsive design  
- ✅ Built using OOP classes in JavaScript  
- *(Optional – add if you have)* Persistent storage using `localStorage`, theme switch, bookmark entries

---

## 🧰 Tech Stack

- **JavaScript (ES6+)** — main logic using OOP classes  
- **HTML5 & CSS3** — UI markup and styling  
- **LocalStorage** — for simple persistence (if implemented)  
- No frameworks — purely vanilla for learning clarity

---

## 🏁 Getting Started

### Prerequisites

Make sure you have:

- A modern web browser (Chrome / Firefox / Edge)  
- (Optional) A simple HTTP server / live‑server for development  

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/Prakul111/kalorie-tracker.git
   cd kalorie-tracker
   ```

2. Open `index.html` in your browser (or serve via live‑server for local testing).

---

## 🧮 Usage

1. On the main screen, click **Add Meal**, enter the meal name and calories → click *Add Meal*.  
2. Similarly, click **Add Workout**, enter workout name and calories burned → click *Add Workout*.  
3. The counts for **Calories Consumed**, **Calories Burned**, and **Net Calories** update automatically.  
4. To clear entries, click the *Clear* button.  
5. (Optional) The app saves your entries and you can revisit later (if `localStorage` used).  

---

## 📂 Project Structure

```
kalorie‑tracker/
├── assets/               # images, icons, fonts
├── css/
│   └── code‑theme.css    # main stylesheet
├── js/
│   └── app.js            # main logic (classes + UI + storage)
├── index.html            # entry point
├── package.json          # (if using a bundler / npm) 
└── README.md             # this file
```

---

## 🤝 Contributing

Contributions are welcome! Here’s how to help:

1. Fork this repository  
2. Create a new branch: `git checkout -b feature/your‑feature`  
3. Make your changes and commit: `git commit -m "Add some feature"`  
4. Push to your branch: `git push origin feature/your‑feature`  
5. Submit a Pull Request  

Please ensure your code follows the existing style and is well‑documented.

---

## 📄 License

Specify your license here (e.g., MIT).  
Example:

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

- Thanks to the author of the “Modern JavaScript From The Beginning” course for inspiration.  
- Free icons/fonts from [FontAwesome](https://fontawesome.com) / [Google Fonts](https://fonts.google.com) (if used)  
- Any other libraries or tutorials used.

---

*Happy tracking & coding! 🎉*
