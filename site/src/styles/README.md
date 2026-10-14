# MGAT Design System

Complete visual design system for educational/tutoring websites. Ready to copy and implement on any project.

## 📦 What's Included

| File | Description |
|------|-------------|
| `design-tokens.css` | CSS custom properties (colors, typography, spacing, shadows, etc.) |
| `components.css` | Reusable UI components (buttons, cards, forms, badges, navigation) |
| `layout.css` | Layout patterns (container, hero, sections, grids, sidebar) |
| `backgrounds.css` | Gradient backgrounds, patterns, decorative elements |
| `main.js` | JavaScript interactions (sidebar, form, scroll animations) |
| `index.html` | Reference implementation showing all components |

## 🚀 Quick Start

### 1. Copy Files to Your Project

```bash
# Copy the entire folder to your project
cp -r .opencode/skill/mgat-design-system/* your-project/src/styles/
```

### 2. Include in Your HTML

```html
<!-- In <head> - load in this order -->
<link rel="stylesheet" href="styles/design-tokens.css">
<link rel="stylesheet" href="styles/components.css">
<link rel="stylesheet" href="styles/layout.css">
<link rel="stylesheet" href="styles/backgrounds.css">

<!-- Before </body> -->
<script type="module" src="styles/main.js"></script>
```

### 3. Add Font (Required)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 4. Apply Background to Body

```html
<body class="mgat-bg-css-only">
  <!-- Your content -->
</body>
```

## 🎨 Design Tokens

### Colors
```css
--color-navy: #0A2342;        /* Primary brand */
--color-gold: #FFC20E;        /* Primary accent/CTA */
--color-green: #2E9D45;       /* Success/secondary */
--color-blue: #1E7FCB;        /* Info/links */
--color-white: #fff;
--color-text-secondary: #d0d0d0;
```

### Spacing Scale
```css
--space-1: 0.25rem  (4px)
--space-4: 1rem     (16px)
--space-8: 2rem     (32px)
--space-16: 4rem    (64px)
```

### Border Radius
```css
--radius-md: 8px;
--radius-lg: 16px;
--radius-xl: 20px;
--radius-2xl: 36px;
--radius-full: 999px;
```

## 🧩 Components

### Buttons
```html
<!-- Primary CTA -->
<button class="btn btn-primary">Reservar Vaga</button>

<!-- Secondary outline -->
<button class="btn btn-secondary">Como Funciona</button>

<!-- Blue outline -->
<button class="btn btn-outline">Saiba Mais</button>
<button class="btn btn-outline green">Verde</button>
```

### Cards
```html
<!-- Standard card -->
<div class="card">
  <div class="card-icon">📊</div>
  <h3>Título</h3>
  <p>Descrição</p>
</div>

<!-- Glass morphism (premium) -->
<div class="card card-glass">...</div>

<!-- Light glass (for light backgrounds) -->
<div class="card card-glass-light" style="color: var(--color-navy);">...</div>
```

### Card Grid
```html
<div class="cards-grid">
  <article class="card card-glass">...</article>
  <article class="card card-glass">...</article>
  <article class="card card-glass">...</article>
</div>
```

### Forms
```html
<form class="form card card-glass" id="my-form">
  <div class="form-group">
    <label class="form-label" for="nome">Nome *</label>
    <input type="text" id="nome" name="nome" class="form-input" required>
  </div>

  <div class="form-group">
    <label class="form-label">Opções</label>
    <div class="checkbox-group">
      <label class="checkbox-item">
        <input type="checkbox" name="opts" value="A"> Opção A
      </label>
    </div>
  </div>

  <button type="submit" class="btn btn-primary form-submit">Enviar</button>
  <p class="form-message" aria-live="polite"></p>
</form>
```

### Badges
```html
<span class="badge badge-gold">Destaque</span>
<span class="badge badge-green">Sucesso</span>
<span class="badge badge-blue">Info</span>
```

### Navigation

#### Sidebar (Desktop) + Hamburger (Mobile)
```html
<button class="hamburger" aria-label="Menu" aria-expanded="false">☰</button>

<aside class="sidebar" id="sidebar">
  <div class="sidebar-logo">
    <img src="logo.png" alt="Logo" width="140">
  </div>
  <nav class="sidebar-nav">
    <ul>
      <li><a class="nav-link" href="#home">Home</a></li>
      <li><a class="nav-link" href="#sobre">Sobre</a></li>
    </ul>
  </nav>
</aside>

<div class="sidebar-overlay" id="sidebar-overlay"></div>

<main class="main-content">
  <!-- Page content -->
</main>
```

