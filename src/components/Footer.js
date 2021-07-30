import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="footer__content">
        <div className="footer__content__left">
          <div className="links company">
            <header>League</header>
            <a href="/lacrosse">Analysis</a>
            <a href="/lacrosse">Teams</a>
            <a href="/lacrosse">Players</a>
            <a href="/lacrosse">Stats</a>
            <a href="/lacrosse">Depth Charts</a>
          </div>
          <div className="links social">
            <header>Company</header>
            <a href="/lacrosse">Contact Us</a>
            <a href="/lacrosse">Privacy Policy</a>
            <a href="/lacrosse">Terms of Use</a>
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
