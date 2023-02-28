import { createContext, useContext, useState } from "react";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import swal from "sweetalert";
import axios from "./axios";
const Context = createContext();
export const States = ({ children }) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const [muscle, setMuscle] = useState("");
    const [name, setWorkoutname] = useState("");
    const [reps, setReps] = useState("");
    const [sets, setSets] = useState("");

    const [pwerror, setPwerror] = useState("");
    const [mailerror, setmailerror] = useState("");
    const [unerror, setunerror] = useState("");
    const [moberror, setMoberror] = useState("");

    const [muscleerror, setmuscleerror] = useState("");
    const [workouterror, setworkouterror] = useState("");
    const [repserror, setrepserror] = useState("");
    const [setserror, setsetserror] = useState("");

    const [gym, setGym] = useState([]);
    var navigate = useNavigate();

const passMatch = (e) => {
      setPwerror("");
      setMoberror("");
      setmailerror("");
      setunerror("");
      if(username===""){
          setunerror("*Username required")}
      if(mobile===""){
           setMoberror("*Mobile Number required")}
      if(email===""){
          setmailerror("*Email required")}
      if(password===""){
          setPwerror("*Password required")}
      else{
        signUp();
      }
  };
  const getAllGym = () => {
    fetch('http://localhost:1000/gym/all')
      .then((res) => res.json())
      .then((result) => {
      setGym(result);
        console.log(result);
      });
     };
  
     function refreshPage() {
      window.location.reload(false);
    }
    
    const deletefromDB = (id) => {
      swal({
        title: "Conformation",
        text: "Are you sure you want to delete this product ?",
        icon: "warning",
        buttons: true,
      })
      .then((willDelete) => 
      {
        if(willDelete){
          axios.delete('/gym/delete', { params: { id:id } }).then((response)=>{
            console.log(response);
            refreshPage();
          });
        }
      });
    };

const AddButton = (e) => {
  Swal.fire(
    'Do you wish to create a new workout?',
    'Become a sigma',
    'question'
  )
  .then((response) => {
    console.log(response);
    navigate("/add");
  })
};


const addMatch = (e) => {
    setmuscleerror("");
    setworkouterror("");
    setrepserror("");
    setsetserror("");
    if(muscle===""){
      setmuscleerror("*Muscle required")}
    if(name===""){
      setworkouterror("*Workout name required")}
    if(reps===""){
      setrepserror("*Reps required")}
    if(sets===""){
      setsetserror("*Sets required")}
    else{
      AddWork();
    }
    
};




const logincheck = (e) => {
  setPwerror("");
  setmailerror("");
  if(email===""){
    setmailerror("*Email required")}
  if(password===""){
    setPwerror("*Password required")}
  else{
    signIn()
    
  }
};
// database post
const sendtoDB = (e) => {
  const users = { //users table name
    username: username,
    mobile: mobile,
    email: email,
    password: password,
  };
  axios.post('/User/signup',users)
  .then((response)=>
  {
    console.log(response);
  });
  };
 
const AddWork = (e) => {
  const gym = {
    muscle: muscle,
    name: name,
    reps: reps,
    sets: sets,
  };
  axios.post('/gym/create',gym)
  .then((response)=>
  {
    swal("Good job!", "You did a workout!", "success");
    console.log(response);
    navigate("/home");
  });
  };

const signIn = (e) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
      sendtoDB();
      navigate("/home");
    })
    .catch((error) => {
      if(error.code==="auth/wrong-password")
      alert("The password is incorrect. Please enter the correct password");
      else if(error.code === "auth/user-not-found")
      {
        swal({
          title: "User Record not found",
          text: "Do you wish to create a new account ?",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if(willDelete){
            setEmail("");
            setPassword("");
            navigate("/signup")
          }
        });
      }
      else if(error.code === "auth/invalid-email")
      alert("The Email is invalid ! Please enter a valid Email ID")
      console.log(error);
    });
};

// signup function

const signUp = (e) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
      sendtoDB();
      navigate("/home");

    })
    .catch((error) => {
      if(error.code === "auth/email-already-in-use")
      alert("The email address is already in use by another account")
      else if(error.code === "auth/invalid-email")
      alert("The Email is invalid ! Please enter a valid Email ID")
      console.log(error);
    });   
};

  return(
    <Context.Provider value={{
        email,
        setEmail,
        password,
        setPassword,
        setMobile,
        mobile,
        signIn,
        signUp,
        AddWork,
        passMatch,
        logincheck,
        pwerror,
        setPwerror,
        unerror,
        setunerror,
        mailerror,
        setmailerror,
        username,
        setUsername,
        setMoberror,
        sendtoDB,
        moberror,
        addMatch,
        muscle,
        setMuscle,
        name,
        setWorkoutname,
        reps,
        setReps,
        sets,
        setSets,
        muscleerror,
        setmuscleerror,
        workouterror,
        setworkouterror,
        repserror,
        setrepserror,
        setserror,
        setsetserror,
        gym,
        setGym,
        deletefromDB,
        getAllGym,
        AddButton

    }}
    >{children}
    </Context.Provider>
);
};
export const useStates = () => useContext(Context);