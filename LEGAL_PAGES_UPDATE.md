# Legal and FAQ Pages Update

## New Pages Added

### 1. Privacy Policy (`/privacy`)
- **File**: `src/components/PrivacyPolicy.jsx`
- **Route**: `/privacy`
- **Content**: Comprehensive privacy policy covering:
  - Information collection practices
  - How data is used
  - Data sharing and disclosure policies
  - Security measures
  - User rights (access, correction, deletion)
  - Cookie policies
  - Children's privacy
  - Contact information

### 2. Terms of Service (`/terms`)
- **File**: `src/components/TermsOfService.jsx`
- **Route**: `/terms`
- **Content**: Complete terms of service including:
  - Agreement to terms
  - Service description
  - User account responsibilities
  - Acceptable use policies
  - User content rights
  - Intellectual property
  - Third-party services
  - Disclaimers and liability
  - Indemnification
  - Termination policies
  - Governing law

### 3. FAQ (`/faq`)
- **File**: `src/components/FAQ.jsx`
- **Route**: `/faq`
- **Features**: 
  - Interactive accordion-style FAQ
  - 15 commonly asked questions
  - Topics covered:
    - What SeenThem is
    - Pricing and features
    - How to use the app
    - Data import capabilities
    - Platform availability
    - Privacy and data handling
    - Community and support
  - Links to social media for additional support
  - Smooth animations and hover effects

## Styling

### LegalPage.css
- Shared styles for Privacy Policy and Terms of Service pages
- Dark gradient background matching the main site theme
- Clean, readable typography
- Animated section headers with gradient underlines
- Fully responsive design

### FAQ.css
- Custom accordion component styling
- Interactive hover states
- Smooth expand/collapse animations
- Gradient-styled CTA section
- Mobile-optimized layout

## Routing Setup

Updated `App.jsx` to include React Router:
```jsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/privacy" element={<PrivacyPolicy />} />
  <Route path="/terms" element={<TermsOfService />} />
  <Route path="/faq" element={<FAQ />} />
</Routes>
```

## Footer Updates

Updated `Footer.jsx` to link to the new pages:
- Privacy Policy → `/privacy`
- Terms of Service → `/terms`
- FAQ → `/faq`
- Support → Discord link

Also updated social media icons to match the Contact section with proper SVG icons.

## Testing

Run the development server:
```bash
npm run dev
```

Navigate to:
- Home: `http://localhost:5174/`
- Privacy Policy: `http://localhost:5174/privacy`
- Terms of Service: `http://localhost:5174/terms`
- FAQ: `http://localhost:5174/faq`

## Features

✅ Full client-side routing with React Router
✅ Responsive design for all screen sizes
✅ Consistent styling with main site theme
✅ Interactive FAQ with accordion functionality
✅ SEO-friendly content structure
✅ Accessible navigation and links
✅ Smooth animations and transitions
✅ Links to social media and community support

## Next Steps

You may want to:
1. Review and customize the legal content to match your specific requirements
2. Add any additional FAQ questions based on user feedback
3. Consider adding a 404 page for unknown routes
4. Update meta tags for SEO on each page
5. Add breadcrumb navigation for better UX
