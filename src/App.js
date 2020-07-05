import React from 'react';
import './App.css';
import house from './Assets/House.JPG';
import one from './Assets/1.svg';
import two from './Assets/2.svg';
import area from './Assets/area.svg';

function App() {
  return (
    <div >
      <div className="container-fluid p-0">
        <img src={house} className="img-fluid" />
        <div className="intro-text col-sm-4 col-md-5 col-lg-4 col-xl-4"> 1 person purchased this </div>
      </div>
      <div className='container  mt-5'>
        <div className="row">
          <div className="col-sm-3 col-md-3 col-lg-2 col-xl-2">
            <h4 className='sub-font-color'>Build cost</h4>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-4 col-xl-4">
            <h4 className='main-color-font'> 5,747,856</h4>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 sub-font-color id">
            <h4> ID 4231 </h4>
          </div>
        </div>
        <h2 className='main-color-font mt-3 ' > 4 Bedroom Maisonette </h2>
        <div className='mt-4 mb-5 '>
          <div className="row">
            <div className="col-sm-3 col-md-2 col-lg-1 col-xl-1 main-color-font ">
              <img src={one} /> 4
          </div>
            <div className="col-sm-3 col-md-2 col-lg-1 col-xl-1 main-color-font ">
              <img src={two} /> 2
          </div>
            <div className="col-sm-6 col-md-2 col-lg-2 col-xl-2 main-color-font ">
              <img src={area} /> 238 m²
          </div> 
          </div>
        </div>
        <div>
          <h5 className='sub-font-color mb-4' > ADD ADDITIONAL MODULE <div className='circle ml-3'>i</div></h5>
        </div>
       
      <div>
      <select className='select main-color-font col-12 fluid pt-3 pb-3 mb-5'>
      <option value="volvo">Select</option>
       <option value="volvo">First additional module</option>
        <option value="saab">Second aditional module</option>
        <option value="opel">Third additional module</option>
        <option value="audi">Fourth additional module</option>
      </select>
      </div>

      <div>
        <h1 className='main-color-font mb-5' >You'll get</h1>
        <div className="row mb-4">
          <div className="col-1 ml-4  ">
            <span className='circle'>&#10003;</span>
          </div>
            <div className="col-10 bg-succcess sub-font-color ">
            <h4>Architectural drawings in PDF format</h4>
          </div> 
          </div>

          <div className="row mb-4">
          <div className="col-1 ml-4  ">
            <span className='circle'>&#10003;</span>
          </div>
            <div className="col-10 bg-succcess sub-font-color ">
            <h4>Bills of material and labour with budget <br/>costs
           </h4>
          </div> 
          </div>

          <div className="row mb-4">
          <div className="col-1 ml-4  ">
            <span className='circle'>&#10003;</span>
          </div>
            <div className="col-10 bg-succcess sub-font-color ">
            <h4>Access to a project management tool to <br/>help you manage your build
           </h4>
          </div> 
          </div>

          <div className="row mb-4">
          <div className="col-1 ml-4  ">
            <span className='circle'>&#10003;</span>
          </div>
            <div className="col-10 bg-succcess sub-font-color ">
            <h4>All engineering drawings
           </h4>
          </div> 
          </div> 

          <div className="row mb-4">
          <div className="col-1 ml-4  ">
            <span className='circle'>&#10003;</span>
          </div>
            <div className="col-10 sub-font-color ">
            <h4>Access to Inuua verified suppliers and  <br/> contractors
           </h4>
          </div> 
          </div>
          <h5 className='sub-font-color mt-5 mb-3'>PLAN PRICE</h5>
          <h1 className='main-color-font mb-5'>Ksh 20,000</h1>
      </div>

      </div>

    </div>
  );
}

export default App;
