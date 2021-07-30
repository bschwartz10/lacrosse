import React, { useEffect } from 'react'
import * as d3 from 'd3'
import moment from 'moment'

export default function ConnectedScatterplot() {
  // set the dimensions and margins of the graph
  const margin = { top: 10, right: 10, bottom: 60, left: 80 },
    width = 600 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom

  const renderChart = () => {
    const svg = d3
      .select('#my_dataviz')
      .append('svg')
      .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)

    const g = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`)

    // X label
    g.append('text')
      .attr('class', 'x axis-label')
      .attr('x', width / 2)
      .attr('y', height + 50)
      .attr('font-size', '20px')
      .attr('text-anchor', 'middle')
      .text('Date')

    // Y label
    const yLabel = g
      .append('text')
      .attr('class', 'y axis-label')
      .attr('x', -(height / 2))
      .attr('y', -40)
      .attr('font-size', '20px')
      .attr('text-anchor', 'middle')
      .attr('transform', 'rotate(-90)')
      .text('Goals')

    //Read the data
    d3.json('data/season.json').then((data) => {
      const gameLogs = data.gameLogs.map((game) => {
        const tempTime = moment(new Date(game.startTime * 1000)).format('M/DD')

        return {
          startTime: game.startTime,
          formattedStartTime: tempTime,
          ...game.playerEventStats,
          ...game,
        }
      })

      const selectOptions = ['goals', 'assists', 'points']

      // add the options to the button
      d3.select('.selectButton')
        .selectAll('myOptions')
        .data(selectOptions)
        .enter()
        .append('option')
        .text((d) => d) // text showed in the menu
        .attr('value', (d) => d) // corresponding value returned by the button

      // Add X axis
      const x = d3
        .scaleBand()
        .domain(gameLogs.map((game) => game.formattedStartTime))
        .range([0, width])
      g.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x))

      // Add Y axis
      const y = d3.scaleLinear().domain([0, 10]).range([height, 0])
      g.append('g').call(d3.axisLeft(y))

      // Initialize line with group a
      const line = g
        .append('g')
        .attr('transform', `translate(40, 0)`)
        .append('path')
        .datum(gameLogs)
        .attr(
          'd',
          d3
            .line()
            .x((d) => x(d.formattedStartTime))
            .y((d) => y(+d.goals))
        )
        .attr('stroke', 'black')
        .style('stroke-width', 4)
        .style('fill', 'none')

      // Initialize dots with group a
      const dot = g
        .append('g')
        .attr('transform', `translate(40, 0)`)
        .selectAll('circle')
        .data(gameLogs)
        .join('circle')
        .attr('cx', (d) => x(d.formattedStartTime))
        .attr('cy', (d) => y(+d.goals))
        .attr('r', 7)
        .style('fill', '#59c2b1')

      // A function that update the chart
      function update(selectedGroup) {
        // Create new data with the selection
        const dataFilter = gameLogs.map(function (d) {
          return { formattedStartTime: d.formattedStartTime, value: d[selectedGroup] }
        })

        // Give these new data to update line
        line
          .datum(dataFilter)
          .transition()
          .duration(500)
          .attr(
            'd',
            d3
              .line()
              .x((d) => x(d.formattedStartTime))
              .y((d) => y(+d.value))
          )
        // Give these new data to update dot
        dot
          .data(dataFilter)
          .transition()
          .duration(500)
          .attr('cx', (d) => x(d.formattedStartTime))
          .attr('cy', (d) => y(+d.value))

        yLabel.text(selectedGroup.charAt(0).toUpperCase() + selectedGroup.slice(1))
      }

      // // When the button is changed, run the updateChart function
      d3.select('.selectButton').on('change', function (event, d) {
        // recover the option that has been chosen
        let selectedOption = d3.select(this).property('value')
        // run the updateChart function with this selected option
        update(selectedOption)
      })
    })
  }

  useEffect(() => {
    renderChart()
  }, [])

  return (
    <div className="connected-scatterplot">
      <div id="my_dataviz"></div>
      <div className="select__container">
        <select className="selectButton"></select>
      </div>
    </div>
  )
}
