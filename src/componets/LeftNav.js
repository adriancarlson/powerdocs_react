import { Col } from 'react-bootstrap';

const LeftNav = () => {
	return (
		<Col lg='2' className='d-none d-lg-block border-end'>
			<div className='accordion accordion-flush sticky-top sticky-offset-leftnav' id='accordion-left-nav'>
				<div className='accordion-item'>
					<h2 className='accordion-header' id='accordion-left-nav-headingOne'>
						<button
							className='accordion-button collapsed fw-semibold'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#accordion-left-nav-collapseOne'
							aria-expanded='false'
							aria-controls='accordion-left-nav-collapseOne'
						>
							Every Day
						</button>
					</h2>
					<div id='accordion-left-nav-collapseOne' className='accordion-collapse collapse' aria-labelledby='accordion-left-nav-headingOne' data-bs-parent='#accordion-left-nav'>
						<div className='list-group list-group-flush small'>
							<a href='every_day_common_start_page_searches.html' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Common Start Page Searches
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Attendance Letters
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Transferring Out Students
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								All Demo Data Instructions
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Importing Test Scores
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Submitting Staff Change
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Student Passwords
							</a>
						</div>
					</div>
				</div>
				<div className='accordion-item'>
					<h2 className='accordion-header' id='accordion-left-nav-headingTwo'>
						<button
							className='accordion-button collapsed fw-semibold'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#accordion-left-nav-collapseTwo'
							aria-expanded='false'
							aria-controls='accordion-left-nav-collapseTwo'
						>
							Start of Year
						</button>
					</h2>
					<div id='accordion-left-nav-collapseTwo' className='accordion-collapse collapse' aria-labelledby='accordion-left-nav-headingTwo' data-bs-parent='#accordion-left-nav'>
						<div className='list-group list-group-flush small '>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Start of Year Guide
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Manually Enrolling New Students
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Setting up Attendance Tracker
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								State Student Number (UUID) Help
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Exporting Student/Staff Numbers for Photographer
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Importing Photos
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								NCEA Data Collection
							</a>
						</div>
					</div>
				</div>
				<div className='accordion-item'>
					<h2 className='accordion-header' id='accordion-left-nav-headingThree'>
						<button
							className='accordion-button collapsed fw-semibold'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#accordion-left-nav-collapseThree'
							aria-expanded='false'
							aria-controls='accordion-left-nav-collapseThree'
						>
							End of Year
						</button>
					</h2>
					<div id='accordion-left-nav-collapseThree' className='accordion-collapse collapse' aria-labelledby='accordion-left-nav-headingThree' data-bs-parent='#accordion-left-nav'>
						<div className='list-group list-group-flush small '>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Setup Years and Terms
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Elementary Live Side Scheduling
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Elementary Transcript
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								PowerScheduler: Load Process
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								PowerScheduler: Build Process
							</a>
						</div>
					</div>
				</div>
				<div className='accordion-item'>
					<h2 className='accordion-header' id='accordion-left-nav-headingFour'>
						<button
							className='accordion-button collapsed fw-semibold'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#accordion-left-nav-collapseFour'
							aria-expanded='false'
							aria-controls='accordion-left-nav-collapseFour'
						>
							Running Reports
						</button>
					</h2>
					<div id='accordion-left-nav-collapseFour' className='accordion-collapse collapse' aria-labelledby='accordion-left-nav-headingFour' data-bs-parent='#accordion-left-nav'>
						<div className='list-group list-group-flush small '>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Report Cards
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Elementary Transcript
							</a>
						</div>
					</div>
				</div>
				<div className='accordion-item'>
					<h2 className='accordion-header' id='accordion-left-nav-headingFive'>
						<button
							className='accordion-button collapsed fw-semibold'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#accordion-left-nav-collapseFive'
							aria-expanded='false'
							aria-controls='accordion-left-nav-collapseFive'
						>
							PowerTeacher Pro
						</button>
					</h2>
					<div id='accordion-left-nav-collapseFive' className='accordion-collapse collapse' aria-labelledby='accordion-left-nav-headingFive' data-bs-parent='#accordion-left-nav'>
						<div className='list-group list-group-flush small '>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Display Homeroom at Top
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Recalculate Final Grades Process
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Kindergarten Standards
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Catholic Social Growth Work/Study Habits Standards
							</a>
						</div>
					</div>
				</div>
				<div className='accordion-item'>
					<h2 className='accordion-header' id='accordion-left-nav-headingSix'>
						<button
							className='accordion-button collapsed fw-semibold'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#accordion-left-nav-collapseSix'
							aria-expanded='false'
							aria-controls='accordion-left-nav-collapseSix'
						>
							Parent Access
						</button>
					</h2>
					<div id='accordion-left-nav-collapseSix' className='accordion-collapse collapse' aria-labelledby='accordion-left-nav-headingSix' data-bs-parent='#accordion-left-nav'>
						<div className='list-group list-group-flush small '>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Access Accounts/Parent Portal
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Parent Portal Instructions
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Resetting Parent Password
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								PowerSchool Mobile App
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Accessing Reports in the Parent Portal
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								Importing Photos
							</a>
							<a href='#' className='list-group-item list-group-item-action list-group-item-light ps-4 rounded-2 border-bottom-0'>
								NCEA Data Collection
							</a>
						</div>
					</div>
				</div>
			</div>
		</Col>
	);
};
export default LeftNav;
