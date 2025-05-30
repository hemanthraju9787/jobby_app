import './index.css'
import Header from '../Header'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-content">
        <div>
            <h1 className="home-heading">Find The Jobs That <br/>
            Fits Your Life</h1>
            <p className='home-para'>Milions of people are searching for the jobs, salary<br/>
            information, company reivews. Find the job that fits your<br/>
            abilities and potential.</p>
            <div className='home-find-jobs-button-container'>
            <Link to="/jobs">
              <button className="find-jobs-button">Find jobs</button>
            </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
