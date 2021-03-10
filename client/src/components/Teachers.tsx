import * as React from 'react';
import '../App.css';
import { DataGrid, GridColDef, ValueGetterParams } from '@material-ui/data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'secondName', headerName: 'Second name', width: 145 },
  { field: 'firstName', headerName: 'First name', width: 145 },
  { field: 'middleName', headerName: 'Middle name', width: 145 },
  { field: 'academicDegree', headerName: 'Academic Degree', width: 300 },
  { field: 'position', headerName: 'Position', width: 200 },
  {
    field: 'experience',
    headerName: 'Experience (years)',
    type: 'number',
    width: 175,
  },
];

const rows = [
  { id: 1, secondName:'Абрамов', firstName:'Максимилиан', middleName:'Кириллович', academicDegree:'кандидат архитектурных наук', position:'профессор', experience:5 },
  { id: 2, secondName:'Гущин', firstName:'Тихон', middleName:'Платонович',academicDegree:'кандидат биологических наук',position:'преподаватель', experience:9 },
  { id: 3, secondName:'Владимиров', firstName:'Исаак', middleName:'Феликсович',academicDegree:'кандидат ветеринарных наук',position:'старший преподаватель', experience:6 },
  { id: 4, secondName:'Михеев', firstName:'Иннокентий',middleName:'Мэлсович',academicDegree:'доктор военных наук',position:'профессор', experience:11 },
  { id: 5, secondName:'Павлов', firstName:'Тимур', middleName:'Тимурович',academicDegree:'доктор географических наук',position:'преподаватель', experience:14 },
  { id: 6, secondName:'Овчинникова', firstName:'Виолетта', middleName:'Анатольевна',academicDegree:'доктор геолого-минералогических наук',position:'профессор', experience:15 },
  { id: 7, secondName:'Меркушева', firstName:'Аурелия', middleName:'Авксентьевна',academicDegree:'кандидат искусствоведения',position:'старший преподаватель', experience:8 },
  { id: 8, secondName:'Полякова', firstName:'Ванесса', middleName:'Адольфовна',academicDegree:'кандидат исторических наук',position:'преподаватель', experience:7 },
  { id: 9, secondName:'Ситникова', firstName:'Залина', middleName:'Андреевна',academicDegree:'кандидат медицинских наук',position:'профессор', experience:9 },
  { id: 10, secondName:'Семёнова', firstName:'Светлана', middleName:'Авксентьевна',academicDegree:'доктор педагогических наук',position:'заведующий кафедрой', experience:6 },
  { id: 11, secondName:'Абрамова',firstName:'Оксана', middleName:'Парфеньевна',academicDegree:'кандидат политологических наук',position:'декан', experience:12 },
  { id: 12, secondName:'Матвеева', firstName:'Эллада', middleName:'Всеволодовна',academicDegree:'доктор психологических наук',position:'профессор', experience:5 },
  { id: 13, secondName:'Горшкова', firstName:'Берта', middleName:'Матвеевна',academicDegree:'кандидат сельскохозяйственных наук',position:'старший преподаватель', experience:9 },
  { id: 14, secondName:'Терентьев', firstName:'Филипп', middleName:'Кимович',academicDegree:'доктор технических наук',position:'профессор', experience:13 },
  { id: 15, secondName:'Сысоев', firstName:'Терентий', middleName:'Якунович',academicDegree:'кандидат химических наук',position:'преподаватель', experience:12 },
];

export default function DataGridDemo() {
  return (
    <div className="teachersgrid" style={{ height: 400, width: '100%', }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}