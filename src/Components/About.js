import image1 from '../assets/IMG6.JPG';
import image2 from '../assets/IMG4.JPG';
import '../styles/About.css';


function App() {
  return (
    <>
    <div className="about-section">
     <div className="container">
        <div className="about_box_one">
          <div className="about-statement-img">
            <img src={image1}/>
          </div>
          <div className="about_statement">
             <div className="about-text-box">
             <h6>Mission</h6>
            <p>Lorem ipsum dolor sit amet, consectetur 
              adipisicing elit. Nihil dolorum tenetur 
              quisquam minima autem ab illo ipsam
              exercitationem maiores magni at,
                numquam consequuntur quis similique officiis
              facilis placeat voluptas. Odit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur 
              adipisicing elit. Nihil dolorum tenetur 
              quisquam minima autem ab illo ipsam
              exercitationem maiores magni at,
                numquam consequuntur quis similique officiis
              facilis placeat voluptas. Odit.</p>
             </div>
          </div>
        </div>
        <div className="about_box_two">
          <div className="about_statement">
             <div className="about-text-box">
             <h6>Mission</h6>
            <p>Lorem ipsum dolor sit amet, consectetur 
              adipisicing elit. Nihil dolorum tenetur 
              quisquam minima autem ab illo ipsam
              exercitationem maiores magni at,
                numquam consequuntur quis similique officiis
              facilis placeat voluptas. Odit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur 
              adipisicing elit. Nihil dolorum tenetur 
              quisquam minima autem ab illo ipsam
              exercitationem maiores magni at,
                numquam consequuntur quis similique officiis
              facilis placeat voluptas. Odit.</p>
             </div>
          </div>
          <div className="about-statement-img">
            <img src={image1}/>
          </div>
        </div>
     </div>
     
      
    </div>

  
  </>
  );
}

export default App;
