import React from 'react'
import {useStateValue} from './StateProvider'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

function Chepreview({preview}) {

    const [{PMfacultyAt9,PMfacultyAt10,PMfacultyAt11,PMfacultyAt12,PMfacultyAt04,PMfacultyAt03,
        PTfacultyAt9,PTfacultyAt10,PTfacultyAt11,PTfacultyAt12,PTfacultyAt04,PTfacultyAt03,
        PWfacultyAt9,PWfacultyAt10,PWfacultyAt11,PWfacultyAt12,PWfacultyAt04,PWfacultyAt03,
        PTHfacultyAt9,PTHfacultyAt10,PTHfacultyAt11,PTHfacultyAt12,PTHfacultyAt04,PTHfacultyAt03,
        PFfacultyAt9,PFfacultyAt10,PFfacultyAt11,PFfacultyAt12,PFfacultyAt04,PFfacultyAt03},dispatch]=useStateValue()
   
        const monday=[PMfacultyAt9,PMfacultyAt10,PMfacultyAt11,PMfacultyAt12,PMfacultyAt03,PMfacultyAt04]
        const tuesday=[PTfacultyAt9,PTfacultyAt10,PTfacultyAt11,PTfacultyAt12,PTfacultyAt03,PTfacultyAt04]
        const wednesday=[PWfacultyAt9,PWfacultyAt10,PWfacultyAt11,PWfacultyAt12,PWfacultyAt03,PWfacultyAt04]
        const thursday=[PTHfacultyAt9,PTHfacultyAt10,PTHfacultyAt11,PTHfacultyAt12,PTHfacultyAt03,PTHfacultyAt04]
        const friday=[PFfacultyAt9,PFfacultyAt10,PFfacultyAt11,PFfacultyAt12,PFfacultyAt03,PFfacultyAt04]
        const prof=['Dr. Milan Kumar','Dr. Amit Ranjan','Dr. Koushik','Dr. Alpesh','Dr. Rakesh','Dr. Gunjan']
      
        const courseHandler=(each)=>{
          let course=[]
          if(each[0]===prof[0]){
           course='HTO'
          }
          if(each[0]===prof[1]){
            course='CET'
          }
          if(each[0]===prof[2]){
            course='FFO'
          }
          if(each[0]===prof[3]){
            course='Mathematics'
          }
          if(each[0]===prof[4]){
            course='Mass Transfer'
          }
          if(each[0]===prof[5]){
            course='SFM'
          }
          return course
        }
      

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
      {
        monday.map((each,index)=>{
        return <td>{each} <br></br>{courseHandler(each)}</td>
         })
      }
     
      
      
    </tr>
    <tr>
      <td>Tuesday</td>
      {
        tuesday.map(each=>{
         return <td>{each}<br></br> {courseHandler(each)}</td>
         })
      }
    </tr>
    <tr>
      <td>Wednesday</td>
      {
        wednesday.map(each=>{
         return <td>{each}<br></br> {courseHandler(each)}</td>
         })
      }
    </tr>
    <tr>
      <td>Thursday</td>
      {
        thursday.map(each=>{
         return <td>{each}<br></br> {courseHandler(each)}</td>
         })
      }
    </tr>
    <tr>
      <td>Friday</td>
      {
        friday.map(each=>{
         return <td>{each} <br></br>{courseHandler(each)}</td>
         })
      }
    </tr>
  </tbody>
</Table>
        </div>
    )
}

export default Chepreview

