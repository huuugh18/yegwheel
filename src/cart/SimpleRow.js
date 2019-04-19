import React from 'react';
import { TableRow, TableCell } from '@material-ui/core'

const SimpleRow = ({cells}) => <TableRow>
  <TableCell>{cells[0]}</TableCell>
  <TableCell>{cells[1]}</TableCell>
  <TableCell>{cells[2]}</TableCell>
  <TableCell>{cells[3]}</TableCell>
</TableRow>

export default SimpleRow