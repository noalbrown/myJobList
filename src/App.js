import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DownIcon from './icons/DownIcon';
import WandIcon from './icons/WandIcon';
import PlusIcon from './icons/PlusIcon';
import './App.css';

const App = (props) => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    axios
      .get('/api/jobList')
      .then((res) => {
        setJobList(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }
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
                <form>
                  <input />
                  <input />
                  <button>Continue</button>
                </form>
              ) : (null
                )}
            </section>
            <section>
              <ul>
                <li>{jobList}</li>
              </ul>
            </section>
          </div>
        ) : (null
          )}
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default mapStateToProps(App);
