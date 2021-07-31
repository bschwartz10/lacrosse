# Lacrosse

## Overview

This app provides biographical and statisical information for Primer Lacrosse League player Zed Williams. It is divided into three sections.
  1. Biographical information
  2. Game Logs
  3. Statisical Graph

### Setup

To run this project, perform the following:

1. `cd` into the project's directory
2. run `npm install` in the console to install the project dependencies
2. run `npm start` in the console and naviagte to `localhost:3000` in your browser

### Design / Files
- Bio.js - Contains biographical information
- GameLogsTable.js - Table which displays a game and critical stats for each row
- ConnectedScatterplot.js - D3.js chart that renders a specific stat per each game
- Footer - Placeholder links for other pages on website

### Discussion
  - My goal was to create a streamlined webpage that completed the three main objectives of the prompt. I wanted the design to be minimal, yet polished, to allow the statisics to be the main focus of attention. I ensured the bio information and statisics would be well organized on desktop, table and mobile viewing devices.  
  - The biography section of the page was completed entirely with pure html/css. I adjusted the visibility of the "Player Details" stats on mobile to not take up too much space.
  - For the game log table, I selected 10 statisics I considered to be valuable to display. Also included in each row is the date of the game, team of the player and opponent. For devices that can't fit the full width of the table, I decided to make the table contents overflow horizontally. Basketball Reference implements a similar approach and I found it to work well on devices of different screen sizes. I also "fixed" the date column to the left side of the table to help the readability of the table when in mobile viewing.
  - The statistical graph was built using D3.js. It shows the selected statistic (i.e goals) on the y-axis and the date of the game on the x-axis. The graph has the ability to update its data when a new stat is selected. I felt a line graph can clearly portray information of how a player is trending with a specific statistic throughout the season.
  - Next steps could include:
  -  Comparing this players data with similar players across the league. 
  -  Season logs to compare career stats season over season
