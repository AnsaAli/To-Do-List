import React, { useState } from "react";



const DisplayList = () => {

    const [activity, setActivity] = useState('');
    const [listData, setListData] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    const addActivity = () => {
        //setListData([...listData,activity]); //will get first empty array, then 
        //added data, to overcome need to do it another way
        // console.log(listData)
        if (isEditing) {
            const updatedActivity = listData.map((newActivity, index) =>
                index === currentIndex ? activity : newActivity
            );
            setListData(updatedActivity);
            setIsEditing(false);
            setCurrentIndex(null);

        } else {
            setListData((listNewData) => {
                const updatedList = [...listNewData, activity]
                console.log(updatedList);
                return updatedList;
            })
        }

        setActivity('');
    }


    const markAsDone = (index) => {

    }

    const editActivity = (index) => {
        setActivity(listData[index]);
        setIsEditing(true);
        setCurrentIndex(index);
    }

    const removeActivity = (index) => {
        const updatedActivities = listData.filter((_,i)=> i != index);
        setListData(updatedActivities);
    }

    return (
        <div className="container">
            <h2>To-Do-List</h2>
            <div className="input-data">
                <input type="text"
                    placeholder="Add your activity."
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)} />
                <button className="btn"
                    onClick={addActivity}>
                        {isEditing ? "Update" : "Add"}
                    </button>

                {/* display activities */}
                {listData.length > 0 && listData.map((activity, index) => {
                    return (
                        <div className="list" key={index}>
                            <p className="list-activities"> {activity}  </p>
                            <div className="btn-list">
                                <button className="done" onClick={()=> markAsDone(index)}>Done</button>
                                <button className="edit" onClick={()=> editActivity(index)}>Edit</button>
                                <button className="remove" onClick={()=>removeActivity(index)}>Remove</button>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DisplayList;