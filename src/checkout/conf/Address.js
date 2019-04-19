import React from 'react'
import { connect } from 'react-redux'
import * as FUN from '../../functions'
import * as SELECT from '../../rdxstore/selectors'

const DivTableRow = (props) => <div style={{display:'table-row'}}>{props.children}</div>
const DivTable = (props) => <div style={{display:'table', marginLeft:40}}>{props.children}</div>

const Cell0 = (props) => <div style={{display:'table-cell', paddingRight:10}}>{props.children}</div>
const Cell1 = (props) => <div style={{display:'table-cell'}}>{props.children}</div>

const Address = ({name, address}) => {
  var lines = FUN.FormatAddress(address)
  return <DivTable>
    <DivTableRow style={{display:'table-row'}}>
      <Cell0>Name:</Cell0>
      <Cell1>{name}</Cell1>
    </DivTableRow>
    <DivTableRow>
      <Cell0>Address:</Cell0>
      <Cell1>
        {lines.map((line, i) => <div key={'k'+i}>{line}</div>)}
      </Cell1>
    </DivTableRow>
  </DivTable>
}

const mapState = state => {
  return {
    name: SELECT.getName(state),
    address: SELECT.getAddress(state)
  }
}

export default connect(mapState)(Address)