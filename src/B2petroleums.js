import React,{useState} from 'react'
import B2petroleum from './B2petroleum'
import './B2chemicals.css'
import {Link} from 'react-router-dom'
import Example from './PModal'

function B2petroleums() {

    const days=['Monday','Tuesday','Wednesday','Thursday','Friday']
    const typeHandler=(each)=>{
        let type9=[]
        let type10=[]
        let type11=[]
        let type12=[]
        let type03=[]
        let type04=[]
        let type=[]
        let day=[]

        let Ptype9=[]
        let Ptype10=[]
        let Ptype11=[]
        let Ptype12=[]
        let Ptype03=[]
        let Ptype04=[]

     if(each===days[0]){
       type9='MADD_TO_9'
       type10='MADD_TO_10'
       type11='MADD_TO_11'
       type12='MADD_TO_12'
       type03='MADD_TO_03'
       type04='MADD_TO_04'
       day='Monday'

       Ptype9='PMADD_TO_9'
       Ptype10='PMADD_TO_10'
       Ptype11='PMADD_TO_11'
       Ptype12='PMADD_TO_12'
       Ptype03='PMADD_TO_03'
       Ptype04='PMADD_TO_04'
     }

     if(each===days[1]){
        type9='TADD_TO_9'
        type10='TADD_TO_10'
        type11='TADD_TO_11'
        type12='TADD_TO_12'
        type03='TADD_TO_03'
        type04='TADD_TO_04'
        day='Tuesday'

        Ptype9='PTADD_TO_9'
        Ptype10='PTADD_TO_10'
        Ptype11='PTADD_TO_11'
        Ptype12='PTADD_TO_12'
        Ptype03='PTADD_TO_03'
        Ptype04='PTADD_TO_04'
      }

      if(each===days[2]){
        type9='WADD_TO_9'
        type10='WADD_TO_10'
        type11='WADD_TO_11'
        type12='WADD_TO_12'
        type03='WADD_TO_03'
        type04='WADD_TO_04'
        day='Wednesday'

        Ptype9='PWADD_TO_9'
        Ptype10='PWADD_TO_10'
        Ptype11='PWADD_TO_11'
        Ptype12='PWADD_TO_12'
        Ptype03='PWADD_TO_03'
        Ptype04='PWADD_TO_04'
      }

      if(each===days[3]){
        type9='THADD_TO_9'
        type10='THADD_TO_10'
        type11='THADD_TO_11'
        type12='THADD_TO_12'
        type03='THADD_TO_03'
        type04='THADD_TO_04'
        day='Thursday'

        Ptype9='PTHADD_TO_9'
        Ptype10='PTHADD_TO_10'
        Ptype11='PTHADD_TO_11'
        Ptype12='PTHADD_TO_12'
        Ptype03='PTHADD_TO_03'
        Ptype04='PTHADD_TO_04'
      }

      if(each===days[4]){
        type9='FADD_TO_9'
        type10='FADD_TO_10'
        type11='FADD_TO_11'
        type12='FADD_TO_12'
        type03='FADD_TO_03'
        type04='FADD_TO_04'
        day='Friday'

        Ptype9='PFADD_TO_9'
        Ptype10='PFADD_TO_10'
        Ptype11='PFADD_TO_11'
        Ptype12='PFADD_TO_12'
        Ptype03='PFADD_TO_03'
        Ptype04='PFADD_TO_04'
      }

    return type=[type9,type10,type11,type12,type03,type04,day,Ptype9,Ptype10,Ptype11,Ptype12,Ptype03,Ptype04]
    }

    
    return (
        <div className='b2chemicals'>
           <div className='days'>
             
             {
                 days.map((each,index)=>{
                return <div className='d'> <button onClick={typeHandler(each)}>{each}</button>
                <B2petroleum type={typeHandler(each)} /> </div>
                 })
             }   
            </div>
            <Example></Example>
        </div>
    )
}

export default B2petroleums