Place your JEE Society logo file in this folder as `logo.png`.

The Navbar/Hero/Footer currently use a Font Awesome crown icon + the
"JEE Society" wordmark. Once you drop logo.png in /public, you can
replace the crown spans inside:
  - src/components/Navbar.jsx
  - src/components/Hero.jsx (the brand pill)
  - src/components/Footer.jsx
with: <img src="/logo.png" alt="JEE Society" className="h-10" />
