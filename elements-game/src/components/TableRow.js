import React from 'react';
import { Table } from 'semantic-ui-react';

 const TableRow = (props) => {

  const percent = () => {
     if (Math.floor((props.score.correct / props.score.total) * 100) === 0){
       return 0
     } else{
       return Math.floor((props.score.correct / props.score.total) * 100)
     }
  }
    return (
      <Table.Row>
        <Table.Cell>{props.user.first_name} {props.user.lasst_name}</Table.Cell>
        <Table.Cell>{props.score.mode}</Table.Cell>
        <Table.Cell>{props.score.correct}</Table.Cell>
        <Table.Cell>{props.score.total}</Table.Cell>
        <Table.Cell>{percent()}%</Table.Cell>
      </Table.Row>
    );
}

export default TableRow;