# 🌱 KisanAuction: Live Agricultural Bidding Platform

KisanAuction is a cutting-edge web application designed to bridge the gap between farmers and bulk buyers. By entirely eliminating exploitative middlemen, this platform empowers farmers to list their harvests in a real-time, live auction environment, maximizing their profits while giving buyers transparent, direct access to fresh produce.

## 🚀 Key Features

### 🧑‍🌾 Farmer Ecosystem
- **Instant Product Listing:** Easily register crops, assign base prices, and upload visual proofs.
- **Dynamic Auction Contols:** Farmers set custom countdown timers for each batch of produce.
- **Smart Dashboard:** Auto-syncs live data for farm location tracking via an interactive Map UI.

### 🏢 Buyer Ecosystem
- **Live Trade Room:** A synchronized real-time web socket dashboard where buyers compete in live-bidding wars before the clock runs out. 
- **Highest Bidder Overrides:** System seamlessly locks out lower bids and registers the prevailing top bidder automatically.
- **Trust Scores:** Track farmer reputation and leave post-auction ratings.
- **Transparent Sourcing:** Embedded integration with Google Maps to trace exactly where the crop is coming from.

## 🛠️ Technology Stack
- **Frontend Engine:** HTML5, Modern CSS3, and Vanilla JavaScript (ESM Modules).
- **Responsive Framework:** Bootstrap 5 & Custom CSS Glassmorphism Aesthetics.
- **Backend Infrastructure:** Google Firebase (Authentication & Realtime NoSQL Database).
- **Alerting & UI Tooling:** SweetAlert2 for fluid, non-blocking notification systems.

## 💻 How to Run Locally

You do not need a complex Node.js environment to run the UI, as it uses frontend modules and Firebase's Serverless architecture.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/KisanAuction.git
   cd KisanAuction
   ```
2. **Launch a Local Web Server:** 
   Because the project uses standard ES Modules (`<script type="module">`), it cannot be run simply by double-clicking the HTML file (due to browser CORS policies). 
   - Use the **Live Server** extension in VS Code.
   - Or, run a simple Python server standard: `python -m http.server 8000` and visit `http://localhost:8000` in your browser.

## ⚙️ Configuration
The platform is pre-wired to a Firebase backend. If you wish to use your own database instance, navigate to `/firebase.js` and replace the `firebaseConfig` object with your own standard web credentials from the Firebase Console. Make sure to enable **Authentication (Email/Password)** and **Realtime Database**.

## 🔮 Future Roadmap
- **AI Price Predictor Engine:** Analyzing historical market data to suggest optimal base prices for farmers to prevent underselling.
- **Payment Gateway Integration:** Securely processing the winning transactions automatically via Stripe or Razorpay upon the timer hitting 00:00.
- **Logistics Integration:** Letting buyers instantly request delivery trucks right from the live trade room.

---
**Designed & Developed for a fairer, smarter agricultural economy.**
