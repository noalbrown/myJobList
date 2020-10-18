import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DownIcon from './icons/DownIcon';
import WandIcon from './icons/WandIcon';
import PlusIcon from './icons/PlusIcon';
import TrashIcon from './icons/TrashIcon';
import './App.css';

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [jobList, setJobList] = useState([]);
  const [jobTitleInput, setJobTitleInput] = useState('');
  const [companyNameInput, setCompanyNameInput] = useState('');

  useEffect(() => {
    axios
      .get('/api/jobList')
      .then((res) => {
        setJobList(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  const deleteJob = (id) => {
    axios
      .delete(`/api/deleteJob/${(id)}`)
      .then((res) => {
        setJobList(res.data)
        setToggle4(false)
        setToggle3(false)
      })
      .catch(error => console.log(error))
  }

  const addJob = () => {
    axios
      .post('/api/addJob', {
        companyName: companyNameInput,
        jobTitle: jobTitleInput
      })
      .then((res) => {
        setJobList(res.data)
      })
      .catch((err) => {
        alert("Upload Error");
      });
  };

  console.log(companyNameInput)
  return (
    <div className="App">
      <header>
        <button id='app-button' onClick={() => { setToggle(!toggle) }}><pre><DownIcon height='20px' width='20px' color='gray'></DownIcon>     Pathrise Web Developer Test</pre></button>
      </header>
      <div className='toggle1-box'>
        {toggle ? (
          <div>
            <section>
              <div className='wishlist-box'>
                <p><WandIcon color='gray'></WandIcon></p>
                <div className='wishlist-inner'>
                  <h2>WISHLIST</h2>
                  <h6>{jobList.length} JOBS</h6>
                </div>
              </div>
              <button className='add-button' onClick={() => { setToggle2(!toggle2) }}><PlusIcon color='gray' height="30px" width='30px'></PlusIcon></button>
              {toggle2 ? (
                <div className='form-box'>
                  <form className='add-form' onSubmit={addJob}>
                    <label>Add a job</label>
                    <input
                      name='companyName'
                      type='text'
                      value={companyNameInput}
                      placeholder='Company Name'
                      onChange={e => setCompanyNameInput(e.target.value)} />
                    <input
                      name='jobTitle'
                      type='text'
                      value={jobTitleInput}
                      placeholder='Job Title'
                      onChange={e => setJobTitleInput(e.target.value)} />
                    <button type='submit'>Continue</button>
                  </form>
                </div>
              ) : (null
                )}
            </section>
            <section>
              {jobList.map((el, i) =>
                <ul key={i} onClick={() => { setToggle3(!toggle3) }} id='jobs'>
                  <li>{el.companyName}</li>
                  <li>{el.jobTitle}</li>
                  {toggle3 ? (
                    <button
                      onClick={() => { setToggle4(!toggle4) }}><TrashIcon></TrashIcon>
                    </button>
                  ) : (null
                    )}
                  {toggle4 ? (
                    <div>
                      <h4>Delete Job</h4>
                      <p>Are you sure you want to delete this job?</p>
                      <div>
                        <button onClick={() => deleteJob(el.id)}>Delete</button>
                        <button onClick={() => { setToggle3(!toggle3) || setToggle4(!toggle4) }}>Cancel</button>
                      </div>
                    </div>
                  ) : (null
                    )}
                </ul>
              )}
            </section>
          </div>
        ) : (null
          )}
      </div>
    </div>
  );
}

export default App;
