# hr-dashboard
A modern HR dashboard to manage employee data, track performance, and bookmark top performers — built using Next.js 15 (App Router), Tailwind CSS, and Zustand for state management.

🚀 Features
✅ Dashboard with employee cards (Name, Age, Email, Department, Rating)

🔍 Search & filter users by name, department, or performance

📌 Bookmark system with Zustand (Add/Remove)

📄 User Details Page with tabs: Overview, Projects, Feedback

📊 Analytics Page using Chart.js (Department-wise rating trends)

☀️🌙 Dark/Light Mode toggle with Tailwind

🔐 Optional Login with mock logic or NextAuth.js (coming soon)

🛠 Tech Stack
Frontend: Next.js 15 App Router, React, Tailwind CSS

State Management: Zustand (Global store for bookmarks)

Charts: Chart.js (for analytics)

Deployment: Vercel

Data: Fetched from https://dummyjson.com/users

📷 Screenshots
Add screenshots in the README.md folder and link them like this:

scss
Copy
Edit
![Dashboard](./screenshots/dashboard.png)
![Bookmarks](./screenshots/bookmarks.png)
![User Detail](./screenshots/user-detail.png)
To include screenshots:

Create a folder named screenshots/ in your root directory.

Put your .png or .jpg files there.

Reference them like the code above.

🧑‍💻 Getting Started
Clone this repo:

bash
Copy
Edit
git clone https://github.com/josephjosi/hr-dashboard.git
cd hr-dashboard
Install dependencies:

bash
Copy
Edit
npm install
Run development server:

bash
Copy
Edit
npm run dev
Open http://localhost:3000 in your browser

📁 Folder Structure
bash
Copy
Edit
src/
  app/
    page.tsx               # Home dashboard
    bookmarks/             # Bookmarks page
    analytics/             # Analytics page
    employee/[id]/         # Dynamic employee detail
  components/              # Reusable UI components
  store/                   # Zustand store
  hooks/                   # Custom hooks (e.g., useSearch)
✨ Deployment
This project is deployed live on Vercel.
To deploy your own:

Push code to GitHub

Go to https://vercel.com/import

Link your GitHub repo and deploy 🎉

🙌 Author
Joseph Josi
📍 Kerala, India
🎓 Final-year B.Tech CSE (Data Science) @ Christ University
🔗 GitHub Profile

