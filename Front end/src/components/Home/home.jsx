import './home.css';
import { useStates} from '../../States';
import { useEffect } from 'react';
import { motion } from "framer-motion";
import { Card } from 'react-bootstrap'
function Home() {
    const { getAllGym,gym,deletefromDB,AddButton } = useStates();
    
    useEffect(() => {
        getAllGym();
    },);
  
    return (
        
        <>
        <div className='background-1'>
        <Card className='gym-card-1' > 
        
            <span className='Sigma-1'>Sigma</span>
            <button className='add-btn' onClick={AddButton}>Add a workout</button>
        </Card>
        
         <motion.div className="gym-page">
           {gym.map((gym,i) => {
            return(
                <>
                
                <motion.div layout key={i} className="gym-div">
                <img src="https://c4.wallpaperflare.com/wallpaper/206/268/839/pose-muscle-muscle-rod-press-hd-wallpaper-preview.jpg" className='muscle-1' alt="Avatar"></img>
                    <span className='gym-name'><b>{gym.name}</b></span>
                    <span className='gym-muscle'> {gym.muscle}</span>
                    <span className='gym-reps'>Reps : {gym.reps}</span>
                    <span className='gym-sets'>Sets : {gym.sets}</span>
                    <button className='gym-delete-btn' onClick={function (e) {deletefromDB(gym.id) }}>Delete</button>
                    {/* <button className='gym-update-btn'>Update</button> */}
                    
                </motion.div>
                
                </>
            )
        })}
        </motion.div>
        </div>
        </>
    );
};
export default Home;