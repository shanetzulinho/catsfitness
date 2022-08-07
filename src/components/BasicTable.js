import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const BasicTable = ({ tableHeaders, tableBodies }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: '100%' }} mb={2} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeaders.map((header, index) => (
              <TableCell key={index}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBodies.map((column, index) => {
            return (
              <TableRow key={index}>
                {Object.keys(tableHeaders).map((header, index) => (
                  <TableCell key={index}>{Object.values(column)[header]}</TableCell>
                ))}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BasicTable
