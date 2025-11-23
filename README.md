# Heading Out 📦

**An interactive web narrative disguised as a corporate task manager.**

### 🔗 [Click here to view the Live Demo](https://minapattanaik.github.io/HeadingOut)

**Heading Out** is a digital storytelling experiment that uses the medium of a productivity app to explore the narrative of an employee named Melissa. 

Instead of a traditional prose format, the story is revealed through the user interface of a "Task Manager." As the user marks items as "complete," they aren't just clearing a to-do list—they are uncovering Melissa's internal monologue, her history with coworkers, and the specific events leading up to her resignation.

It explores themes of office politics, the mundanity of corporate life, and the quiet human moments hidden within professional environments.

## 🕹️ How to Experience

1. **The Inbox:** The story is presented as a list of "To-Do" items or emails on the left-hand side.
2. **Navigation:** Clicking a header (e.g., *"Complaints Melissa Makes to HR"*) opens the specific narrative associated with that task.
3. **Progression:** As you click through the headers, the interface treats the task as "Completed," updating the progress bar and task counters in real-time.
4. **Hidden Details:** Pay attention to the details inside the tasks—checklists, browser history tabs, and hover-states reveal deeper context about Melissa's relationships with characters like Rohan and Dave.

## 🛠️ Technical Implementation

This project is built as a Single Page Application (SPA) using vanilla web technologies.

* **HTML5:** Structured semantic markup for the application frame.
* **CSS3:** Custom styling to mimic modern SaaS (Software as a Service) aesthetics, including:
    * CSS Grid/Flexbox for layout.
    * Keyframe animations for progress bars and content transitions.
    * Responsive design for mobile and desktop views.
* **jQuery (JavaScript):**
    * Handles DOM manipulation for switching between narrative sections.
    * Manages state logic (calculating "To-Do" vs. "Completed" counts).
    * Dynamic progress bar updates based on user interaction.

## 🚀 Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/minapattanaik/HeadingOut.git](https://github.com/minapattanaik/HeadingOut.git)
    ```
2.  **Open the file:**
    Navigate to the folder and double-click `index.html` to open it in your browser.

## 📂 Project Structure

```text
HeadingOut/
├── index.html       # Main application structure
├── style.css        # Styling and animations
├── script.js        # Logic for navigation and progress tracking
├── images/          # Assets (user avatars, icons)
└── README.md        # Project documentation
