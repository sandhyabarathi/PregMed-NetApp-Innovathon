import React from 'react'
import doctor1 from '../assets/images/doctor1.jpeg'
import doctor2 from '../assets/images/doctor2.jpeg'
import doctor3 from '../assets/images/doctor3.jpeg'


function Doctor() {
  return (
    <div className="container" data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset={100}>
  <div id="section1" className="container-fluid bg-primary text-white rounded">
    <h1>Doctor 1</h1>
    <img src={doctor1} className="rounded" ></img>
    <table className="table table-borderless text-white">
      <tbody>
        <tr>
          <td> <h2> Name: </h2></td>
          <td> <h2> Experience: </h2></td>
          <td> <h2> Degree</h2></td>
        </tr>
        <tr>
          <td>Suresh </td>
          <td>6 + Years of experience ( Family Doctor)</td>
          <td>MBBS</td>
        </tr>
      </tbody>
    </table>
    <button className="p-2 m-2 rounded bg-info"><a href="https://freshspar.me/" className="text-white"> Contact </a></button>
    <button className="bg-danger rounded p-2 btn-lg m-2"><a href="https://rzp.io/l/yIFQdZJNdK">Pay Now</a></button>
  </div>
  <br />
  <div id="section1" className="container-fluid bg-dark text-white rounded" style={{padding: '70px 20px'}}>
    <h1>Doctor 2</h1>
    <img src={doctor2} className="rounded"></img>
    <table className="table table-borderless text-white">
      <tbody>
        <tr>
          <td> <h2> Name: </h2></td>
          <td> <h2> Experience: </h2></td>
          <td> <h2> Degree</h2></td>
        </tr>
        <tr>
          <td>Dr.Sowmiya</td>
          <td>5 + Years of experience (Dentist )</td>
          <td>BDS</td>
        </tr>
        <tr>
          <th scope="row" />
        </tr>
      </tbody>
    </table>
    <button className="p-2 m-2 rounded bg-info"><a href="https://freshspar.me/" className="text-white"> Contact </a></button>
    <button className="bg-danger rounded p-2 btn-lg m-2"><a href="https://rzp.io/l/Z9vUwqH"> Pay Now</a></button>
  </div>
  <br />
  <div id="section1" className="container-fluid bg-success text-white rounded" style={{padding: '70px 20px'}}>
    <h1>Doctor 3</h1>
    <img src={doctor3} className="rounded"></img>
    <table className="table table-borderless text-white">
      <tbody>
        <tr>
          <td> <h2> Name: </h2></td>
          <td> <h2> Experience: </h2></td>
          <td> <h2> Degree</h2></td>
        </tr>
        <tr>  
          <td>Dr .Shalini </td>
          <td>4 + Years of experience ( Family Doctor)</td>
          <td>BSMS</td>
        </tr>
        <tr>
          <th scope="row" />
        </tr>
      </tbody>
    </table>
    <button className="p-2 m-2 rounded bg-info"><a href="https://freshspar.me/" className="text-white"> Contact </a></button>
    <button className="bg-danger rounded p-2 btn-lg m-2"><a href="https://rzp.io/l/Lj6orOn301"> Pay Now </a></button>
  </div>
</div>

  )
}

export default Doctor