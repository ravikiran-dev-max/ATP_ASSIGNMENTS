
---

## ✨ Features

- **Navigation Bar**
  - Contains site title, navigation links (`Home`, `Content`, `Contact`), and a search input.
  - Responsive design with flexbox for alignment.

- **Main Section**
  - Hero heading showcasing site purpose and user count.
  - Subheading (`heading2`) for additional context.
  - **Cards Layout**: Multiple blog cards with:
    - Author name
    - Image (placeholder parrot image)
    - Short description
    - "Read More" button

- **Footer**
  - Contains grouped paragraphs arranged side by side using flexbox.
  - Additional footer text for closing remarks.

---

## 🎨 Styling (QuickBlog.css)

- **Global Reset**: Margin, padding, and box-sizing reset.
- **Flexbox Layouts**:
  - Navigation bar (`nav`)
  - Cards container (`.cards`)
  - Footer paragraphs (`.para`)
- **Responsive Design**:
  - Media queries adjust background color and card layout.
  - On screens smaller than 600px:
    - Cards stack vertically.
    - Reduced margins for better fit.
  - On larger screens:
    - Cards displayed side by side.
    - Background color changes to gray.

---

## 🚀 How to Run

1. Clone or download the project files.
2. Open `index.html` in any modern web browser.
3. Ensure `QuickBlog.css` is in the same directory as `index.html`.

---

## 📱 Responsiveness

- **Desktop (≥600px)**:  
  - Cards displayed in a row.  
  - Background color: light gray.  

- **Mobile (<600px)**:  
  - Cards stacked vertically.  
  - Background color: purple-gray.  
  - Reduced margins for main content.  

---

## 🔧 Customization

- Replace placeholder images (`img src`) with your own blog images.
- Update author names and descriptions in each `<section>`.
- Modify colors in `QuickBlog.css` to match your branding.

---

## 📝 License

This project is for **educational/demo purposes**.  
Feel free to modify and use it in your own projects.
