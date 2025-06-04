import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import './index.css'

const ProfileCard = () => {
  const [profile, setProfile] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchProfile = async () => {
      const jwtToken = Cookies.get('jwt_token')
      try {
        const response = await fetch('https://apis.ccbp.in/profile', {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        })
        if (response.ok) {
          const data = await response.json()
          setProfile(data.profile_details)
        } else {
          setError(true)
        }
      } catch (error) {
        setError(true)
      }
      setIsLoading(false)
    }
    fetchProfile()
  }, [])

  if (isLoading) {
    return <div className="profile-loader">Loading...</div>
  }

  if (error || !profile) {
    return <div className="profile-error">Failed to load profile</div>
  }

  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <div className="profile-card-container-2">
          <img
            src={profile.profile_image_url}
            alt="profile"
            className="profile-image"
          />
          <h2 className="profile-name">{profile.name}</h2>
          <p className="profile-bio">{profile.short_bio}</p>
        </div>
      </div>
      <hr />
      <div className="employment-box">
        <h4>Type of Employment</h4>
        <label className="checkbox-label">
          <input type="checkbox" />
          <span>Full Time</span>
        </label>
        <label className="checkbox-label">
          <input type="checkbox" />
          <span>Part Time</span>
        </label>
        <label className="checkbox-label">
          <input type="checkbox" />
          <span>Freelance</span>
        </label>
        <label className="checkbox-label">
          <input type="checkbox" />
          <span>Internship</span>
        </label>
      </div>
      <hr />
      <div className="salary-box">
        <h4>Salary Range</h4>
        <label className="radio-label">
          <input type="radio" name="salary" />
          <span>10 LPA and above</span>
        </label>
        <label className="radio-label">
          <input type="radio" name="salary" />
          <span>20 LPA and above</span>
        </label>
        <label className="radio-label">
          <input type="radio" name="salary" />
          <span>30 LPA and above</span>
        </label>
        <label className="radio-label">
          <input type="radio" name="salary" />
          <span>40 LPA and above</span>
        </label>
      </div>
    </div>
  )
}

export default ProfileCard