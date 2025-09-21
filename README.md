# Sahay-sarthi 

> A citizen-centric application designed to bridge the information gap and help Indian citizens easily discover government schemes they are eligible for(beta).

Sahay-sarthi is a powerful tool built to make information about government welfare schemes accessible. By providing multiple channels for interaction, it ensures that every citizen can find the support they need.

---
## ✨ Key Features

* **🌐 Multi-Channel Access:** Interact with the service through a user-friendly **website** or a **Telegram bot**.
* **⚡ Instant Eligibility Check:** Users submit their personal details (income, age, state, etc.) and receive a curated list of relevant schemes in seconds.
* **💻 Simple Web Interface:** A clean and responsive web form for easy data entry.
* **🤖 Powerful No-Code Backend:** The entire backend logic is orchestrated using **n8n.io**, handling data processing, eligibility checks, and responses across all platforms.
* **📊 Centralized Database:** All scheme information and eligibility rules are managed in a single, easy-to-update **Google Sheet**.

---
## 🛠️ Technology Stack

* **Frontend:** HTML5, CSS3, JavaScript
* **Backend Automation:** n8n.io
* **Database:** Google Sheets
* **Messaging APIs:** Telegram Bot API
* **Hosting:** local

---
## ⚙️ How It Works

The project uses a webhook-based architecture to provide real-time responses.

1.  **Data Submission:** A user submits their details through the website form or the Telegram bot.
2.  **Webhook Trigger:** The submission triggers a specific webhook in the n8n automation platform.
3.  **Data Processing:** The n8n workflow receives the data, parses it, and logs the incoming request in a dedicated Google Sheet tab (`UserRequests`, `TelegramRequests`, etc.).
4.  **Eligibility Logic:** The workflow fetches the entire list of schemes from the main `Schemes` tab in Google Sheets. A custom Code node then filters this list based on the user's details, matching them against the eligibility criteria for each scheme.
5.  **Logging Results:** The filtered list of eligible schemes is logged in a `Results` tab for analytics.
6.  **Response:** The final list is formatted and sent back to the user through the original channel they used (a response on the website or a message from the Telegram bot).

---
## 🚀 How to Use

* **Website:** Navigate to the project URL and fill out the form.
* **Telegram:** Search for the `@Sahay_sarthi_bot` bot and follow the on-screen instructions.
