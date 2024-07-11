import React, { useState } from "react";



const DisplayList = () => {

    const [activity, setActivity] = useState('');
    const [listData, setListData] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [doneActivities, setDoneActivities] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [message, setMessage] = useState('');

    const addActivity = () => {
        //setListData([...listData,activity]); //will get first empty array, then 
        //added data, to overcome need to do it another way
        // console.log(listData)
        if(activity.trim() === ''){
            return 
        }
        if (listData.includes(activity)) {
            setMessage('This activity already exists.');
            return;
          }

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
            });
            setDoneActivities((doneNewData) => [...doneNewData, false]);
        }

        setActivity('');
        setMessage('')
    }


    const markAsDone = (index) => {
        setDoneActivities((doneActivity)=> doneActivity.map((done,i)=> (i === index ? !done : done)))
    }

    const editActivity = (index) => {
        setActivity(listData[index]);
        setIsEditing(true);
        setCurrentIndex(index);
    }

    const removeActivity = (index) => {
        if(window.confirm('Are you sure you want to remove this activity?')){
            const updatedActivities = listData.filter((_,i)=> i != index);
            setListData(updatedActivities);
        }
        
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
                    {message && <p className="message">{message}</p>}
                {/* display activities */}
                {listData.length > 0 && listData.map((activity, index) => {
                    return (
                        <div className="list" key={index}>
                            <p className="list-activities"> {activity}  </p>
                            <div className="btn-list">
                                <button className="done" onClick={()=> markAsDone(index)}>
                                    {doneActivities[index] ? "Done": "Mark"}
                                </button>
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