#### Header Alternative
```html
<header class="header">
  <img class="header-logo" src="logo.png" alt="Logo" width="140">
  <nav class="header-nav">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#sobre">Sobre</a></li>
    </ul>
  </nav>
</header>
```

## 📐 Layout Patterns

### Container
```html
<div class="container">
  <!-- Max-width 1200px, centered -->
</div>
```

### Hero Section
```html
<section class="hero">
  <div class="hero-bg-pattern"></div>
  <div class="hero-bg-overlay"></div>
  <div class="hero-content">
    <h1 class="hero-title">Título Principal</h1>
    <p class="hero-subtitle">Subtítulo descritivo</p>
    <div class="hero-buttons btn-group">
      <a href="#cta" class="btn btn-primary">CTA Principal</a>
      <a href="#info" class="btn btn-secondary">Secundário</a>
    </div>
  </div>
</section>
```

### Section
```html
<section class="section" id="minha-section">
  <div class="container">
    <header class="section-header">
      <h2 class="section-title">Título da Seção</h2>
      <p class="section-subtitle">Subtítulo opcional</p>
    </header>
    <!-- Content -->
  </div>
</section>

<!-- With decorative background -->
<section class="section section-bg">...</section>
```

### Grids
```html
<!-- 2 columns -->
<div class="grid-2">...</div>

<!-- 3 columns -->
<div class="grid-3">...</div>

<!-- 4 columns -->
<div class="grid-4">...</div>
<!-- Responsive: stacks on mobile -->
```

## 🎭 Backgrounds

```html
<!-- Full page brand background (CSS only) -->
<body class="mgat-bg-css-only">

<!-- With SVG pattern (requires file) -->
<body class="mgat-bg">

<!-- Section backgrounds -->
<section class="section-bg">...</section>
<section class="section-bg-alt">...</section>

<!-- Decorative glows -->
<div class="bg-glow-gold">Content with gold glow</div>
<div class="bg-glow-green">Content with green glow</div>
```

## ⚙️ JavaScript API

### Global MGAT Object
```javascript
// Toast notifications
MGAT.toast('Mensagem', 'success');  // 'info', 'success', 'error'

// Validation
MGAT.isValidEmail('test@email.com');  // true/false
MGAT.isValidPhone('+244 936 758 420');  // true/false

// Utilities
MGAT.debounce(fn, 300);
MGAT.throttle(fn, 100);
```

### Form Handling (Built-in)
The `main.js` includes WhatsApp form submission for `#reserva-form`. Customize:

```javascript
// In your own script after main.js loads
const form = document.querySelector('#my-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Your custom logic
  MGAT.toast('Enviado!', 'success');
});
```

### Scroll Animations
Add `data-animate` to any element:
```html
<div class="card card-glass" data-animate>Animates on scroll</div>
```

## 📱 Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| Mobile | ≤ 768px | Hamburger menu, stacked grids |
| Tablet | 769-1024px | 2-col grids |
| Desktop | > 1024px | Full layouts, sidebar |

## 🔧 Customization

### Change Colors
Edit `design-tokens.css` `:root` variables:
```css
:root {
  --color-navy: #YOUR_BRAND_COLOR;
  --color-gold: #YOUR_ACCENT_COLOR;
  /* ... */
}
```

### Dark/Light Mode
Add to your CSS:
```css
@media (prefers-color-scheme: light) {
  :root {
    --color-navy: #f0f0f0;
    --color-white: #1a1a1a;
    /* Adjust all tokens */
  }
}
```

## 📁 Assets Required

Copy from `MGAT_Kit_Visual/MGAT_Kit/`:
- `logo/logo-principal.png` - Main logo
- `fundos/padrao-repetivel.svg` - Pattern background (optional, CSS-only works)
- `hero/hero-desktop-1920x1080.png` - Hero background
- `hero/hero-mobile-1080x1920.png` - Mobile hero background

Or replace with your own assets and update paths in HTML/CSS.

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Focus-visible outlines
- Color contrast ratios (WCAG AA)
- Reduced motion support
- Screen reader compatible

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Uses modern CSS (custom properties, backdrop-filter, grid) with graceful degradation.

## 📄 License

MIT - Free to use, modify, and distribute.

## 🤝 Credits

Designed for **MGAT Explicações** - Educational support for grades 4-6.
Built with modern CSS and vanilla JavaScript.