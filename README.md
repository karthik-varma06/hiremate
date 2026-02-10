#  HireMate – AI Job Application Copilot

A modern full-stack AI job application assistant built using React, Node.js, Express, MongoDB, and OpenRouter AI.

HireMate helps students and job seekers generate tailored cover letters, get suggestions, and track job applications in a clean dashboard.

---

##  Features

## Features

- Generate AI cover letters  
- AI suggestions for improvement  
- Upload resume OR paste resume text  
- Auto-extract text from uploaded resume  
- Save applications to dashboard  
- View applications in modal  
- Copy / delete / export applications  
- Animated landing page  
- Modern SaaS UI   

---

##  Tech Stack

Frontend  
- React  
- Vite  
- Tailwind CSS  
- Axios  

Backend  
- Node.js  
- Express.js  
- MongoDB Atlas  
- OpenRouter AI API  

---

##  Installation & Setup

### 1️⃣ Clone Repository
git clone https://github.com/karthik-varma06/hiremate.git
cd hiremate  

---

### 2️⃣ Backend Setup
cd server  
npm install  

Create `.env` inside server folder:

MONGO_URL=your_mongodb_connection_string
OPENROUTER_API_KEY=your_api_key_here  
PORT=5000

Start backend:
npm run dev  

Server runs on:
http://localhost:5000  

---

### 3️⃣ Frontend Setup
cd client  
npm install  
npm run dev  

App runs on:
http://localhost:5173  

---

##  AI Generation Flow

1. User enters company, role, resume, job description  
2. Frontend → POST /api/generate  
3. Backend → OpenRouter AI  
4. Returns:
   - coverLetter  
   - suggestions  
5. Saved to MongoDB  
6. Displayed in dashboard  

---

##  API Endpoints

Generate Cover Letter  
POST /api/generate  

Request body:
{
  "company": "Amazon",
  "role": "Full Stack Developer",
  "resume": "...",
  "jobDescription": "..."
}

Response:
{
  "coverLetter": "...",
  "suggestions": ["...", "..."]
}

---

Save Application  
POST /api/applications  

---

Get All Applications  
GET /api/applications  

---

Delete Application  
DELETE /api/applications/:id  

---

##  Project Structure

hiremate/
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.jsx
│   └── package.json
│
├── server/
│   ├── routes/
│   ├── index.js
│   └── package.json
│
├── .gitignore
└── README.md

---

##  Environment Variables

Create file:
server/.env

Add:
MONGO_URL=your_mongodb_connection_string
OPENROUTER_API_KEY=your_key
PORT=5000

Never commit this file.

---

##  Future Improvements

- Authentication  
- Interview questions generator
- Status tracker
- Follow-up email generator
- AI scoring  

---

##  Author

Karthikeya Varma  
GitHub: karthik-varma06  

---

##  Run Project Quickly

Backend:
cd server  
npm install  
npm run dev  

Frontend:
cd client  
npm install  
npm run dev  
