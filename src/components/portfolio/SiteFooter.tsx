export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-wrap site-footer-inner">
        <p>© {year} All rights reserved.</p>
        <div className="site-footer-links">
          <a href="#contact">Contact</a>
          <a href="#posts">RSS</a>
        </div>
      </div>
    </footer>
  );
}
