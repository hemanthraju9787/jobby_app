import { Link } from 'react-router';
import './index.css';


const JobsCard = props => {
const {JobsData}= props;
const {company_logo_url,employment_type,id,job_description,location,package_per_annum,rating,title,}= JobsData;

return (
  <Link to={`/jobs/${id}`} className="job-card-link">
    <div className="job-card-container">
    <li className="job-card">
      <div className="job-card-header">
        <div className="company-logo-container">
        <img src={company_logo_url} alt="company logo" className="company-logo" />
        <div className="job-details">
          <h1 className="job-title">{title}</h1>
          <p className="job-rating">Rating: {rating}</p>
          </div>
          <div></div>
          </div>
          <div className='job-info-container'>
          <div className='job-info'>
          <p className="job-location">{location}</p>
          <p className="job-employment-type">{employment_type}</p>
        </div>
        <div className="job-footer">
        <p className="job-package">{package_per_annum}</p>
      </div>
      
      </div>
      <hr/>
      </div>
      <h1 className='head-description-card'>Description</h1>
      <div className="job-description">
        <p>{job_description}</p>
      </div>
      
    </li>
    </div>
    </Link>
  );


}
export default JobsCard;