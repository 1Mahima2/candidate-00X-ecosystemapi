# 🌐 Ecosystem API Layer – Universal Onboarding Engine

A universal user enrollment API that auto-syncs new sign-ups across all connected platforms using rule-based propagation.

---

## 🚀 Features

- ✅ Single endpoint to enroll users across platforms
- 🧠 Rule map-based destination logic
- 🔐 API key validation (per platform)
- 🗂️ SQLite-based logging
- 📊 Lightweight Admin Dashboard
- 🔄 CRM Sync simulation (MailerLite, Notion, etc.)

---

## 📦 Tech Stack

-- Node.js 18
- Express.js
- SQLite
- Tailwind CSS (Dashboard)
- Postman/cURL for testing

---
## 🚀 Run Locally


git clone https://github.com/1Mahima2/candidate-00X-ecosystemapi.git
cd candidate-00X-ecosystemapi
npm install
node index.js

## 📁 Folder Structure
ecosystem-api/
├── controllers/
├── routes/
├── utils/
├── db/
├── views/
├── public/
├── .env
├── index.js
├── package.json
└── README.md



---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
API_KEYS={"EcoWorldBuy":"TOP36_XYZ123","TheTop36":"TOP36_ABC999"}
🧪 How to Run Locally

git clone https://github.com/1Mahima2/candidate-00X-ecosystemapi.git
cd candidate-00X-ecosystemapi
npm install
node index.js
Access the dashboard:
👉 http://localhost:3000/dashboard

------------------------------------------------------------------------

📡 API Endpoints
1. POST /api/ecosystem-enroll
Request:


{
  "email": "user@example.com",
  "source": "EcoWorldBuy",
  "timestamp": "2025-06-05T10:00:00Z",
  "apikey": "TOP36_XYZ123"
}
Response:


{
  "destinationsHit": ["LanguageKonnect", "TalentKonnect"],
  "status": ["200 OK", "200 OK"]
}
2. GET /api/enrollment-map
Returns the current Rule Map.

'''''''''''''''''''''''''
Response:


{
  "EcoWorldBuy": ["LanguageKonnect", "TalentKonnect"],
  "LanguageKonnect": ["TalentKonnect"]

}

#----------------------------------------------------------

3. PATCH /api/enrollment-map
Update or replace the rule map. (API-key protected)

Request Example:


{
  "apikey": "TOP36_XYZ123",
  "newMap": {
    "EcoWorldBuy": ["LanguageKonnect"],
    "TheTop36": ["TalentKonnect"]
  }
}

--------------------------------------------------------------------------

💾 Logging & CRM Sync
All enrollments are logged into a SQLite database.
CRM syncs are simulated and logged to console (MailerLite, NotionDB, etc.).


#----------------------------------------------------------------------

📊 Admin Dashboard
URL: /dashboard

Displays:

Total Enrollments (All-time & Today)

Recent Transactions (latest 25)

API Key list

Source → Destination mapping (Rule Map)

UI built using TailwindCSS.


#---------------------------------------------------------------------

📬 Sample cURL Commands
✅ Enroll User


curl -X POST http://localhost:3000/api/ecosystem-enroll \
-H "Content-Type: application/json" \
-d '{
  "email": "demo@example.com",
  "source": "EcoWorldBuy",
  "timestamp": "2025-06-20T12:00:00Z",
  "apikey": "TOP36_XYZ123"
}'


#--------------------------------------------------------------------

🔄 Get Rule Map

curl http://localhost:3000/api/enrollment-map


#---------------------------------------------------------------------------

✏️ Update Rule Map

curl -X PATCH http://localhost:3000/api/enrollment-map \
-H "Content-Type: application/json" \
-d '{
  "apikey": "TOP36_XYZ123",
  "newMap": {
    "EcoWorldBuy": ["LanguageKonnect"],
    "TheTop36": ["LanguageKonnect", "TalentKonnect"]
  }
}'

#-----------------------------------------------------------------

🌍 Live Demo
🔗 Render URL: https://your-ecosystem-api.onrender.com
(Replace this with your actual Render link)

#---------------------------------------------------------------

👩‍💻 Author
Mahima Rao
GitHub Profile

#----------------------------------------------------------------

📦 Deployment Notes
SQLite used (no external DB setup)

All API keys and DB config are loaded from .env

node_modules/ and .env are excluded via .gitignore


---

### ✅ Next Steps

1. **Replace** the `your-ecosystem-api.onrender.com` link with your actual Render URL.
2. **Paste** this into your `README.md` file.
3. **Push** to GitHub:
   
   git add README.md
   git commit -m "Added full project README"
   git push origin main
