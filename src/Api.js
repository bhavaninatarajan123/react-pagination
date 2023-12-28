import React,{useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'


function Api(){
    const [title,settitle]=useState([])
	const [currentpage,setCurrentPage]=useState(0)
	const[postPage,setPostpage]=useState(4)
		const Pages= [1,2,3,4,5,6,7,8]
		console.log(Pages)
		console.log(currentpage,postPage)
    useEffect(()=>{

        fetch('https://api.tvmaze.com/shows/1/episodes')
        .then((res)=>{
			console.log(res)
            return res.json()
           
        })

        .then((data)=>settitle(data))

        .catch((err)=>console.log(err))

    },[])
    
	const pagehandle=(value)=>{
		setCurrentPage(value*5)
		setPostpage((value*5)+4)
	}


	const a=useNavigate()
const gotofile=(value)=>{
  console.log(value);
  a(`/details/${value}`)
}
    return(
		<div>
        <div className='row-1'style={{ width:'100%',display:'flex',flexWrap:'wrap',marginLeft:'30px'}} >
	    {

               title.map((title,i)=>{
				return (i>=currentpage&&i<=postPage)?
				
		<Card style={{ width:'25%',height:'50vh',margin:'30px',textAlign:'center',backgroundColor:"#dcdcdc",borderRadius:"20px 20px",border:" 5px solid gray"}}>
      
     		 <Card.Body>

	 		 	<Card.Img variant="top" src={title.image.medium} />
       				<Card.Title>Title : {title.name}</Card.Title>
      					<Card.Text>id :{title.id}</Card.Text>
							<Button variant="primary" onClick={()=>gotofile(title.id)}> go to file</Button>
				</Card.Body>
    	</Card> :""
})
            }
		</div> 

		<div>
			
		</div>
		<div>
			{
				Pages.map((e,i)=>{
					return <button style={{ width:'5%',padding:'10px',margin:'10px',backgroundColor:"#dcdcdc",borderRadius:"10px 10px",border:" 5px solid gray",marginLeft:'60px'}} onClick={()=>{pagehandle(i)}}>{e}</button>
				})
			}
		</div>
		</div>
       
    )
}

export default Api ;