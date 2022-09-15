export const SECTIONS = [
	{
		id: 0,
		article_id: 0,
		header: 'Compound Searches',
		body: (
			<>
				<p>
					Use a compound search to combine two or more searches into one and perform multiple searches simultaneously. Separate the search commands with a <strong>semicolon (;) </strong>, which means
					“and.”
				</p>
				<p>
					For Example: <strong> first_name= Adrian;grade_level=9</strong>
				</p>
			</>
		),
	},
	{
		id: 1,
		article_id: 0,
		header: 'Searching for Inactive Students',
		body: (
			<>
				<p>
					You can also use a <strong> forward slash (/) </strong> to search for inactive, graduated, pre-registered, & transferred-out students.
				</p>
				<p>
					For Example: <strong> /enroll_status=1</strong> for inactive students
				</p>
			</>
		),
	},
	{
		id: 2,
		article_id: 0,
		header: 'Searching for Active and Pre-registered Students',
		body: (
			<>
				<p>You can also use a combination of the forward slash and compound search to search for active & pre-registered students.</p>
				<p>
					For Example: <strong> /enroll_status=0;enroll_status=-1</strong> for active & pre-registered students
				</p>
				<p>
					or: <strong> /enroll_status in -1,0</strong>
				</p>
			</>
		),
	},
	{
		id: 3,
		article_id: 0,
		header: '',
		body: (
			<>
				<div className='container-fluid prnt-remove-float'>
					<div className='row prnt-remove-float'>
						<div className='prnt-remove-float'>
							<table className='table table-light table-striped page-break-before pdf-table'>
								<thead>
									<tr className='table-primary'>
										<th scope='col'>Search Command</th>
										<th scope='col'>Description</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>/enroll_status=0;enroll_status=-1 or /enroll_status in -1,0</th>
										<td>For active &#38; pre-registered students</td>
									</tr>
									<tr>
										<th>/enroll_status=-1</th>
										<td>For preregistered students</td>
									</tr>
									<tr>
										<th>/enroll_status=1</th>
										<td>For inactive students only</td>
									</tr>
									<tr>
										<th>/enroll_status=2</th>
										<td>For transferred-out students</td>
									</tr>
									<tr>
										<th>/enroll_status=3</th>
										<td>For graduated students</td>
									</tr>
									<tr>
										<th>enroll_status=0</th>
										<td>For active students only</td>
									</tr>
									<tr>
										<th>/enroll_status#0</th>
										<td>For any student who is not active</td>
									</tr>
									<tr>
										<th>*birthday=today </th>
										<td>Finds all students whose birthday is today, matching only month and day</td>
									</tr>
									<tr>
										<th>*birthday=5/1</th>
										<td>Find all students whose birthday is May 1</td>
									</tr>
									<tr>
										<th>*birthday&gt;=5/1/10;*birthday &lt;= 5/31/10 </th>
										<td>Find all birthdays in May of 2010</td>
									</tr>
									<tr>
										<th>*as_of=2/1/2013 </th>
										<td>All students in the school that were active as of 2/1/2013</td>
									</tr>
									<tr>
										<th>*not_enrolled_in_period=1 </th>
										<td>All students not enrolled in period 1</td>
									</tr>
									<tr>
										<th>*enrolled_in=541001</th>
										<td>Students in course number 541001</td>
									</tr>
									<tr>
										<th>*enrolled_in=541001.1</th>
										<td>Students in course 541001 section 1</td>
									</tr>
									<tr>
										<th>*not_enrolled_in=541001 </th>
										<td>Students not enrolled in course number 541001</td>
									</tr>
									<tr>
										<th>*has_completed_course=541001 </th>
										<td>Students who have at least one entry of course 541001 on the historical grades screen</td>
									</tr>
									<tr>
										<th>*has_not_completed=541001</th>
										<td>Students who do not have any entries of course 541001 on the historical grades screen</td>
									</tr>
									<tr>
										<th>*cumulative_credit_hours&#60;15 </th>
										<td>Students with less than 15 credit hours on their historical grades screen</td>
									</tr>
									<tr>
										<th>*hours_requested&#60;10 </th>
										<td>Students who have requested more than 10 credit hours</td>
									</tr>
									<tr>
										<th>Alert_Other# </th>
										<td>Students who have other alerts </td>
									</tr>
									<tr>
										<th>Alert_Medical# </th>
										<td>Students who have medical alerts </td>
									</tr>
									<tr>
										<th>Alert_guardian# </th>
										<td>Students who have guardian alerts </td>
									</tr>
									<tr>
										<th>Alert_Discipline# </th>
										<td>Students who have discipline alerts </td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</>
		),
	},
];
