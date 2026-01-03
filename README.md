# 🌤️ Weather App

A beautiful, responsive weather application that displays current weather information for any city worldwide.

![Weather App](https://img.shields.io/badge/Version-1.0-blue) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Real-time temperature display in Celsius
- 💨 Wind speed information
- 💧 Humidity levels
- 🌡️ "Feels like" temperature
- 📊 Atmospheric pressure
- 🎨 Modern gradient UI design
- 📱 Fully responsive for all devices
- ⚡ Fast and lightweight

## 🚀 Live Demo

**API Key Used:** ``

Simply open `index.html` in your browser to see the app in action!

## 📁 Project Structure

```
weather-app/
│
├── index.html    # Main HTML structure
├── style.css     # All styling and responsive design
├── script.js     # JavaScript functionality with API key
└── README.md     # Project documentation
```

## 🔧 Installation & Setup

### Option 1: Local Development (Simple)

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Open the app**
   - Simply double-click `index.html` or
   - Right-click → Open with → Your Browser

### Option 2: Using GitHub Pages

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/weather-app.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select branch: `main`
   - Click Save
   - Your app will be live at: `https://yourusername.github.io/weather-app/`

### Option 3: Using GitHub Secrets (For Production)

If you want to hide the API key for production:

1. **Remove API key from `script.js`**
   ```javascript
   const API_KEY = process.env.WEATHER_API_KEY || 'YOUR_API_KEY';
   ```

2. **Add GitHub Secret**
   - Go to repository → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `WEATHER_API_KEY`
   - Value: ``

3. **Create GitHub Actions workflow** (`.github/workflows/deploy.yml`)
   ```yaml
   name: Deploy
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: Replace API Key
           run: |
             sed -i "s/YOUR_API_KEY/${{ secrets.WEATHER_API_KEY }}/g" script.js
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./
   ```

## 🔑 API Information

**Provider:** [WeatherAPI.com](https://www.weatherapi.com/)

**Current API Key:** ``

**Note:** This is a free tier API key with limitations:
- 1,000,000 calls per month
- Current weather data
- Forecast data
- Astronomy data

### Getting Your Own API Key (Optional)

1. Visit [WeatherAPI.com](https://www.weatherapi.com/)
2. Sign up for free
3. Get your API key from the dashboard
4. Replace the API key in `script.js`:
   ```javascript
   const API_KEY = 'your_new_api_key_here';
   ```

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with Flexbox & Grid
- **JavaScript (ES6+)** - Functionality
- **WeatherAPI** - Weather data provider

## 📱 Responsive Breakpoints

- **Mobile:** 320px - 480px
- **Tablet:** 481px - 768px
- **Desktop:** 769px and above

## 🎨 Color Scheme

- **Primary Gradient:** `#667eea` to `#764ba2`
- **Background Cards:** `#f5f7fa` to `#c3cfe2`
- **Text Primary:** `#333333`
- **Text Secondary:** `#666666`
- **Error:** `#ff6b6b`

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 📝 Usage

1. Enter a city name in the search box
2. Press **Enter** or click the **Search** button
3. View current weather information including:
   - Temperature
   - Weather condition
   - Feels like temperature
   - Humidity
   - Wind speed
   - Atmospheric pressure

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Weather data provided by [WeatherAPI](https://www.weatherapi.com/)
- Design inspired by modern web design trends
- Icons from WeatherAPI

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact via email
- Check out [WeatherAPI Documentation](https://www.weatherapi.com/docs/)

---

**Made with ❤️ by Your Name**

**⭐ Star this repo if you like it!**

