# Ojaswi Bhardwaj — Software Engineer / Full‑Stack Developer

Hi — I'm Ojaswi, a motivated Computer Science undergraduate focused on building responsive, real‑time web and mobile applications. I enjoy solving algorithmic problems, designing reliable systems, and shipping usable products. My projects span Flutter mobile apps, real‑time Node.js backends with WebSockets, and data‑driven Python web services.

- Portfolio: https://ojaswi-portfolio-kappa.vercel.app/  
- GitHub: https://github.com/ojaswi1234  
- LinkedIn: https://www.linkedin.com/in/ojaswi-bhardwaj-962393281/  
- Email: ojaswideep2020@gmail.com  
- Mobile: +91-7840089727

---

## Highlights

- Strong foundation in data structures & algorithms (200+ LeetCode problems).
- Experienced with real‑time communication (WebSockets, Socket.IO), cross‑platform mobile (Flutter), and full‑stack JavaScript (Node/Express + React/Next).
- Built and shipped multiple projects: secure chat MVP, multiplayer chess with low latency, a Chrome notes extension, and a Django movie recommender.

---

## Skills

- Languages: Java, Python, JavaScript, TypeScript, Dart  
- Frameworks & Platforms: Next.js, Node.js, Express.js, Flutter, Django, Supabase  
- Databases: MySQL, MongoDB, SQLite, Hive (local storage)  
- Libraries & Tools: React.js, Socket.IO, WebRTC (planned), TMDB API, Git, Firebase, GCP  
- Soft skills: Problem solving, teamwork, project management, adaptability

---

## Projects

### ConnectUs — Secure Real‑Time Chat Application
- Tech: Flutter, Dart, Supabase, Render, Hive, WebSockets  
- Summary: Cross‑platform chat MVP with hybrid local+cloud persistence and <200ms message latency. Authentication flows implemented; planned P2P voice/video via WebRTC (TURN/STUN).
- Quick start:
  ```bash
  # Flutter client
  git clone <repo-url>
  cd connectus
  flutter pub get
  # Set SUPABASE_URL & SUPABASE_ANON_KEY in .env / config as used in the app
  flutter run
  ```

### Two Player Chess Game
- Tech: HTML/CSS, JavaScript, Node.js, Express.js, Socket.IO, chess.js  
- Summary: Real‑time multiplayer chess with server-side Socket.IO logic and chess.js move validation. UI/UX improvements increased retention in testing.
- Quick start:
  ```bash
  git clone <repo-url>
  cd two-player-chess
  npm install
  # start server
  npm start
  # open client in browser (served from public/ or with a dev server)
  ```

### JUSTNOTES — Chrome Extension
- Tech: HTML, CSS, JavaScript, manifest.json  
- Summary: Lightweight browser notes extension that reduces context switching for quick note capture.
- Install locally (dev):
  1. Open chrome://extensions/
  2. Enable "Developer mode"
  3. Click "Load unpacked" and select the extension folder

### MOVIE_SPOT — Data‑Driven Movie Recommender
- Tech: Python, Django, Django REST Framework, TMDB API, SQLite  
- Summary: Backend with REST endpoints serving personalized recommendations. Improved recommendation accuracy with a custom rating algorithm.
- Quick start:
  ```bash
  git clone <repo-url>
  cd movie_spot
  python -m venv venv
  source venv/bin/activate   # or venv\Scripts\activate on Windows
  pip install -r requirements.txt
  # set TMDB_API_KEY in environment
  python manage.py migrate
  python manage.py runserver
  ```

---

## Certifications & Training

- Competitive Programming Training — SkillStone (Grazitti Interactive)  
- GitHub Fundamentals — GitHub  
- Python Programming — HackerRank  
- Java Programming — HackerRank  
- ChatGPT Prompt Engineering — DeepLearning

---

## Achievements

- Solved 200+ problems on LeetCode  
- Built a Restaurant Table Booking Management System as a capstone for competitive programming training

---

## How to contribute / contact

If you'd like to collaborate or give feedback:
- Open an issue or PR on the relevant repo (link from my GitHub).  
- Email: ojaswideep2020@gmail.com  
- LinkedIn DM: https://www.linkedin.com/in/ojaswi-bhardwaj-962393281/

Contribution suggestions:
- Fork the repo, create a feature branch, add tests where applicable, and open a pull request with a clear description of changes.
- For UI/UX feedback, please include screenshots or a short video showing the issue.

---

## Notes for maintainers

- Store API keys and secrets in environment variables (do NOT commit them).
- Example env keys often required: TMDB_API_KEY, SUPABASE_URL, SUPABASE_ANON_KEY.
- Use code linters and formatters (ESLint/Prettier for JS/TS, black/flake8 for Python).

---

## License

This repository and project materials are open to collaboration. Add a LICENSE file (MIT recommended) to explicitly set licensing terms.

---

Thank you for checking out my work — I'm always open to learning, building, and collaborating on interesting problems!
