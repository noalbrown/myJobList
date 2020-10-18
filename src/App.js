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
  const [jobTitleInput, setJobTitle] = useState('');
  const [companyNameInput, setCompanyName] = useState('');

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
      .post('/auth/addJob', {
        companyNameInput,
        jobTitleInput
      })
      .then((res) => {
        setJobList(res.data)
      })
      .catch((err) => {
        alert("Upload Error");
      });
  };

  const handleJobTitleInput = (event) => {
    const { value } = event.target;
    setJobTitle(value);
  };

  const handleCompanyNameInput = (event) => {
    const { value } = event.target;
    setCompanyName(value);
  };

  console.log(jobList)
  return (
    <div className="App">
      <button onClick={() => { setToggle(!toggle) }}><DownIcon></DownIcon>Pathrise Web Developer Test</button>
      <div>
        {toggle ? (
          <div>
            <section>
              <h2><WandIcon></WandIcon>WISHLIST</h2>
              <h6>Job Count Bonus</h6>
              <button onClick={() => { setToggle2(!toggle2) }}><PlusIcon></PlusIcon></button>
              {toggle2 ? (
                <form onSubmit={addJob}>
                  <input
                    name='companyName'
                    type='text'
                    value={companyNameInput}
                    placeholder='Company Name'
                    onChange={handleCompanyNameInput} />
                  <input
                    name='jobTitle'
                    type='text'
                    value={jobTitleInput}
                    placeholder='Job Title'
                    onChange={handleJobTitleInput} />
                  <button type='submit'>Continue</button>
                </form>
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
