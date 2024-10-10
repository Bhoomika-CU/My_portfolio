import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import pic1 from '../src/images/bhoomi_port.png';
import pic2 from '../src/images/BlockChain.jpg';
import pic3 from '../src/images/Python.jpg';
import pic4 from './images/Internship.jpg'; 
import frame from './images/frame.png'
import project1 from './images/project_1.jpg'
import project2 from './images/project-2.jpg'
import publication from './images/publication.jpg'
import hash from './images/workshop.jpeg'
import course from './images/inCourse.jpg'


import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const fullText = "  Developer Intern"; 
  const typingSpeed = 150; 
  const pauseTime = 2000; 

  useEffect(() => {
    let index = 0; 

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText((prevText) => prevText + fullText.charAt(index)); 
        index++;
      } else {
        clearInterval(typingInterval); 
        setTimeout(() => {
          setText(''); 
          index = 0;
          
          const restartTyping = setInterval(() => {
            if (index < fullText.length) {
              setText((prevText) => prevText + fullText.charAt(index)); 
              index++;
            } else {
              clearInterval(restartTyping); 
            }
          }, typingSpeed);
        }, pauseTime);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval); 
  }, []);


  return (
    <div className="App">
      <header className="container-fluid header">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: 'rgba(48, 46, 46,0.7)'}}>
          <a className="navbar-brand" href="#home" style={{ color: 'white', fontWeight: 'bold', fontSize: '35px' }}>BHOOMIKA</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbar"style={{marginRight:'20px' }}>
              <a className="nav-item nav-link active" href="#home"><span>Home</span></a>
              <a className="nav-item nav-link" href="#About">About Me</a>
              <a className="nav-item nav-link" href="#Skills">Skills</a>
              <a className="nav-item nav-link" href="#certificate">Certifications</a>
              <a className="nav-item nav-link" href="#project">Projects</a>
              <a className="nav-item nav-link" href="#Contact">Contact</a>
            </div>
        </nav>
      </header>

      <main >
      <section className="container" id="first-section" >
        <div className="row pt-sm-5" id="home" style={{ paddingTop: '60px' }}>
          {/* First Column Text Content */}
          <div className="col-lg-6 col-md-12 my-auto">
            <h5 style={{ fontSize: '30px' }}>Hi There, I'm</h5><br />
            <h2 style={{ fontSize: '45px',marginBottom:'0px' }}><strong>BHOOMIKA C U</strong></h2><br />
            <hr style={{border: 'none', height: '4px', backgroundColor: 'white', width: '150px',marginTop:'0px'}} />
            <h3>Front-End {text}</h3>
            < a href="#Contact">
              <button  style={{ border: 'none', borderRadius: '4px', backgroundColor: 'white', color: 'black', padding: '15px' }}>CONTACT ME</button>
            </a>
          </div>

          {/* Second Column Image */}
          <div className="col-lg-6 col-md-12 my-5 text-center" style={{border:"10px dotted red", borderTop:'none',borderRadius:'50%'}}>
            <div className='bg-danger justify-content-center mx-auto' id="body-image" style={{ margin: '20px', width: '100%', maxWidth: '400px', height: '400px', border: '5px dotted rgb(48, 46, 46)',borderLeft:'none',borderRight:'none', borderRadius: '40%'}}>
              <img src={pic1} alt="My_image" style={{ width: '90%', height: '98%', objectFit: 'cover', objectPosition: '10px 10px' }} />
            </div>
          </div>
        </div>
      </section>

      <section  style={{backgroundColor:''}}>
      <div className='container-fluid'id="About">
          <div className='row'>
            <div className='col-lg-6 col-sm-12  order-1 order-lg-0 '>
              <img className='img-fluid' src={pic1} alt="about-image" style={{ width: '100%', height: 'auto', objectFit: 'cover' }}/>
            </div>

            <div className='col-lg-6 col-sm-12  order-0 order-lg-1'>
                <div style={{borderLeft: '4px solid white',height:'30px' ,width:'20px',color:'black'}}>
                  <span style={{color:'white',fontWeight:'bold',marginLeft:'10px',fontSize:"20px"}}>ABOUT</span>
                </div>
                <div style={{padding:'20px 0px 0px 15px'}}>
                <p style={{lineHeight:'30px',fontSize:'18px'}}>Hello, my name is Bhoomika, and I am a  Front-End Developer. With a strong foundation in creating user-friendly interfaces and beautiful designs, I strive to enhance user experiences through my work. </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ borderLeft: '4px solid white', height: '30px', width: '20px', color: 'black' }}></div>
                  <span style={{ color: 'white', fontWeight: 'bold', fontSize: "20px" }}>CAREER SUMMARY</span>
                </div>

                <div style={{padding:'20px 0px 0px 15px'}}>
                  <p>To associate with an encouraging environment where my knowledge and skills are utilized and enhance for the growth of the organization as well as personal.</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ borderLeft: '4px solid white', height: '30px', width: '20px', color: 'black' }}></div>
                  <span style={{ color: 'white', fontWeight: 'bold',  fontSize: "20px" }}>EDUCATION</span>
                </div>

                <div style={{marginTop:'20px'}}>
                  <ul>
                    <li>
                      <h4>Bachelor Of Engineering  -  2024</h4>
                    </li>
                    <p>Rajeev Institute Of Technology</p>
                    <p>Information Science & Engineering</p>
                    <p>CGPA : 7.56</p>
                    <p>Hassan</p>

                    <li>
                      <h4>II<sup>nd</sup> PUC  -  2020</h4>
                    </li>
                    <p>Govt. PU College </p>
                    <p>PCMB</p>
                    <p>73%</p>
                    <p>Chikkamagalur</p>

                    <li>
                      <h4>SSLC  -  2018</h4>
                    </li>
                    <p>St. Joseph's Convent Girls High School</p>
                    <p>78.88%</p>
                    <p>Chikkamagalur</p>
                  </ul>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ borderLeft: '4px solid white', height: '30px', width: '20px', color: 'black' }}></div>
                  <span style={{ color: 'white', fontWeight: 'bold', fontSize: "20px" }}>INTERNSHIP</span>
                </div>

                <div  style={{padding:'20px 0px 0px 15px'}} >
                  <li className='col-lg-12 col-sm-12 '>
                  .NET internship under women empowernment program initiated by Capgemini.
                  </li>
                  <li>
                  Currently Intern in Gigleji
                  </li>
                </div>  
            </div>
          </div>
        </div>
      </section>

      <section className='container-lg-fluid justify-content-center mt-5 'id="Skills">
      <div>
        <h1 className='display-4' style={{textAlign:'center',color:"rgb(48, 46, 46)",fontSize:'60px'}}>TECHNICAL SKILLS</h1>
        <div>
          <h5 style={{textAlign:'center',color:"black"}}>WEB TECHNOLOGIES</h5>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection: 'column'}}>
            <h4>HTML</h4>
            <div className="progress"  style={{width:'50%',height:'20px'}}>
              <div className='progress-bar progress-bar-striped progress-bar-animated bg-danger' style={{width:"100%"}}>100%</div>
            </div>
          </div>

          <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection: 'column'}}>
            <h4>CSS</h4>
            <div className="progress" id="Skills" style={{width:'50%',height:'20px'}}>
              <div className='progress-bar progress-bar-striped progress-bar-animated bg-danger' style={{width:"100%"}}>100%</div>
            </div>
          </div>

          <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection: 'column'}}>
            <h4>JAVASCRIPT</h4>
            <div className="progress" id="Skills" style={{width:'50%',height:'20px'}}>
              <div className='progress-bar progress-bar-striped progress-bar-animated bg-danger' style={{width:"80%"}}>80%</div>
            </div>
          </div>

          <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection: 'column'}}>
            <h4>BOOTSTRAP</h4>
            <div className="progress" id="Skills" style={{width:'50%',height:'20px'}}>
              <div className='progress-bar progress-bar-striped progress-bar-animated bg-danger' style={{width:"80%"}}>80%</div>
            </div>
          </div>

          <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection: 'column'}}>
            <h4>REACT JS</h4>
            <div className="progress" id="Skills" style={{width:'50%',height:'20px'}}>
              <div className='progress-bar progress-bar-striped progress-bar-animated bg-danger' style={{width:"70%"}}>70%</div>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h5 style={{textAlign:'center',color:"black"}}>VERSION CONTROL SYSTEM</h5>

          <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection: 'column'}}>
            <h4>GIT</h4>
            <div className="progress" id="Skills" style={{width:'50%',height:'20px'}}>
              <div className='progress-bar progress-bar-striped progress-bar-animated bg-danger' style={{width:"70%"}}>70%</div>
            </div>
            <h4>GITHUB</h4>
            <div className="progress" id="Skills" style={{width:'50%',height:'20px'}}>
              <div className='progress-bar progress-bar-striped progress-bar-animated bg-danger' style={{width:"70%"}}>70%</div>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h5 style={{textAlign:'center',color:"black"}}>PROGRAMMING LANGUAGE</h5>

          <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection: 'column'}}>
            <h4>PYTHON</h4>
            <div className="progress" id="Skills" style={{width:'50%',height:'20px'}}>
              <div className='progress-bar progress-bar-striped progress-bar-animated bg-danger' style={{width:"50%"}}>50%</div>
            </div>
          </div>
        </div>
        </div>

        <h1 className='display-3' id="certificate" style={{ textAlign: 'center', color: "rgb(48, 46, 46)", fontSize: '54px', marginTop: '30px' }}>CERTIFICATIONS</h1>

        <div className='container mt-5 'style={{ border: '10px solid transparent',borderRadius: '10px',borderImage: `url(${frame}) 70 stretch`}}>
          <div className='row'>
            <div className='col-md-4 col-12  mt-4'>
              <img className='img-fluid w-100' src={pic2} alt='.Net certi' />
              <p style={{fontSize:'20px',textAlign:'center'}}>Blockchain Technology Certification</p>
            </div>
            <div className='col-md-4 col-12  mt-4'>
              <img className='img-fluid w-100' src={pic3} alt='.Net certi' />
              <p style={{fontSize:'20px',marginTop:'15px',textAlign:'center'}}>Python Certification</p>
            </div>
            <div className='col-md-4 col-12  mt-4'>
              <img className='img-fluid w-100' src={pic4} alt='.Net certi' />
              <p style={{fontSize:'20px',textAlign:'center'}}>.NET Framework Certification</p>
            </div>
            <div className='col-md-4 col-12  mt-4 justify-content-center'>
              <img className='img-fluid w-100 ' src={publication} alt='.Net certi' />
              <p style={{fontSize:'20px',textAlign:'center'}}>publishing journal paper Certificate</p>
            </div>
            <div className='col-md-4 col-12  mt-4 justify-content-center'>
              <img className='img-fluid w-100 ' src={hash} alt='.Net certi' />
              <p style={{fontSize:'20px',textAlign:'center'}}>Workshop Certificate On Basic Java</p>
            </div>
            <div className='col-md-4 col-12  mt-4 justify-content-center'>
              <img className='img-fluid w-100 ' src={course} alt='.Net certi' />
              <p style={{fontSize:'20px',textAlign:'center'}}>C# and .NET Framework course certificate</p>
            </div>
          </div>
        </div>

      </section>

      <section className='mt-5' id='project'>
        <div>
          <h1 className='display-4' style={{textAlign:'center',color:"rgb(48, 46, 46)",fontSize:'60px'}}>PROJECTS</h1>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active"> 
              <img src={project1} alt="project_1" className="d-block w-100 img-fluid" style={{height: '500px', objectFit: 'cover'}} />
              <div className="carousel-caption d-none d-md-block text-dark">
                <h1>Online Jewellery Management System</h1>
                <p>Designed and implemented the user interface using HTML for structure, CSS for styling,and JavaScript for interactivity, providing an intuitive and visually appealing experience for users.</p>
              </div>
            </div>
          
            <div className="carousel-item">
              <img src={project2} alt="project_2" className="d-block w-100 img-fluid" style={{height: '500px', objectFit: 'cover'}} />
              <div className="carousel-caption d-none d-md-block " style={{color:'black'}}>
                <h1>Smart Automated Pesticide Sprinkling Robot</h1>
                <p>Designed and developed an automated pesticide sprinkling robot using Arduino IDE and Blynk server, aimed at improving efficiency and precision in agricultural practices.</p>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
      </main>

      <footer>
      <section id="Contact" style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="container">
          <h2 style={{textAlign:'center'}}>Contact Information</h2>
          <div className="row justify-content-center">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
              <ul className="list-unstyled">
                <li><i className="bi bi-person" style={{marginRight:"10px"}}></i><strong>Name:</strong> Bhoomika C U</li>
                <li><i className="bi bi-telephone" style={{marginRight:"10px"}}></i><strong>Phone:</strong> +91-6361147158</li>
                <li><i className="bi bi-envelope-open" style={{marginRight:"10px"}}></i><strong>Email:</strong> <a href="mailto:bhoomikashetty7182@gmail.com">bhoomikashetty7182@gmail.com</a></li>
                <li><i className="bi bi-geo-alt" style={{marginRight:"10px"}}></i><strong>Location:</strong> Chikkamagaluru, Karnataka, India</li>
                <li><i className="bi bi-linkedin" style={{marginRight:"10px"}}></i><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/bhoomika-cu/">LinkedIn Profile</a></li>
                <li><i className="bi bi-github" style={{marginRight:"10px"}}></i><strong>GitHub:</strong> <a href="https://github.com/Bhoomika-CU">GitHub</a></li>
                <li><i className="bi bi-file-earmark-text" style={{marginRight:"10px"}}></i><strong>Portfolio:</strong> <a href="https://bhoomikaportfoliio.netlify.app/">Portfolio Website</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      </footer>
    </div>
  );
}

export default TypingEffect;
