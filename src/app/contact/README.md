# Contact Page

A professional contact page for Wafipix with a rich text editor, form validation, and animated success states.

## Features

- **Professional Hero Section**: Eye-catching hero with booking button linking to Calendly
- **Contact Information**: Detailed contact details with animated cards
- **Rich Text Editor**: TipTap-based editor with formatting toolbar
- **Form Validation**: Zod schema validation with React Hook Form
- **Success Animation**: Beautiful animated success state
- **Responsive Design**: Mobile-first responsive layout
- **Professional Styling**: Consistent with Wafipix brand

## Components

### ContactHero
- Hero section with gradient background
- Animated background elements
- Booking button linking to Calendly
- Quick contact info display

### ContactInfo
- Grid of contact information cards
- Animated on scroll
- Professional contact details
- Company statistics

### ContactForm
- Form with name, email, phone (optional), and message fields
- Rich text editor for message content
- Zod validation with React Hook Form
- Loading and success states
- API integration ready

### RichTextEditor
- TipTap-based rich text editor
- Formatting toolbar with common options
- HTML output generation
- Custom styling with Tailwind Typography

### ContactSuccess
- Animated success state
- Contact information display
- Call-to-action buttons

## Usage

### Basic Usage
```tsx
import {
  ContactHero,
  ContactInfo,
  ContactForm,
  ContactSuccess
} from "./_components";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactSuccess />
    </main>
  );
}
```

### Using Rich Text Editor
```tsx
import RichTextEditor from "./_components/RichTextEditor";

function MyComponent() {
  const [message, setMessage] = useState("");

  return (
    <RichTextEditor
      value={message}
      onChange={setMessage}
      placeholder="Enter your message..."
    />
  );
}
```

## API Integration

The contact form is ready for API integration. Update the `onSubmit` function in `ContactForm.tsx` to connect to your email service:

```tsx
// Example with SendGrid, Nodemailer, or any email service
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

## Customization

### Colors
Update the gradient colors in the components to match your brand:
- Purple gradient: `from-purple-600 to-pink-600`
- Background gradients: `from-slate-900 via-purple-900 to-slate-900`

### Contact Information
Update contact details in `ContactInfo.tsx`:
- Email addresses
- Phone numbers
- Office address
- Business hours

### Form Validation
Modify the Zod schema in `contactSchema.ts` to add/remove validation rules.

## Dependencies

- `@tiptap/react` - Rich text editor
- `@tiptap/starter-kit` - Basic editor features
- `@tiptap/extension-link` - Link functionality
- `@tiptap/extension-text-align` - Text alignment
- `@tiptap/extension-underline` - Underline text
- `@tiptap/extension-placeholder` - Placeholder text
- `react-hook-form` - Form handling
- `@hookform/resolvers` - Form validation resolvers
- `zod` - Schema validation
- `@tailwindcss/typography` - Typography styles

## Styling

The components use Tailwind CSS with custom prose styles for the rich text editor. The styling is consistent with the Wafipix brand and includes:

- Gradient backgrounds
- Smooth animations with Framer Motion
- Professional color scheme
- Responsive design
- Hover effects and transitions

## Future Enhancements

- Add file upload functionality
- Integrate with CRM systems
- Add reCAPTCHA protection
- Implement email templates
- Add analytics tracking
- Create admin dashboard for message management 