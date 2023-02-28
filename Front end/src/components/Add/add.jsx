import './add.css';
// import { auth } from '../../firebase'
// import { useState } from 'react';
import { useStates } from '../../States';
//import { bounce } from 'react-animations';
//import styled, { keyframes } from 'styled-components';
function AddWork() {

  const { setMuscle,setWorkoutname,muscleerror,workouterror,repserror,setReps,setSets,setserror,addMatch} 
  = useStates();

  // const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`}`; 

  return (
    <>
      <div className='add-page'>
          <div className='add-box'>

            <div className='add-div'>
              <span className='add-text'><b>Add Your Workout</b></span>
            </div>

            <div className='muscle-div'>
              <span className='muscle-text'>Muscle</span>
              <input className='muscle-in' type='text' placeholder='Enter the muscle affected' required
              onChange={(e) => setMuscle(e.target.value)}></input>
              {muscleerror && <span className='muscleerror-text'><b>{muscleerror}</b></span>}
            </div>
            
            <div className='workoutname-div'>
              <span className='workoutname-text'>Workout</span>
              <input className='workoutname-in' type='text' placeholder='Enter the workout name' required
              onChange={(e) => setWorkoutname(e.target.value)}></input>
              {workouterror && <span className='workouterror-text'><b>{workouterror}</b></span>}
            </div>

            <div className='Reps-div'>
              <span className='Reps-text'>Reps</span>
              <input className='Reps-in' type='text' placeholder='Enter the number of Reps'
                onChange={(e) => setReps(e.target.value)}></input>
              {repserror && <span className='repserror-text'><b>{repserror}</b></span>}
            </div>

            <div className='Sets-div'>

              <span className='Sets-text1'>Sets</span>
              <input className='Sets-in1' type='text' placeholder='Enter the number of Sets'
                onChange={(e) => setSets(e.target.value)}></input>
              {setserror && <span className='setserror-text'><b>{setserror}</b></span>}
            </div>

            <div className='AddWorkbtn-div'>
              <button className='AddWork-btn' onClick={addMatch}>Add Workout</button>
            </div>

          </div>
      </div>
    </>
  );
}

export default AddWork;