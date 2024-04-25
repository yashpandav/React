import React from "react";
import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import './cards.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Cards(porps){
    const data = porps.course;
    let likedCourse = porps.likedCourse;
    let setLike = porps.setLike;

    function likeHandler(){ 
        if(likedCourse.includes(data.id)){
            //HAVE TO REMOVE THE LIKE
            setLike((prev) => prev.filter((id) => id !== data.id))
            toast.warning(data.title + " Removed");
        }
        else{   
            toast.success(data.title + " Liked");
            //HAVE TO ADD THE LIKE
            if(likedCourse.length === 0){
                setLike([data.id]);
            }
            else{   
                setLike((prev) => [...prev , data.id])
            }
        }
    }

    return(
        <div id="card">
                <div id="image">
                    <img src={data.image.url}/>
                </div>

            <div id="text"> 
                <span style={{
                    display : "flex",
                    justifyContent : "space-between", 
                    alignItems : "center"
                }}>
                    <p>{data.title}</p>
                    <button id="like" onClick={likeHandler}>
                        {
                            likedCourse.includes(data.id) ? (<GrDislike />) : (<GrLike />)
                        }
                    </button>   
                </span>
                
                <hr style={{
                    opacity : "20%",
                    marginRight : "10px"
                }}></hr>
                <p style={{fontSize : "14px"}}> 
                    {
                        data.description.length > 150 ? (data.description.substring(0, 150) + "...") : (data.description)
                    }
                </p>
            </div>
            
        </div>
    );
}