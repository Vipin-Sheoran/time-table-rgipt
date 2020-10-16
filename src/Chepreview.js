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
      <td>{MfacultyAt9}</td>
      <td>{MfacultyAt10}</td>
      <td>{MfacultyAt11}</td>
      <td>{MfacultyAt12}</td>
      <td>{MfacultyAt03}</td>
      <td>{MfacultyAt04}</td>
      
    </tr>
    <tr>
      <td>Tuesday</td>
      <td>{TfacultyAt9}</td>
      <td>{TfacultyAt10}</td>
      <td>{TfacultyAt11}</td>
      <td>{TfacultyAt12}</td>
      <td>{TfacultyAt03}</td>
      <td>{TfacultyAt04}</td>
    </tr>
    <tr>
      <td>Wednesday</td>
      <td >{WfacultyAt9}</td>
      <td>{WfacultyAt10}</td>
      <td>{WfacultyAt11}</td>
      <td>{WfacultyAt12}</td>
      <td>{WfacultyAt03}</td>
      <td>{WfacultyAt04}</td>
    </tr>
    <tr>
      <td>Thursday</td>
      <td >{THfacultyAt9}</td>
      <td>{THfacultyAt10}</td>
      <td>{THfacultyAt11}</td>
      <td>{THfacultyAt12}</td>
      <td>{THfacultyAt03}</td>
      <td>{THfacultyAt04}</td>
    </tr>
    <tr>
      <td>Friday</td>
      <td >{FfacultyAt9}</td>
      <td>{FfacultyAt10}</td>
      <td>{FfacultyAt11}</td>
      <td>{FfacultyAt12}</td>
      <td>{FfacultyAt03}</td>
      <td>{FfacultyAt04}</td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}

export default Chepreview

