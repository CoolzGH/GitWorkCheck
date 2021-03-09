import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(SecondName: string, FirstName: string, MiddleName: string, AcademicDegree: string, Position: string, Experience: number) {
  return { SecondName, FirstName, MiddleName, AcademicDegree, Position, Experience };
}

const rows = [
  createData('Абрамов', 'Максимилиан', 'Кириллович','кандидат архитектурных наук','профессор', 5),
  createData('Гущин', 'Тихон', 'Платонович','кандидат биологических наук','преподаватель', 9),
  createData('Владимиров', 'Исаак', 'Феликсович','кандидат ветеринарных наук','старший преподаватель', 6),
  createData('Михеев', 'Иннокентий','Мэлсович','доктор военных наук','профессор', 11),
  createData('Павлов', 'Тимур', 'Тимурович','доктор географических наук','преподаватель', 14),
  createData('Овчинникова', 'Виолетта', 'Анатольевна','доктор геолого-минералогических наук','профессор', 15),
  createData('Меркушева', 'Аурелия', 'Авксентьевна','кандидат искусствоведения','старший преподаватель', 8),
  createData('Полякова', 'Ванесса', 'Адольфовна','кандидат исторических наук','преподаватель', 7),
  createData('Ситникова', 'Залина', 'Андреевна','кандидат медицинских наук','профессор', 9),
  createData('Семёнова', 'Светлана', 'Авксентьевна','доктор педагогических наук','заведующий кафедрой', 6),
  createData('Абрамова','Оксана', 'Парфеньевна','кандидат политологических наук','декан', 12),
  createData('Матвеева', 'Эллада', 'Всеволодовна','доктор психологических наук','профессор', 5),
  createData('Горшкова', 'Берта', 'Матвеевна','кандидат сельскохозяйственных наук','старший преподаватель', 9),
  createData('Терентьев', 'Филипп', 'Кимович','доктор технических наук','профессор', 13),
  createData('Сысоев', 'Терентий', 'Якунович','кандидат химических наук','преподаватель', 12),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Second Name</TableCell>
            <TableCell align="left">First Name</TableCell>
            <TableCell align="left">Middle Name</TableCell>
            <TableCell align="left">Academic Degree</TableCell>
            <TableCell align="left">Position</TableCell>
            <TableCell align="left">Experience</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.SecondName}>
              <TableCell align="left">{row.SecondName}</TableCell>
              <TableCell align="left">{row.FirstName}</TableCell>
              <TableCell align="left">{row.MiddleName}</TableCell>
              <TableCell align="left">{row.AcademicDegree}</TableCell>
              <TableCell align="left">{row.Position}</TableCell>
              <TableCell align="left">{row.Experience}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}