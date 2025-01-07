# AI-Driven Math Problem Solver

This project is a **Math Problem Solver** built with **React** and **Vite**, powered by **Google Gemini AI**. The application allows users to either upload a photo of a math problem or capture it directly using their webcam. The app then analyzes the image using the **Gemini AI API**, providing a step-by-step solution and analysis.

## Features

- 📷 **Camera Integration**: Capture images directly using your webcam.
- 📁 **Image Upload**: Upload images of math problems from your device.
- ⚡ **Fast Processing**: Analyzes math problems using Google Gemini AI.
- ✔️ **Step-by-step Solution**: Provides clear, step-by-step solutions to math problems.
- ✅ **Error Detection**: Flags errors in the user's provided solution and offers feedback.
- 📲 **Responsive Design**: Optimized for both desktop and mobile.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**:nodejs, Google Gemini API (model:gemini-1.5-flash)
- **Deployment**: Render
- **Image Capture**: Webcam, File Input

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (v14.0.0 or higher)
- **npm** (Node Package Manager)
- **Google Gemini AI API key**

### Steps to Run the Application Locally:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/ismartash/aidrivenproblemsolver.git
    cd aidrivenproblemsolver
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Create a `.env` file** in the root directory and add your **Gemini API key**:

    ```bash
    GEMINI_API_KEY=your_gemini_api_key_here
    ```

4. **Start the development server**:

    ```bash
    npm run dev
    ```
