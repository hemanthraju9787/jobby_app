import './index.css';
import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import BeatLoader from 'react-spinners/BeatLoader'
import JobsCard from '../JobsCard';

const Displayjobs = () => {
    const [JobsList, setJobsList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getJobs = async () => {
      const apiUrl = 'https://apis.ccbp.in/jobs'
      const jwtToken = Cookies.get('jwt_token')
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      }
      const response = await fetch(apiUrl, options)
      if (response.ok === true) {
        const fetchedData = await response.json()
        const formattedData = fetchedData.jobs.map(job=> ({
          company_logo_url:job.company_logo_url,
          employment_type: job.employment_type,
            id: job.id,
            job_description: job.job_description,
            location: job.location,
            package_per_annum: job.package_per_annum,
            rating: job.rating,
            title: job.title,
        }))
        setJobsList(formattedData)
        setIsLoading(false)
      }
    }
    getJobs()
  }, [])
const renderJobsList = () => {
    return (
      <div>
        
        <ul className="products-list">
          {JobsList.map(job => (
            <JobsCard JobsData={job} key={job.id} />
          ))}
        </ul>
      </div>
    )
  }
   const renderLoader = () => (
    <div className="loading-container">
      <BeatLoader color="#7032a5" />
    </div>
  )

  return <>{isLoading ? renderLoader() : renderJobsList()}</>
}
export default Displayjobs;