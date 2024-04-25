import Cards from "./cards";
import { useState } from "react";

export default function Card(props){
    let filter = props.filter; 
    const [ likedCourse , setLike ] = useState([]);   

    const course = props.courses;

    console.log(course);
    console.log(filter);


    function getCourse(){
        let allCourse = [];
        if(filter === "All"){            
            Object.values(course).forEach((category) => {
                category.forEach((value) => {
                    allCourse.push(value);
                })
            })
            return allCourse;
        }
        else{
            return course[filter];
        }
    }
    return(
        <div style={
            {display : "flex" , flexWrap : "wrap" , marginLeft : "20%" , marginRight : "15%" , marginTop : "3.5%" , gap : "20px"}
        }>
            {
            getCourse().map((course) => {
            return <Cards course = {course} key = {course.id} likedCourse = {likedCourse} setLike = {setLike}></Cards>
                    })
            }
        </div>
    )
}