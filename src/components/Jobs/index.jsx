import './index.css';
import Header from '../Header';
import Cookies from 'js-cookie'
import {Navigate} from 'react-router'
import ProfileCard from '../ProfileCard';
import Displayjobs from '../DisplayJobs';
const Jobs = () => {
    const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Navigate to="/login" />
  }
    return (
        <div className="jobs-container">
            
            <Header/>
            <div className='jobs-primary-block'>
            <ProfileCard />
            <Displayjobs />
            </div>
            
        </div>
    )
}
export default Jobs;