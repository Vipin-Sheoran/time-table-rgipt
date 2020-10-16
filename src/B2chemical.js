import React,{useState,useEffect} from 'react'
import './B2chemical.css'
import {useStateValue} from './StateProvider'

function B2chemical({type}) {
    // const [value,setValue]=useState('helllo')
    const [at9,setAt9]=useState('')
    const [at10,setAt10]=useState('')
    const [at11,setAt11]=useState('')
    const [at12,setAt12]=useState('')
    const [at03,setAt03]=useState('')
    const [at04,setAt04]=useState('')
    const nums=['numAt9','numAt10','numAt11','numAt12','numAt03','numAt04']
    const days=['Monday','Tuesday','Wednesday','Thursday','Friday']
    const course=['HTO','CET','FFO','Petroleum Refining','Mass Transfer','SFM']
    const prof=['Dr. Milan Kumar','Dr. Amit Ranjan','Dr. Koushik','Dr. Bala','Dr. Rakesh','Dr. Gunjan']
    const timing=['9.00 to 10.00','10:15 to 11:15','11:30 to 12:30','12:45 to 1:45','3:00 to 4:00','4:15 to 5:15']
    const [{MfacultyAt9,MfacultyAt10,MfacultyAt11,MfacultyAt12,MfacultyAt04,MfacultyAt03,
      TfacultyAt9,TfacultyAt10,TfacultyAt11,TfacultyAt12,TfacultyAt04,TfacultyAt03,
      WfacultyAt9,WfacultyAt10,WfacultyAt11,WfacultyAt12,WfacultyAt04,WfacultyAt03,
      THfacultyAt9,THfacultyAt10,THfacultyAt11,THfacultyAt12,THfacultyAt04,THfacultyAt03,
      FfacultyAt9,FfacultyAt10,FfacultyAt11,FfacultyAt12,FfacultyAt04,FfacultyAt03},dispatch]=useStateValue()
    const [disabled,setDisabled]=useState(false)
    
    const courseHandler=(each)=>{
      let course=[]
      if(each===prof[0]){
       course='Heat Transfer Operations'
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

if(type[6]===days[0]){
  numAt9= prof.filter((item) => { 
    return MfacultyAt9.indexOf(item) === -1 
  })
// console.log(num)
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
}


if(type[6]===days[1]){
  numAt9= prof.filter((item) => { 
    return TfacultyAt9.indexOf(item) === -1 
  })
// console.log(num)
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
}

if(type[6]===days[2]){
  numAt9= prof.filter((item) => { 
    return WfacultyAt9.indexOf(item) === -1 
  })
// console.log(num)
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
}

if(type[6]===days[3]){
  numAt9= prof.filter((item) => { 
    return THfacultyAt9.indexOf(item) === -1 
  })
// console.log(num)
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
}

if(type[6]===days[4]){
  numAt9= prof.filter((item) => { 
    return FfacultyAt9.indexOf(item) === -1 
  })
// console.log(num)
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
}


    const submitHandler=(e)=>{
     e.preventDefault()
     console.log('here it is',numAt9)
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
    
    }    
   const handler9=(e)=>{
    setAt9(e.target.value) 
    setAt10(e.target.value)
   }
   const handler10=(e)=>{
    setAt11(e.target.value) 
    setAt10(e.target.value)
   }
   const handler11=(e)=>{
    setAt11(e.target.value) 
    setAt12(e.target.value)
   }
   const handler12=(e)=>{
    setAt12(e.target.value) 
    setAt03(e.target.value)
   }
   const handler03=(e)=>{
    setAt03(e.target.value) 
    setAt04(e.target.value)
   }
   const handler04=(e)=>{
    setAt04(e.target.value)
   }

    return (
        <div class='b2chemical'> 
        <form>
          
             
            <div className='faculty__course'>
            <div>9.00am to 10.00am</div>
             <div className='faculty'>
             <select className="browser-default custom-select" onChange={handler9}>
             <option value="" disabled selected>Slots Available</option>
             {    
                    numAt9.map((each,index)=>{
                    return <option value={each}>{each}-{courseHandler(each)}</option>
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
