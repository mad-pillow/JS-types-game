import './footer.css';

function Footer(props) {
  return (
    <footer className="footer">
      <span className="footer__logo logo">
        <a className="footer__logo-link logo-link" href="/">JS Types Game</a>
      </span>
      <span className="copyright">© Mad Pillow. Copyright 2021. All Rights Reserved.</span>
    </footer>
  )
}

export default Footer;