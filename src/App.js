
import './App.css'; 
import profile from './img/Profile.JPG';
import rct from './img/ReactJs.png';
import pyt from './img/Python.png';
import prg from './img/Progress.png';

function App() {
  return (
    <>
    <div className="ui fluid three item menu" style={{background: "black", color: "white"}}>
        <a className="item" style={{color: "white"}}>About Me</a>
        <a className="item" style={{color: "white"}}>Projects</a>
        <a className="item" style={{color: "white"}}>Contact Details</a>
    </div>
    <div style={{float: "left", paddingTop: 120, paddingLeft: 80}}>
      <img className="ui medium circular image" src={profile}></img>
     
    </div>
    
    <div style={{float: "left", paddingTop: 100, paddingLeft: 80, fontFamily: 'ProximaNovaT' }}>
    <p style={{fontSize: 45}}> About me. </p>

    <p style={{fontSize: 20}}> Hi I am Balaji Venkatasubramaniyar, a 30 year old - Backend and Web developer and living in Bangalore, India.  </p>
     
    <p style={{fontSize: 20}}>  I am a Computer Science Engineer / Lead / Architect, currently working with JKT. </p>
    
   
    <p style={{fontSize: 20}}> I am always excited to do business with like minded people. </p>
    <br/>
    <div style={{float: "left", fontFamily: 'ProximaNovaT', paddingTop:70 }}>
    <p style={{fontSize: 30}}> Expert In - </p> 
    </div>
    <div style={{float: "left"}} className="ui small image">
    <img src={rct}></img>
    </div>
    <div style={{float: "left"}} className="ui small image">
    <img src={pyt}></img>
    </div>
    <div style={{float: "left"}} className="ui small image">
    <img src={prg}></img>
    </div>
    </div>
    </>
  );
}

export default App;
