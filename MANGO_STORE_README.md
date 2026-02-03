# 🥭 MangoHub - Premium Mango Store Landing Page

A beautiful, modern landing page for a mango e-commerce store built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

✨ **Beautiful Design**
- Modern gradient-based design with orange/yellow color scheme
- Smooth animations and transitions
- Fully responsive layout for all devices

🎨 **Sections Included**
- **Hero Section** - Eye-catching introduction with CTAs and statistics
- **Features** - Four key benefits (Free Delivery, 100% Organic, Premium Quality, Best Reviews)
- **Products** - Showcase of three premium mango varieties (Alphonso, Kesar, Ataulfo)
- **Testimonials** - Customer reviews with 5-star ratings
- **CTA Section** - Special offer section with promotional message
- **Footer** - Complete navigation and company information

🛠️ **Tech Stack**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide React icons

## Getting Started

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
/app
  ├── page.tsx          # Main landing page
  ├── layout.tsx        # Root layout
  └── globals.css       # Global styles

/components
  └── ui
      ├── button.tsx    # Button component
      └── card.tsx      # Card component
```

## Customization

### Colors
The landing page uses an orange/yellow gradient theme. To customize:
- Primary orange: `from-orange-500 to-yellow-500`
- Accent colors: `orange-600`, `yellow-600`
- Background: `from-orange-50 to-white`

### Content
Edit `/app/page.tsx` to modify:
- Product names and prices
- Testimonials
- Feature descriptions
- Company information

### Components
All UI components are in `/components/ui/`:
- `button.tsx` - Customizable button with variants
- `card.tsx` - Reusable card component

## Build for Production

```bash
npm run build
npm start
```

## Features to Add (Future Enhancements)

- [ ] Shopping cart functionality
- [ ] Product detail pages
- [ ] Checkout process
- [ ] User authentication
- [ ] Order tracking
- [ ] Blog/recipes section
- [ ] Store locator with maps
- [ ] Newsletter subscription
- [ ] Search functionality
- [ ] Multi-language support

## License

This project is created for demonstration purposes.

---

Made with ❤️ for mango lovers 🥭
