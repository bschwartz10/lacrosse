import React from 'react'
import { useTable, useSortBy } from 'react-table'
import season from '../data/season.json'
import moment from 'moment'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

export default function GameLogsTable() {
  const formattedData = season.gameLogs.map((game) => {
    return {
      date: moment(game.startTime * 1000).format('l'),
      team: 'WHP',
      opponent: game.homeTeam.officialId === 'WHP' ? game.awayTeam.officialId : game.homeTeam.officialId,
      gamesStarted: game.playerEventStats.gamesStarted,
      goals: game.playerEventStats.goals,
      onePointGoals: game.playerEventStats.onePointGoals,
      twoPointGoals: game.playerEventStats.twoPointGoals,
      assists: game.playerEventStats.assists,
      penaltyMinutes: game.playerEventStats.pimValue,
      points: game.playerEventStats.points,
      shots: game.playerEventStats.shots,
      shotsOnGoalPct: game.playerEventStats.shotsOnGoalPct.toFixed(3),
      turnovers: game.playerEventStats.turnovers,
    }
  })

  const data = React.useMemo(() => formattedData, [])

  const columns = React.useMemo(
    () => [
      {
        Header: 'Date',
        accessor: 'date',
        sticky: 'left',
      },
      {
        Header: 'Tm',
        accessor: 'team',
      },
      {
        Header: 'Opp',
        accessor: 'opponent',
      },
      {
        Header: 'GS',
        accessor: 'gamesStarted',
      },
      {
        Header: 'Goals',
        accessor: 'goals',
      },
      {
        Header: '1PG',
        accessor: 'onePointGoals',
      },
      {
        Header: '2PG',
        accessor: 'twoPointGoals',
      },
      {
        Header: 'Assists',
        accessor: 'assists',
      },
      {
        Header: 'PIM',
        accessor: 'penaltyMinutes',
      },
      {
        Header: 'Points',
        accessor: 'points',
      },
      {
        Header: 'Shots',
        accessor: 'shots',
      },

      {
        Header: 'SOG%',
        accessor: 'shotsOnGoalPct',
      },
      {
        Header: 'TO',
        accessor: 'turnovers',
      },
    ],
    []
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy)

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <th key={i} {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FaChevronDown className="chevron" />
                      ) : (
                        <FaChevronUp className="chevron" />
                      )
                    ) : (
                      ''
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map((cell, i) => {
                  return (
                    <td key={i} {...cell.getCellProps()} style={{}}>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
