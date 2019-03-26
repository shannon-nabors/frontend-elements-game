import React from 'react';
import { Table } from 'semantic-ui-react';

 const TableRow = (props) => {
    return (
      <Table.Row>
        <Table.Cell>{props.user.first_name} {props.user.lasst_name}</Table.Cell>
        <Table.Cell>{props.score.mode}</Table.Cell>
        <Table.Cell>{props.score.correct}</Table.Cell>
        <Table.Cell>{props.score.total}</Table.Cell>
        <Table.Cell>{Math.floor((props.score.correct / props.score.total) * 100)}%</Table.Cell>
      </Table.Row>
    );
}

export default TableRow;