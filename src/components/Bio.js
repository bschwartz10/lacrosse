import React, { useState } from 'react'
import player from '../data/player.json'
import season from '../data/season.json'
import whipsnakesLogo from '../images/whipsnakes_logo.png'
import moment from 'moment'

export default function Bio() {
  const [isPersonalDetailsVisible, setIsPersonalDetailsVisible] = useState(false)

  return (
    <main className="bio">
      <div className="bio__top">
        <div className="images">
          <div className="team-logo">
            <img src={whipsnakesLogo} alt="team logo" />
          </div>
          <div className="player-logo">
            <img src={player.profileUrl} alt="player logo" />
          </div>
        </div>
        <div className="basic-info">
          <div className="team-position text-piped">
            <p>{player.currentTeam.name}</p>
            <p>#{player.currentTeam.jerseyNum}</p>
            <p>{player.currentTeam.positionName}</p>
          </div>
          <div className="name">
            <h1 className="first-name">{player.firstName}</h1>
            <h1>{player.lastName}</h1>
          </div>
        </div>
      </div>
      <div className="bio__bottom">
        <div className="stats">
          <div className="ver-divider"></div>
          <div className="stat-category border-right">
            <p className="stats-teamplayer-summary-text">GP</p>
            <p className="stats-teamplayer-summary-text medium">{season.seasonStats.gamesPlayed}</p>
          </div>
          <div className="ver-divider"></div>
          <div className="stat-category border-right">
            <p className="stats-teamplayer-summary-text">GOALS</p>
            <p className="stats-teamplayer-summary-text medium">{season.seasonStats.goals}</p>
          </div>
          <div className="ver-divider"></div>
          <div className="stat-category border-right">
            <p className="stats-teamplayer-summary-text">ASSISTS</p>
            <p className="stats-teamplayer-summary-text medium">{season.seasonStats.assists}</p>
          </div>
          <div className="ver-divider"></div>
          <div className="stat-category border-right">
            <p className="stats-teamplayer-summary-text">POINTS</p>
            <p className="stats-teamplayer-summary-text medium">{season.seasonStats.points}</p>
          </div>
          <div className="ver-divider"></div>
        </div>
        <div className="toggle-personal-section">
          <button onClick={() => setIsPersonalDetailsVisible(!isPersonalDetailsVisible)}>
            <p>
              Player Details <span className={`chevron ${isPersonalDetailsVisible ? 'top' : 'bottom'}`}></span>
            </p>
          </button>
        </div>
        <div className={`personal ${isPersonalDetailsVisible ? 'is-visible' : ''}`}>
          <div className="personal-section">
            <div className="personal-info border-right">
              <p className="stats-teamplayer-summary-text small">HEIGHT</p>
              <p className="stats-teamplayer-summary-text">{`${player.height}''`}</p>
            </div>
            <div className="ver-divider"></div>
            <div className="personal-info border-right">
              <p className="stats-teamplayer-summary-text small">WEIGHT</p>
              <p className="stats-teamplayer-summary-text">{player.weight}lb</p>
            </div>
            <div className="ver-divider"></div>
            <div className="personal-info border-right">
              <p className="stats-teamplayer-summary-text small">COUNTRY</p>
              <p className="stats-teamplayer-summary-text">{player.country}</p>
            </div>
            <div className="ver-divider"></div>
            <div className="personal-info border-right">
              <p className="stats-teamplayer-summary-text small">College</p>
              <p className="stats-teamplayer-summary-text">{player.college}</p>
            </div>
            <div className="ver-divider"></div>
          </div>
          <div className="hor-divider"></div>
          <div className="personal-section">
            <div className="personal-info border-right">
              <p className="stats-teamplayer-summary-text small">AGE</p>
              <p className="stats-teamplayer-summary-text">26 years</p>
            </div>
            <div className="ver-divider"></div>
            <div className="personal-info border-right">
              <p className="stats-teamplayer-summary-text small">BIRTHDATE</p>
              <p className="stats-teamplayer-summary-text">{moment(player.dob).format('MMM DD, YYYY')}</p>
            </div>
            <div className="ver-divider"></div>
            <div className="personal-info border-right">
              <p className="stats-teamplayer-summary-text small">HOMETOWN</p>
              <p className="stats-teamplayer-summary-text">{player.hometown}</p>
            </div>
            <div className="ver-divider"></div>
            <div className="personal-info border-right">
              <p className="stats-teamplayer-summary-text small">EXPERIENCE</p>
              <p className="stats-teamplayer-summary-text">{new Date().getFullYear() - player.expFromYear} years</p>
            </div>
            <div className="ver-divider"></div>
          </div>
        </div>
      </div>
    </main>
  )
}
