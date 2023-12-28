import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Card from 'react-bootstrap/Card';

function Details(){
    const [photos,setphotos]=useState([])
    
        useEffect(()=>{

            // fetch('https://api.tvmaze.com/shows/1/episodes')
            // .then((res)=>{
            //     console.log(res)
            //     return res.json()
            // })
            // .then((data)=>settitle(data))
    
            axios.get('https://api.tvmaze.com/shows/1/episodes')
          .then((res)=>
          setphotos(res.data)
          )
    
        },[])
        const params=useParams()
        const item=photos.find((e)=>e.id=== parseInt(params.id))
        console.log(item);
        return(
            <div>
                <Card style={{ width:'40%',height:'90vh',margin:'30px',textAlign:'center',backgroundColor:"#dcdcdc",borderRadius:"20px 20px",border:" 5px solid gray",marginLeft:"30%"}}>
      
      <Card.Body>

          <Card.Img variant="top" src={item?.image.medium} />
               <Card.Title>Title : {item?.name}</Card.Title>
                  <Card.Text>id :{item?.id}</Card.Text>
                    <Card.Text>runtime :{item?.runtime}</Card.Text>
                    <Card.Text> rating :{item?.rating.average}</Card.Text>
                    <Card.Text> number : {item?.number}</Card.Text> 
                     <Card.Text>type :{item?.type}</Card.Text> 



                     {/* <Card.Text> summary :{item?.summary}</Card.Text> 
                     <Card.Text>airdate :{title.airdate}</Card.Text>
                    <Card.Text>{title.season}</Card.Text>
                    <Card.Text>{title.airtime}</Card.Text>
                    <Card.Text>{title.airstamp}</Card.Text> 
                    <Card.Text>{title.links.self.href}</Card.Text> 
                    <Card.Text>{title.show.href}</Card.Text> 
                    <Button variant="primary">read more</Button> */}
                    
                
      </Card.Body>
</Card>
   
                    
            </div>
               
        )
        

}
export default Details ;