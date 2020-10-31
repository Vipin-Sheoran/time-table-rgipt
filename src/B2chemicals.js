import {Link} from 'react-router-dom'
import React,{useState} from 'react'
import B2chemical from './B2chemical'
import './B2chemicals.css'
import Example from './CModal'

function B2chemicals() {

    const days=['Monday','Tuesday','Wednesday','Thursday','Friday']
    const typeHandler=(each)=>{
        let type9=[]
        let type10=[]
        let type11=[]
        let type12=[]
        let type03=[]
        let type04=[]
        let day=[]
        let type=[]

        let Ctype9=[]
        let Ctype10=[]
        let Ctype11=[]
        let Ctype12=[]
        let Ctype03=[]
        let Ctype04=[]

     if(each===days[0]){
       type9='MADD_TO_9'
       type10='MADD_TO_10'
       type11='MADD_TO_11'
       type12='MADD_TO_12'
       type03='MADD_TO_03'
       type04='MADD_TO_04'
       day='Monday'

       Ctype9='CMADD_TO_9'
       Ctype10='CMADD_TO_10'
       Ctype11='CMADD_TO_11'
       Ctype12='CMADD_TO_12'
       Ctype03='CMADD_TO_03'
       Ctype04='CMADD_TO_04'
      
     }

     if(each===days[1]){
        type9='TADD_TO_9'
        type10='TADD_TO_10'
        type11='TADD_TO_11'
        type12='TADD_TO_12'
        type03='TADD_TO_03'
        type04='TADD_TO_04'
        day='Tuesday'

        Ctype9='CTADD_TO_9'
        Ctype10='CTADD_TO_10'
        Ctype11='CTADD_TO_11'
        Ctype12='CTADD_TO_12'
        Ctype03='CTADD_TO_03'
        Ctype04='CTADD_TO_04'
      }

      if(each===days[2]){
        type9='WADD_TO_9'
        type10='WADD_TO_10'
        type11='WADD_TO_11'
        type12='WADD_TO_12'
        type03='WADD_TO_03'
        type04='WADD_TO_04'
        day='Wednesday'

        Ctype9='CWADD_TO_9'
        Ctype10='CWADD_TO_10'
        Ctype11='CWADD_TO_11'
        Ctype12='CWADD_TO_12'
        Ctype03='CWADD_TO_03'
        Ctype04='CWADD_TO_04'
      }

      if(each===days[3]){
        type9='THADD_TO_9'
        type10='THADD_TO_10'
        type11='THADD_TO_11'
        type12='THADD_TO_12'
        type03='THADD_TO_03'
        type04='THADD_TO_04'
        day='Thursday'

        Ctype9='CTHADD_TO_9'
        Ctype10='CTHADD_TO_10'
        Ctype11='CTHADD_TO_11'
        Ctype12='CTHADD_TO_12'
        Ctype03='CTHADD_TO_03'
        Ctype04='CTHADD_TO_04'
      }

      if(each===days[4]){
        type9='FADD_TO_9'
        type10='FADD_TO_10'
        type11='FADD_TO_11'
        type12='FADD_TO_12'
        type03='FADD_TO_03'
        type04='FADD_TO_04'
        day='Friday'

        Ctype9='CFADD_TO_9'
        Ctype10='CFADD_TO_10'
        Ctype11='CFADD_TO_11'
        Ctype12='CFADD_TO_12'
        Ctype03='CFADD_TO_03'
        Ctype04='CFADD_TO_04'
      }

    return type=[type9,type10,type11,type12,type03,type04,day,Ctype9,Ctype10,Ctype11,Ctype12,Ctype03,Ctype04]
    }

    

    return (
        <div className='b2chemicals'>
           <div className='days'>
             {
                 days.map((each,index)=>{
                return <div className='d'> <button onClick={typeHandler(each)}>{each}</button>
                <B2chemical type={typeHandler(each)} /> </div>
                 })
             }   
             {/* <Link to='/chepreview'>Preview</Link> */}
            </div>
            <Example></Example>
            
        </div>
    )
}

export default B2chemicals
