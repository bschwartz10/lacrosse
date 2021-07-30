import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="footer__content">
        <div className="footer__content__left">
          <div className="links company">
            <header>League</header>
            <a href="">Analysis</a>
            <a href="">Teams</a>
            <a href="">Players</a>
            <a href="">Stats</a>
            <a href="">Depth Charts</a>
          </div>
          <div className="links social">
            <header>Company</header>
            <a href="">Contact Us</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Use</a>
          </div>
        </div>
        <div className="footer__content__right">
          <div className="copyright">
            <p>© 2021 All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
