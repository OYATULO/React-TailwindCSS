import React,{useState} from "react";

function Forapi(){
    const[posts,setPosts] = useState([]);
    function getPost(){
         const api = "https://jsonplaceholder.typicode.com/posts"
        // const api  = "http://oyatullo.ru/Student/GetStudents?name=" 
        fetch(api,{method:"GET"})
            .then(response=> response.json())
            .then(data=>{
                setPosts(data);
                console.log(data);
            }).catch((error)=>{
                console.log(error);
                alert(error);
            });
    }
    function clear() {
        setPosts([]);
    }
    return (
        
        <section className="w-full my-5 py-10">
          <div className="button  flex w-fit space-x-3">
                <button onClick={getPost}>Get data from api</button>
                <button onClick={clear}>Reset Data</button>
          </div>
         <div className={`flex flex-col my-4`}>
                {
                posts.map((pos)=>(
                    <ul className="flex flex-row space-x-4 list-none leading-9  rounded-[10px] px-5  py-4 my-1 box-gradient">
                        <li>{pos.id}</li>
                        <li>{pos.title}</li>

                    </ul>
                    
                ))
            }
         </div>
            
        </section>
    )
};
export default Forapi;


