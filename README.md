# Unsettle - Shopify Theme

A clean, Instagram-style Shopify theme designed for customizable keychain e-commerce businesses targeting 16-34 U.S. women. Features storytelling elements around energy, healing, and empowerment.

## 🌟 Features

### Design & Aesthetics
- **Clean, minimalist design** with Instagram-style aesthetic
- **Earthy color palette** (#9CAF88 green, #F7F5F3 cream, #E8D5C4 beige)
- **Typography**: Playfair Display for headings, Inter for body text
- **Fully responsive** design for all devices
- **Smooth animations** and hover effects

### E-commerce Functionality
- **Interactive charm builder** for product customization
- **Product galleries** with zoom functionality
- **Collection showcases** with filtering
- **Wishlist functionality**
- **Cart integration** with Shopify
- **Product variants** support

### Brand Storytelling
- **Hero section** with compelling messaging
- **Brand story section** highlighting values
- **Energy stones guide** integration
- **Testimonials** and social proof
- **Instagram feed** integration

### Technical Features
- **Shopify 2.0 compatible**
- **Section groups** support
- **Theme settings** customization
- **Multi-language** support (localization ready)
- **SEO optimized**
- **Performance optimized**

## 🚀 Installation

### Method 1: GitHub Integration (Recommended)

1. **Fork this repository** to your GitHub account
2. **Connect to Shopify**:
   - Go to your Shopify admin
   - Navigate to Online Store > Themes
   - Click "Add theme" > "Connect from GitHub"
   - Select this repository

### Method 2: Manual Upload

1. **Download the theme**:
   ```bash
   git clone https://github.com/yourusername/unsettle-shopify-theme.git
   cd unsettle-shopify-theme
   ```

2. **Create a ZIP file**:
   ```bash
   zip -r unsettle-theme.zip . -x "*.git*" "README.md" "*.md"
   ```

3. **Upload to Shopify**:
   - Go to Shopify admin > Online Store > Themes
   - Click "Add theme" > "Upload ZIP file"
   - Select the created ZIP file

## ⚙️ Configuration

### Theme Settings

Access theme settings in Shopify admin under **Online Store > Themes > Customize**.

#### Header Settings
- Logo upload and sizing
- Navigation menu selection
- Search functionality toggle
- Sticky header option

#### Colors & Typography
- Primary color (#9CAF88)
- Secondary color (#F7F5F3)
- Accent color (#E8D5C4)
- Text color (#2C2C2C)
- Font selections

#### Homepage Sections
- Hero banner customization
- Featured collections
- Brand story content
- Charm builder settings
- Newsletter signup

### Required Setup

1. **Create Navigation Menus**:
   - Main menu (header navigation)
   - Footer menu (footer links)

2. **Configure Collections**:
   - Energy Stones
   - Sports & Fitness
   - Cute Plushies
   - Mini Art

3. **Add Products**:
   - Individual charms with variants
   - Keychain base products
   - Custom keychain bundles

4. **Set Up Pages**:
   - About/Our Story
   - Shipping Information
   - Returns & Exchanges
   - FAQ
   - Contact

## 🎨 Customization

### Color Scheme
The theme uses CSS custom properties for easy color customization:

```css
:root {
  --color-primary: #9CAF88;      /* Sage green */
  --color-secondary: #F7F5F3;    /* Warm cream */
  --color-accent: #E8D5C4;       /* Soft beige */
  --color-text: #2C2C2C;         /* Dark gray */
  --color-rose-gold: #E8B4A0;    /* Rose gold accent */
}
```

### Typography
- **Headings**: Playfair Display (serif)
- **Body text**: Inter (sans-serif)
- **Responsive scaling** with CSS clamp()

### Layout Customization
- **Container width**: 120rem (1200px)
- **Grid systems** for responsive layouts
- **Flexible section** ordering

## 🛠️ Development

### File Structure
```
unsettle_theme/
├── assets/
│   ├── css/
│   │   └── base.css
│   ├── js/
│   │   └── global.js
│   └── images/
├── config/
│   ├── settings_data.json
│   └── settings_schema.json
├── layout/
│   └── theme.liquid
├── locales/
│   └── en.default.json
├── sections/
│   ├── header.liquid
│   ├── footer.liquid
│   ├── hero-banner.liquid
│   ├── featured-collections.liquid
│   ├── brand-story.liquid
│   └── charm-builder.liquid
├── snippets/
├── templates/
│   ├── index.liquid
│   ├── product.liquid
│   └── collection.liquid
└── README.md
```

### Local Development

1. **Install Shopify CLI**:
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. **Connect to store**:
   ```bash
   shopify theme dev --store=your-store.myshopify.com
   ```

3. **Watch for changes**:
   ```bash
   shopify theme dev
   ```

## 📱 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🎯 Target Audience

### Demographics
- **Age**: 16-34 years
- **Gender**: Women
- **Location**: United States
- **Lifestyle**: High quality of life, fashion-conscious
- **Interests**: Self-expression, wellness, energy healing

### Product Focus
- **Customizable keychains** ($5-15 per charm)
- **Energy stones** and healing crystals
- **Sports and hobby** themed charms
- **Cute plushie** miniatures
- **Mini art** pieces

## 🔧 Troubleshooting

### Common Issues

**Theme not loading properly**:
- Check file permissions
- Verify all required files are present
- Clear browser cache

**Customization not saving**:
- Ensure you're in the correct theme
- Check for JavaScript errors in console
- Verify theme settings schema

**Mobile display issues**:
- Test on actual devices
- Check viewport meta tag
- Verify responsive CSS

### Support

For technical support or customization requests:
- Create an issue on GitHub
- Check existing documentation
- Review Shopify theme development docs

## 📄 License

This theme is licensed under the MIT License. See LICENSE file for details.

## 🙏 Credits

- **Design**: Custom design for Unsettle brand
- **Development**: Built with Shopify Liquid, HTML5, CSS3, JavaScript
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Icons**: Custom SVG icons

## 📈 Changelog

### Version 1.0.0
- Initial release
- Core theme functionality
- Responsive design
- Charm builder feature
- Brand storytelling sections

---

**Built with ❤️ for authentic self-expression**

