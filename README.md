# Random Question Generator 🌟

A beautiful, interactive Thai random question generator website with elegant animations and particle effects.

## 📋 Overview

This project features a sophisticated random question generator designed specifically for Thai language questions. It includes two versions:
- **Basic Version** (`index.html`) - Clean and elegant design
- **Enhanced Version** (`index11.html`) - Includes particle effects and advanced animations

## ✨ Features

### Core Functionality
- **Random Question Generation**: Displays random Thai questions from a predefined set
- **Smart Question Management**: Prevents duplicate questions until all questions are used
- **Animated Text Display**: Smooth character-by-character reveal animation
- **Thai Character Animation**: Uses Thai characters for spinning effect

### Interactive Elements
- **Click to Generate**: Button-based question generation
- **Keyboard Support**: Press Spacebar to generate questions
- **Stop Animation**: Ability to stop spinning animation mid-way

### Visual Design
- **Elegant Gold-White Theme**: Sophisticated color scheme with gold accents
- **Curved Background Elements**: Decorative circular elements
- **Responsive Design**: Mobile-friendly layout
- **Smooth Animations**: CSS transitions and JavaScript animations
- **Particle Effects** (Enhanced version): Interactive particle background

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- No additional dependencies required (uses CDN for external libraries)

### Installation
1. Clone or download this repository
2. Open `index.html` or `index11.html` in your web browser
3. Start generating random questions!

### Usage
1. **Generate Question**: Click the "Generate Question" button or press Spacebar
2. **Watch Animation**: Enjoy the spinning Thai character animation
3. **Stop Animation**: Click "Stop" or press Spacebar again to reveal the question
4. **Repeat**: Continue generating questions until all are used

## 📁 Project Structure

```
Random_Question/
├── index.html          # Basic version
├── index11.html        # Enhanced version with particles
├── script.js           # JavaScript for basic version
├── script11.js         # JavaScript for enhanced version
├── style.css           # CSS for basic version
├── style11.css         # CSS for enhanced version
└── README.md           # This file
```

## 🎨 Customization

### Adding New Questions
Edit the `questions` array in the JavaScript files:

```javascript
const questions = [
    "คุณชอบอาหารชนิดไหนที่สุด?",
    "ถ้าได้เป็นนักร้อง, เพลงใดคือเพลงที่คุณอยากจะแสดง?",
    "อาชีพในอนาคตของคุณคืออะไร?",
    "วิธีการผ่อนคลายที่คุณชอบที่สุดคือ?",
    // Add your questions here
];
```

### Styling Modifications
- **Colors**: Modify the gold color scheme in CSS (`#d4af37`)
- **Fonts**: Change the Montserrat font family
- **Animations**: Adjust animation durations and effects
- **Layout**: Modify container sizes and positioning

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Advanced styling with gradients, animations, and responsive design
- **JavaScript**: ES6+ features, animation handling, and DOM manipulation
- **Bootstrap 5**: Responsive grid system
- **Particles.js**: Particle effects (enhanced version)
- **Google Fonts**: Montserrat font family

### Key Features Implementation
- **Animation System**: Uses `requestAnimationFrame` for smooth animations
- **Question Tracking**: `Set` data structure to prevent duplicates
- **Responsive Design**: CSS media queries for mobile compatibility
- **Performance**: Optimized animations with proper cleanup

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

- [ ] Add more question categories
- [ ] Implement question difficulty levels
- [ ] Add sound effects
- [ ] Create question statistics
- [ ] Add dark mode toggle
- [ ] Implement question sharing feature

## 📞 Support

If you encounter any issues or have suggestions, please open an issue in the repository.

---

**Made with ❤️ for generating random Thai questions**
