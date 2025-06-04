import {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import Cookies from 'js-cookie'
import './index.css'
import {FaStar} from 'react-icons/fa'
import {FaLocationDot} from "react-icons/fa6"
import {BsBriefcaseFill} from "react-icons/bs"
import {FaExternalLinkAlt} from "react-icons/fa"
import Header from '../Header'

const Jobid = () => {
  const {id} = useParams()
  const [job, setJob] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchJob = async () => {
      const jwtToken = Cookies.get('jwt_token')
      const response = await fetch(`https://apis.ccbp.in/jobs/${id}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      if (response.ok) {
        const data = await response.json()
        setJob(data.job_details)
      } else {
        setError(true)
      }
      setIsLoading(false)
    }
    fetchJob()
  }, [id])

  if (isLoading) {
    return <div className="loading">Loading...</div>
  }

  if (error || !job) {
    return <div className="error">Failed to load job details</div>
  }

  return (
    <><Header />
    <div className='jobid-header'>
    <div className="job-details-container">
      {/* Header */}
      <div className="job-header">
        <img src={job.company_logo_url} alt="company logo" className="job-logo" />
        <div>
          <h2 className="job-title">{job.title}</h2>
          <div className="job-rating">
            <FaStar className="star-icon" /> {job.rating}
          </div>
        </div>
      </div>
      {/* Info Row */}
      <div className="job-info-row">
        <span className="job-info-item">
          <FaLocationDot className="job-info-icon" /> {job.location}
        </span>
        <span className="job-info-item">
          <BsBriefcaseFill className="job-info-icon" /> {job.employment_type}
        </span>
        <span className="job-info-item job-package">
          {job.package_per_annum}
        </span>
      </div>
      <hr />
      {/* Description & Website */}
      <div className="job-desc-row">
        <h3>Description</h3>
        <a
          href={job.company_website_url}
          target="_blank"
          rel="noopener noreferrer"
          className="company-website-link"
        >
          Visit <FaExternalLinkAlt style={{fontSize: '0.9em', marginLeft: 4}} />
        </a>
      </div>
      <p className="job-description">{job.job_description}</p>
      {/* Skills */}
      <h3>Skills</h3>
      <ul className="skills-list">
        {job.skills.map(skill => (
          <li key={skill.name} className="skill-item">
            <img src={skill.image_url} alt={skill.name} className="skill-img" />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
      {/* Life at Company */}
      <h3 className="life-title">Life at Company</h3>
      <div className="life-at-company">
        <p className="life-desc">{job.life_at_company.description}</p>
        <img
          src={job.life_at_company.image_url}
          alt="life at company"
          className="life-img"
        />
      </div>
    </div>
    </div>
    </>
  )
}

export default Jobid