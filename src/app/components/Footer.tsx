'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright: &copy; {new Date().getFullYear()} Aadit Gupta | All Rights Reserved</p>
      </div>

      <div className="footer-iconTop">
        <a href="#">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
}
