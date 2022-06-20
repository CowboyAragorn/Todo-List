import skeleton from './skeleton'
import {easyExport} from './menuDisplay'
//import addTaskToList from './addTaskToList'
import addNewList from './addNewList';
import closePopups from './closePopups'
import displayTaskDetails from './displayTaskDetails';


skeleton ();
easyExport();
displayTaskDetails();
addNewList();
closePopups();

import { compareAsc, format } from 'date-fns'


console.log(format(new Date(2014, 1, 11), 'yyyy-MM-dd'))

const dates = [
    new Date(1995, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10),
  ]
  console.log(dates.sort(compareAsc))