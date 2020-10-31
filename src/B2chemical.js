import React,{useState,useEffect} from 'react'
import './B2chemical.css'
import {useStateValue} from './StateProvider'
// import {Link} from 'react-router-dom'

function B2chemical({type}) {
    // const [value,setValue]=useState('helllo')
    const [at9,setAt9]=useState('')
    const [at10,setAt10]=useState('')
    const [at11,setAt11]=useState('')
    const [at12,setAt12]=useState('')
    const [at03,setAt03]=useState('')
    const [at04,setAt04]=useState('')
    const [At9,setat9]=useState('')
    const [At10,setat10]=useState('')
    const [At11,setat11]=useState('')
    const [At12,setat12]=useState('')
    const [At03,setat03]=useState('')
    const [At04,setat04]=useState('')
    // const [preview,setpreview]=useState('')
    const nums=['numAt9','numAt10','numAt11','numAt12','numAt03','numAt04']
    const days=['Monday','Tuesday','Wednesday','Thursday','Friday']
    const course=['HTO','CET','FFO','Petroleum Refining','Mass Transfer','SFM']
    const prof=['Dr. Milan Kumar','Dr. Amit Ranjan','Dr. Koushik','Dr. Bala','Dr. Rakesh','Dr. Gunjan']
    const timing=['9.00 to 10.00','10:15 to 11:15','11:30 to 12:30','12:45 to 1:45','3:00 to 4:00','4:15 to 5:15']
    const [{MfacultyAt9,MfacultyAt10,MfacultyAt11,MfacultyAt12,MfacultyAt04,MfacultyAt03,
      TfacultyAt9,TfacultyAt10,TfacultyAt11,TfacultyAt12,TfacultyAt04,TfacultyAt03,
      WfacultyAt9,WfacultyAt10,WfacultyAt11,WfacultyAt12,WfacultyAt04,WfacultyAt03,
      THfacultyAt9,THfacultyAt10,THfacultyAt11,THfacultyAt12,THfacultyAt04,THfacultyAt03,
      FfacultyAt9,FfacultyAt10,FfacultyAt11,FfacultyAt12,FfacultyAt04,FfacultyAt03,
    
      PMfacultyAt9,PMfacultyAt10,PMfacultyAt11,PMfacultyAt12,PMfacultyAt04,PMfacultyAt03,
      PTfacultyAt9,PTfacultyAt10,PTfacultyAt11,PTfacultyAt12,PTfacultyAt04,PTfacultyAt03,
      PWfacultyAt9,PWfacultyAt10,PWfacultyAt11,PWfacultyAt12,PWfacultyAt04,PWfacultyAt03,
      PTHfacultyAt9,PTHfacultyAt10,PTHfacultyAt11,PTHfacultyAt12,PTHfacultyAt04,PTHfacultyAt03,
      PFfacultyAt9,PFfacultyAt10,PFfacultyAt11,PFfacultyAt12,PFfacultyAt04,PFfacultyAt03,
    
      CMfacultyAt9,CMfacultyAt10,CMfacultyAt11,CMfacultyAt12,CMfacultyAt04,CMfacultyAt03,
      CTfacultyAt9,CTfacultyAt10,CTfacultyAt11,CTfacultyAt12,CTfacultyAt04,CTfacultyAt03,
      CWfacultyAt9,CWfacultyAt10,CWfacultyAt11,CWfacultyAt12,CWfacultyAt04,CWfacultyAt03,
      CTHfacultyAt9,CTHfacultyAt10,CTHfacultyAt11,CTHfacultyAt12,CTHfacultyAt04,CTHfacultyAt03,
      CFfacultyAt9,CFfacultyAt10,CFfacultyAt11,CFfacultyAt12,CFfacultyAt04,CFfacultyAt03},dispatch]=useStateValue()
    const [disabled,setDisabled]=useState(false)
    
    const courseHandler=(each)=>{
      let course=[]
      if(each===prof[0]){
       course='HTO'
      }
      if(each===prof[1]){
        course='CET'
      }
      if(each===prof[2]){
        course='FFO'
      }
      if(each===prof[3]){
        course='Petroleum Refining'
      }
      if(each===prof[4]){
        course='Mass Transfer'
      }
      if(each===prof[5]){
        course='SFM'
      }
      return course
    }

  let numAt03=[]
  let numAt04=[]
  let numAt9=[]
  let numAt10=[]
  let numAt11=[]
  let numAt12=[]
  // let Mpreview=['hii']


if(type[6]===days[0]){
  if(disabled===false){


    numAt9= prof.filter((item) => { 
      return MfacultyAt9.indexOf(item) === -1 
    })
       
    numAt10= prof.filter((item) => { 
      return MfacultyAt10.indexOf(item) === -1 
    })
    
    numAt11= prof.filter((item) => { 
      return MfacultyAt11.indexOf(item) === -1 
    })

    numAt12= prof.filter((item) => { 
      return MfacultyAt12.indexOf(item) === -1 
    })

    numAt03= prof.filter((item) => { 
      return MfacultyAt03.indexOf(item) === -1 
    })

    numAt04= prof.filter((item) => { 
      return MfacultyAt04.indexOf(item) === -1 
    })
    
    if(PMfacultyAt9[0]==='Dr. Alpesh'){
     numAt9=[]
    }
    if(PMfacultyAt10[0]==='Dr. Alpesh'){
      numAt10=[]
     }
     if(PMfacultyAt11[0]==='Dr. Alpesh'){
      numAt11=[]
     }
     if(PMfacultyAt12[0]==='Dr. Alpesh'){
      numAt12=[]
     }
     if(PMfacultyAt03[0]==='Dr. Alpesh'){
      numAt03=[]
     }
     if(PMfacultyAt04[0]==='Dr. Alpesh'){
      numAt04=[]
     }
    
     if(CMfacultyAt9[0]&&CMfacultyAt9[0].length>0){
      setDisabled(true)
    }
    if(CMfacultyAt10[0]&&CMfacultyAt10[0].length>0){
      setDisabled(true)
    }
    if(CMfacultyAt11[0]&&CMfacultyAt11[0].length>0){
      setDisabled(true)
    }
    if(CMfacultyAt12[0]&&CMfacultyAt12[0].length>0){
      setDisabled(true)
    }
    if(CMfacultyAt03[0]&&CMfacultyAt03[0].length>0){
      setDisabled(true)
    }
    if(CMfacultyAt04[0]&&CMfacultyAt04[0].length>0){
      setDisabled(true)
    }
  }else{
    numAt9=[CMfacultyAt9[0]]    
    numAt10=[CMfacultyAt10[0]]
    numAt11=[CMfacultyAt11[0]]
    numAt12=[CMfacultyAt12[0]]
    numAt03=[CMfacultyAt03[0]]
    numAt04=[CMfacultyAt04[0]]
    // Mpreview=[numAt9,numAt10,numAt11,numAt12,numAt03,numAt04]
  }
}


if(type[6]===days[1]){
  if(disabled===false){
    numAt9= prof.filter((item) => { 
      return TfacultyAt9.indexOf(item) === -1 
    })

    numAt10= prof.filter((item) => { 
      return TfacultyAt10.indexOf(item) === -1 
    })
    
    numAt11= prof.filter((item) => { 
      return TfacultyAt11.indexOf(item) === -1 
    })

    numAt12= prof.filter((item) => { 
      return TfacultyAt12.indexOf(item) === -1 
    })

    numAt03= prof.filter((item) => { 
      return TfacultyAt03.indexOf(item) === -1 
    })

    numAt04= prof.filter((item) => { 
      return TfacultyAt04.indexOf(item) === -1 
    })

    if(PTfacultyAt9[0]==='Dr. Alpesh'){
      numAt9=[]
     }
     if(PTfacultyAt10[0]==='Dr. Alpesh'){
       numAt10=[]
      }
      if(PTfacultyAt11[0]==='Dr. Alpesh'){
       numAt11=[]
      }
      if(PTfacultyAt12[0]==='Dr. Alpesh'){
       numAt12=[]
      }
      if(PTfacultyAt03[0]==='Dr. Alpesh'){
       numAt03=[]
      }
      if(PTfacultyAt04[0]==='Dr. Alpesh'){
       numAt04=[]
      }

      if(CTfacultyAt9[0]&&CTfacultyAt9[0].length>0){
        setDisabled(true)
      }
      if(CTfacultyAt10[0]&&CTfacultyAt10[0].length>0){
        setDisabled(true)
      }
      if(CTfacultyAt11[0]&&CTfacultyAt11[0].length>0){
        setDisabled(true)
      }
      if(CTfacultyAt12[0]&&CTfacultyAt12[0].length>0){
        setDisabled(true)
      }
      if(CTfacultyAt03[0]&&CTfacultyAt03[0].length>0){
        setDisabled(true)
      }
      if(CTfacultyAt04[0]&&CTfacultyAt04[0].length>0){
        setDisabled(true)
      }

  }else{
    numAt9=[CTfacultyAt9[0]]
    numAt10=[CTfacultyAt10[0]]
    numAt11=[CTfacultyAt11[0]]
    numAt12=[CTfacultyAt12[0]]
    numAt03=[CTfacultyAt03[0]]
    numAt04=[CTfacultyAt04[0]]
  }
  
// console.log(num)
 
}

if(type[6]===days[2]){
  if(disabled===false){
    numAt9= prof.filter((item) => { 
      return WfacultyAt9.indexOf(item) === -1 
    })

    numAt10= prof.filter((item) => { 
      return WfacultyAt10.indexOf(item) === -1 
    })
    
    numAt11= prof.filter((item) => { 
      return WfacultyAt11.indexOf(item) === -1 
    })

    numAt12= prof.filter((item) => { 
      return WfacultyAt12.indexOf(item) === -1 
    })

    numAt03= prof.filter((item) => { 
      return WfacultyAt03.indexOf(item) === -1 
    })

    numAt04= prof.filter((item) => { 
      return WfacultyAt04.indexOf(item) === -1 
    })

    if(CWfacultyAt9[0]&&CWfacultyAt9[0].length>0){
      setDisabled(true)
    }
    if(CWfacultyAt10[0]&&CWfacultyAt10[0].length>0){
      setDisabled(true)
    }
    if(CWfacultyAt11[0]&&CWfacultyAt11[0].length>0){
      setDisabled(true)
    }
    if(CWfacultyAt12[0]&&CWfacultyAt12[0].length>0){
      setDisabled(true)
    }
    if(CWfacultyAt03[0]&&CWfacultyAt03[0].length>0){
      setDisabled(true)
    }
    if(CWfacultyAt04[0]&&CWfacultyAt04[0].length>0){
      setDisabled(true)
    }

  }else{
    numAt9=[CWfacultyAt9[0]]
    numAt10=[CWfacultyAt10[0]]
    numAt11=[CWfacultyAt11[0]]
    numAt12=[CWfacultyAt12[0]]
    numAt03=[CWfacultyAt03[0]]
    numAt04=[CWfacultyAt04[0]]
  }
}

if(type[6]===days[3]){
  if(disabled===false){
    numAt9= prof.filter((item) => { 
      return THfacultyAt9.indexOf(item) === -1 
    })

    numAt10= prof.filter((item) => { 
      return THfacultyAt10.indexOf(item) === -1 
    })
    
    numAt11= prof.filter((item) => { 
      return THfacultyAt11.indexOf(item) === -1 
    })

    numAt12= prof.filter((item) => { 
      return THfacultyAt12.indexOf(item) === -1 
    })

    numAt03= prof.filter((item) => { 
      return THfacultyAt03.indexOf(item) === -1 
    })

    numAt04= prof.filter((item) => { 
      return THfacultyAt04.indexOf(item) === -1 
    })

    if(CTHfacultyAt9[0]&&CTHfacultyAt9[0].length>0){
      setDisabled(true)
    }
    if(CTHfacultyAt10[0]&&CTHfacultyAt10[0].length>0){
      setDisabled(true)
    }
    if(CTHfacultyAt11[0]&&CTHfacultyAt11[0].length>0){
      setDisabled(true)
    }
    if(CTHfacultyAt12[0]&&CTHfacultyAt12[0].length>0){
      setDisabled(true)
    }
    if(CTHfacultyAt03[0]&&CTHfacultyAt03[0].length>0){
      setDisabled(true)
    }
    if(CTHfacultyAt04[0]&&CTHfacultyAt04[0].length>0){
      setDisabled(true)
    }

  }else{
    numAt9=[CTHfacultyAt9[0]]
    numAt10=[CTHfacultyAt10[0]]
    numAt11=[CTHfacultyAt11[0]]
    numAt12=[CTHfacultyAt12[0]]
    numAt03=[CTHfacultyAt03[0]]
    numAt04=[CTHfacultyAt04[0]]
  }
}

if(type[6]===days[4]){
  if(disabled===false){
    numAt9= prof.filter((item) => { 
      return FfacultyAt9.indexOf(item) === -1 
    })
  
    numAt10= prof.filter((item) => { 
      return FfacultyAt10.indexOf(item) === -1 
    })
    
    numAt11= prof.filter((item) => { 
      return FfacultyAt11.indexOf(item) === -1 
    })

    numAt12= prof.filter((item) => { 
      return FfacultyAt12.indexOf(item) === -1 
    })

    numAt03= prof.filter((item) => { 
      return FfacultyAt03.indexOf(item) === -1 
    })

    numAt04= prof.filter((item) => { 
      return FfacultyAt04.indexOf(item) === -1 
    })

    if(CFfacultyAt9[0]&&CFfacultyAt9[0].length>0){
      setDisabled(true)
    }
    if(CFfacultyAt10[0]&&CFfacultyAt10[0].length>0){
      setDisabled(true)
    }
    if(CFfacultyAt11[0]&&CFfacultyAt11[0].length>0){
      setDisabled(true)
    }
    if(CFfacultyAt12[0]&&CFfacultyAt12[0].length>0){
      setDisabled(true)
    }
    if(CFfacultyAt03[0]&&CFfacultyAt03[0].length>0){
      setDisabled(true)
    }
    if(CFfacultyAt04[0]&&CFfacultyAt04[0].length>0){
      setDisabled(true)
    }

  }else{
    numAt9=[CFfacultyAt9[0]]
    numAt10=[CFfacultyAt10[0]]
    numAt11=[CFfacultyAt11[0]]
    numAt12=[CFfacultyAt12[0]]
    numAt03=[CFfacultyAt03[0]]
    numAt04=[CFfacultyAt04[0]]
   
  }
}





  // const previewHandler=()=>{
  //   if(disabled===true){
      
  //       mat9=At9
  //       mat10=At10

  //        tat9=At9
  //        tat10=At10
       
  //      return preview=[mat9,mat10,tat9,tat10]
  //   }
    
  // }

    const submitHandler=(e)=>{
     e.preventDefault()
    
     setDisabled(true)
 
    dispatch({
      type:type[0],
      item:at9
    })
  
    dispatch({
      type:type[1],
      item:at10
    })

    dispatch({
      type:type[2],
      item:at11
    })
    dispatch({
      type:type[3],
      item:at12
    })
    dispatch({
      type:type[4],
      item:at03
    })
    dispatch({
      type:type[5],
      item:at04
    })


    dispatch({
      type:type[7],
      item:at9
    })
  
    dispatch({
      type:type[8],
      item:at10
    })

    dispatch({
      type:type[9],
      item:at11
    })
    dispatch({
      type:type[10],
      item:at12
    })
    dispatch({
      type:type[11],
      item:at03
    })
    dispatch({
      type:type[12],
      item:at04
    })
    
    }    
    
   const handler9=(e)=>{
     console.log('CON',PMfacultyAt9)
    setAt9(e.target.value) 
    setDisabled(false)
    setat9(e.target.value)
   }
   const handler10=(e)=>{
    setDisabled(false)
    setAt10(e.target.value)
    setat10(e.target.value)
   }
   const handler11=(e)=>{
    setAt11(e.target.value) 
    setDisabled(false)
    setat11(e.target.value)
   }
   const handler12=(e)=>{
    setAt12(e.target.value) 
    setDisabled(false)
    setat12(e.target.value)
   }
   const handler03=(e)=>{
    setAt03(e.target.value) 
    setDisabled(false)
    setat03(e.target.value)
   }
   const handler04=(e)=>{
    setAt04(e.target.value)
    setat04(e.target.value)
    setDisabled(false)
   }
   

    return (
        <div class='b2chemical' > 
        <form>    
            <div className='faculty__course'>
            <div>9.00am to 10.00am</div>
             <div className='faculty'>
             <select className="browser-default custom-select" onChange={handler9}>
             <option value="" disabled selected>Slots Available</option>
          
             {    
                    numAt9.map((each,index)=>{
                      // if(disabled===false)
                      {
                        return <option value={each}>{each}-{courseHandler(each)}</option>
                      }
                        
                    })
               
                 
                  }
             </select>
             </div>
           </div>
          
           

           <div className='faculty__course'>
               <div>10.00 am to 11.00am</div>
             <div className='faculty'>
             <select className="browser-default custom-select" onChange={handler10}>
             <option value="" disabled selected>Slots Available</option>
             {
                    numAt10.map((each,index)=>{
                     return <option value={each}>{each}-{courseHandler(each)}</option>
                    })
                
                  }
             </select>
             </div>
           </div> 

            <div className='faculty__course'>
               <div>11.00 am to 12.00am</div>
             <div className='faculty'>
             <select className="browser-default custom-select" onChange={handler11}>
             <option value="" disabled selected>Slots Available</option>
             {
                    numAt11.map((each,index)=>{
                     return <option value={each}>{each}-{courseHandler(each)}</option>
                    })
                
                  }
             </select>
             </div>
           </div>

           <div className='faculty__course'>
            <div>12.00am to 1.00pm</div>
             <div className='faculty'>
             <select className="browser-default custom-select" onChange={handler12}>
             <option value="" disabled selected>Slots Available</option>
             {    
                    numAt12.map((each,index)=>{
                    return <option value={each}>{each}-{courseHandler(each)}</option>
                    })
               
                 
                  }
             </select>
             </div>
           </div>

           <div className='faculty__course'>
            <div>3.00pm to 4.00pm</div>
             <div className='faculty'>
             <select className="browser-default custom-select" onChange={handler03}>
             <option value="" disabled selected>Slots Available</option>
             {    
                    numAt03.map((each,index)=>{
                    return <option value={each}>{each}-{courseHandler(each)}</option>
                    })
               
                 
                  }
             </select>
             </div>
           </div>

           <div className='faculty__course'>
            <div>4.00pm to 5.00pm</div>
             <div className='faculty'>
             <select className="browser-default custom-select" onChange={handler04}>
             <option value="" disabled selected>Slots Available</option>
             {    
                    numAt04.map((each,index)=>{
                    return <option value={each}>{each}-{courseHandler(each)}</option>
                    })
               
                 
                  }
             </select>
             </div>
           </div>


           <input type='submit' disabled={disabled} onClick={submitHandler}></input>
           
           </form>
        </div>
    )
}

export default B2chemical
