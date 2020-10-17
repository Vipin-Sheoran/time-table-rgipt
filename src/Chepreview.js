import React from 'react'
import {useStateValue} from './StateProvider'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

function Chepreview() {

    const [{MfacultyAt9,MfacultyAt10,MfacultyAt11,MfacultyAt12,MfacultyAt04,MfacultyAt03,
        TfacultyAt9,TfacultyAt10,TfacultyAt11,TfacultyAt12,TfacultyAt04,TfacultyAt03,
        WfacultyAt9,WfacultyAt10,WfacultyAt11,WfacultyAt12,WfacultyAt04,WfacultyAt03,
        THfacultyAt9,THfacultyAt10,THfacultyAt11,THfacultyAt12,THfacultyAt04,THfacultyAt03,
        FfacultyAt9,FfacultyAt10,FfacultyAt11,FfacultyAt12,FfacultyAt04,FfacultyAt03},dispatch]=useStateValue()

    return (
        <div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>days</th>
      <th>9.00am to 10.00am</th>
      <th>10.00am to 11.00am</th>
      <th>11.00am  to 12.00am</th>
      <th>12.00pm to 1.00pm</th>
      <th>3.00pm  to 4.00pm</th>
      <th>4.00pm  to 5.00pm</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Monday</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>
    <tr>
      <td>Tuesday</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Wednesday</td>
      <td ></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Thursday</td>
      <td ></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Friday</td>
      <td ></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}

export default Chepreview

