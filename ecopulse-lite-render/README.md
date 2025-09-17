# EcoPulse Lite 🌍

EcoPulse Lite is a web app that helps you **track small environmental actions** and visualize their impact in real time.

## 🚀 Features
- Log eco-friendly actions (like planting trees, recycling, saving water).
- See impact calculated in **CO₂ saved, trees planted, water saved**.
- Interactive dashboard + leaderboard.
- Simple and lightweight (Flask + HTML/CSS/JS).

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python (Flask)
- **Data Visualization:** JS charts
- **Deployment Options:** Render, PythonAnywhere, Replit, Heroku

---

## ▶️ Run Locally
1. Clone repo:
   ```bash
   git clone https://github.com/YOUR-USERNAME/ecopulse-lite.git
   cd ecopulse-lite
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run server:
   ```bash
   python app.py
   ```

4. Open in browser:
   ```
   http://127.0.0.1:5000
   ```

---

## 🌐 Deployment

### 1️⃣ Deploy on Render
1. Push your repo to GitHub.  
2. Go to [Render](https://render.com/) → create a new **Web Service**.  
3. Connect your GitHub repo.  
4. Use these settings:
   - Runtime: **Python 3**
   - Build Command:  
     ```bash
     pip install -r requirements.txt
     ```
   - Start Command:  
     ```bash
     gunicorn app:app
     ```
5. Deploy → you’ll get a live URL 🎉

### 2️⃣ Deploy on PythonAnywhere
1. Sign up at [PythonAnywhere](https://www.pythonanywhere.com/).  
2. Upload repo or connect GitHub.  
3. Add a new Flask app in **Web tab**.  
4. Point it to your `app.py`.  
5. Reload → instant live app.

### 3️⃣ Deploy on Replit
1. Go to [Replit](https://replit.com/) → New Repl → Flask.  
2. Upload your files or import GitHub repo.  
3. Click **Run** → share the live URL.

---

## 🤝 Contributing
1. Fork this repo.  
2. Create a feature branch (`git checkout -b feature-name`).  
3. Commit changes (`git commit -m "Added feature"`).  
4. Push branch (`git push origin feature-name`).  
5. Open a Pull Request.  

---

## 📜 License
This project is open-source under the MIT License.

---

Made with 💚 for the planet.
