import React, { useState } from "react";



const DisplayList = () => {

    const [activity, setActivity] = useState('');
    const [listData, setListData]= useState([])

    const addActivity = () => {
        //setListData([...listData,activity]); //will get first empty array, then 
                                              //added data, to overcome need to do it another way
        // console.log(listData)
        setListData((listNewData)=>{
            const updatedList = [...listNewData,activity] 
            console.log(updatedList);
            return updatedList;
        })
    }

    return (
        <div className="container">
            <h2>To-Do-List</h2>
            <div className="input-data">
                <input type="text" 
                placeholder="Add your activity." 
                value={activity}
                onChange={(e)=> setActivity(e.target.value)}/>
                <button className="btn" 
                onClick={addActivity}>Add</button>
            </div>
        </div>
    )
}

export default DisplayList;