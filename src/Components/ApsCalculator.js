import React, { useState } from 'react';
import '../styles/ApsCalculator.css'
import noticeIcon from '../assets/aps-icon.jpg'

const ApsCalculator = () => {

    const subjects = [
  
        'HomeLanguge',
        'English',
        'Mathematics',
        'MathematicalLit',
        'PhysicalScience',
        'Accounting',
        'LifeScience',
        'Geography',
        'History',
        'Economics',
        'BusinessStudies',
        'Tourism',
        'ConsumerStudies',
        'HospitalityStudies',
        'AgriculturalSciences',
        'AdditionalSubject1',
        'AdditionalSubject2',
        'AdditionalSubject3',
        'AdditionalSubject4'
        // Add more subjects here as needed
    
      ];
      const marksOptions = ['0-29%', '30-39%', '40-40%', '50-59%', '60-69%', '70-79%', '80-100%'];

      const [total, setTotal] = useState(0);

      const [generalMsg,setGeneralMsg] = useState('');

      const noticeMsg = 'Life Orientation does not count towards your APS, and this specified APS represent the minimum criteria, but it\'s important to understand that meeting these scores doesn\'t guarantee admission to any university program. Different universities may have their unique entry requirements for specific courses, which can vary from one institution to another.'
    
    
      const defaultSubject = 'Choose subject';
      const defaultMark = 'Choose marks';
      const defaultLevel = '0';
    
      const [selectedSubjects, setSelectedSubjects] = useState({
      
        HomeLanguge: defaultSubject,
        English: defaultSubject,
        Mathematics: defaultSubject,
        MathematicalLit:defaultSubject,
        PhysicalScience:defaultSubject,
        Accounting:defaultSubject
        
      });
    
      const [selectedMarks, setSelectedMarks] = useState({
    
        HomeLanguge: defaultMark,
        English: defaultMark,
        Mathematics: defaultMark,
        MathematicalLit:defaultMark,
        PhysicalScience:defaultMark,
        Accounting:defaultMark
      });
    
    
      const [selectedLevels, setSelectedLevels] = useState({
    
        HomeLanguge: defaultLevel,
        English: defaultLevel,
        Mathematics: defaultLevel,
        MathematicalLit:defaultLevel,
        PhysicalScience:defaultLevel,
        Accounting:defaultLevel
      });
    
    
    
      const handleSubjectChange = (subject, event) => {
        const selectedSubject = event.target.value;
        const updatedSubjects = { ...selectedSubjects };
        setSelectedSubjects(updatedSubjects);
    
        //prevents subject duplication
        updatedSubjects[subject] = Object.values(selectedSubjects).includes(selectedSubject)
        ? (alert(`You have already selected ${selectedSubject}`), defaultSubject)
        : selectedSubject;
      
      };
    
      const handleMarksChange = (subject, event) => {
        const selectedMark = event.target.value;
        const updatedMarks = { ...selectedMarks };
        updatedMarks[subject] = selectedMark;
        setSelectedMarks(updatedMarks);
    
        // populate level column base on percentage
        let level = defaultLevel;
         if (selectedMark === '0-29%') {level = '1';}
         else if (selectedMark === '30-39%') {level = '2';}
         else if (selectedMark === '40-40%') {level = '3';}
         else if (selectedMark === '50-59%') {level = '4';}
         else if (selectedMark === '60-69%') {level = '5';}
         else if (selectedMark === '70-79%') {level = '6';}
         else if (selectedMark === '80-100%') {level = '7';}
         
    
        const updatedLevels = { ...selectedLevels };
        updatedLevels[subject] = level;
        setSelectedLevels(updatedLevels);
      };
    
      function sumOfLevel(){
        
        const selectedMarksValues = Object.values(selectedLevels);
        const validMarks = selectedMarksValues.filter(
          (mark) => mark !== defaultLevel
        );
        const sum = validMarks.reduce(
          (accumulator, currentMark) =>
            accumulator + parseInt(currentMark),
          0
        );
        setTotal(sum);
        displayGeneralMsg(sum)
    
      };
    
    
      const calculateAps = () => {
    
         //condition for marks and subject
        const allSubjectsSelected = Object.values(selectedSubjects).find((unselectedSubject)=>unselectedSubject===defaultSubject);
        const allLevesSelected = Object.values(selectedLevels).find((unselectedMarks)=>unselectedMarks===defaultLevel)
       
        {(allSubjectsSelected || allLevesSelected) ?  alert('field of subject or marks is required') : sumOfLevel()};
     
      };

      // event handler to reset calculator
      const handleReset = () => {
        
        setSelectedSubjects({
          HomeLanguge: defaultSubject,
          English: defaultSubject,
          Mathematics: defaultSubject,
          MathematicalLit: defaultSubject,
          PhysicalScience: defaultSubject,
          Accounting: defaultSubject,
        });
    
        setSelectedMarks({
          HomeLanguge: defaultMark,
          English: defaultMark,
          Mathematics: defaultMark,
          MathematicalLit: defaultMark,
          PhysicalScience: defaultMark,
          Accounting: defaultMark,
        });
    
        setSelectedLevels({
          HomeLanguge: defaultLevel,
          English: defaultLevel,
          Mathematics: defaultLevel,
          MathematicalLit: defaultLevel,
          PhysicalScience: defaultLevel,
          Accounting: defaultLevel,
        });
    
        setTotal(0);
        setGeneralMsg('');
      };

      
    
      function displayGeneralMsg(aps){
    
        let message;
        if (aps < 15) {
          message = 'National Senior Certificate';
          setGeneralMsg(message);
       
        } else if (aps >= 15 && aps < 19) {
          message = 'Higher Certificate';
          setGeneralMsg(message);
     
        } else if (aps >= 19 && aps < 23) {
          message = 'Diploma';
          setGeneralMsg(message);
        
        } else {
          message = 'Bachelor Degree';
          setGeneralMsg(message);
          
        }
    
      }
    
    
      
    
    
      
      return (
        <div className='mainSection'>
          <div className='headingWrapper'>
            <h1 className='heading'>APS Score calculator</h1>
            <hr/>
            <p className='paragraph'>Lorem ipsum dolor sit amet consectetur. Blandit sit eget quis orci. In volutpat nunc nisl est ut. Tincidunt mauris felis viverra senectus . Lorem ipsum dolor sit amet consectetur. Blandit sit eget quis orci. In volutpat nunc nisl est ut. Tincidunt mauris felis viverra senectus</p>
          </div>
    
    
          <div className='tableContainer'>
    
              <div className='tableContBtn'>

                <table className='table'>
                <thead>
                  <tr className='columnHeading'>
                    <th className='subject'>Subjects</th>
                    <th className='marks'>Marks</th>
                    <th className='level'>Level</th>
                  </tr>
                </thead>
      
                <tbody>
                  {subjects.slice(0,6).map((subject) => (
                    <tr className='tableDivider' key={subject}>
                      <td className='selectWrapper'>
      
                        <select className='selectSubject'
                          value={selectedSubjects[subject]}
                          onChange={(e) => handleSubjectChange(subject, e)}>
      
                          <option value={defaultSubject}>{defaultSubject}</option>
      
                          {subjects.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                          
                        </select>
              
      
                      </td>
      
                      <td>
                        <select className='selectMarks'
                          value={selectedMarks[subject]}
                          onChange={(e) => handleMarksChange(subject, e)}>
                          <option value={defaultMark}>{defaultMark}</option>
                          {marksOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </td>
      
                      <td className='levelHolder'>
                          <h5>{selectedLevels[subject]}</h5>
                      </td>
                        
                    
                    </tr>
                  ))}
                
                </tbody>
                
                </table>
                
                <div className='btnContainer'>
                    <button className='resultsBtn' onClick={calculateAps}>Calculate</button>
                    <button className='resetBtn' onClick={handleReset} >Reset</button>
                </div>
              </div>
            
    
            <div className='massegeContainer'>
                
                {/* Results heading div apears only when the total value is not 0 */}
                {total !== 0 ? (<div className='resultsHeading'> <h1>Results</h1> </div>) : ''}
            
                {/* Notice massege div apears only when the total value is not 0 */}
                {total !== 0 ?  (<div className='resultHolder'>
                <p>Your APS is <span>{total}</span> and you've obtained <span>{generalMsg}</span> </p>
                    <img src={noticeIcon}/>
                  <p>{total !== 0 ? noticeMsg : ''}</p>
             
                </div>) :'' }
               
            </div>
    
         
    
          </div>
    
    
        </div>
      );
    };

export default ApsCalculator;
