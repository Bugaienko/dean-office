import  axios from 'axios';
import React, { useState, useEffect } from "react";
import  { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const ShowStudents = () => {

	const [students, setStudents] = useState([]);

	const fetchStudents = async () => {
		const result = await axios.get('http://127.0.0.1:8000/api/');
		console.log(result.data);
		setStudents(result.data);
	};

	useEffect(() => {
		fetchStudents();
	}, []);

	const goToDetailMessage = () => {
		alert('Посмотрим детали');
	};
	return (
		<div>
			<div className="main-students-show">
				<div className="row">
				{

					students.map((student, index) => (
						<div className="col-md-4" key={student.id}>
						<Card className='m-3 rounded shadow-lg main-students-show' style={{'width': '20em'}} key={student.id}>
							<Card.Img variant="top" src={student.image}/>
							<Card.Body>
								<Card.Title>{student.name}</Card.Title>
								<Card.Text>{student.email}</Card.Text>
								<Card.Text>{student.phone}</Card.Text>
								<Card.Text>{student.address}</Card.Text>
								<Card.Footer>
									<Link className="btn btn-primary me-2" to={`/${student.id}`}>
										View Detail
									</Link>
								</Card.Footer>

							</Card.Body>
						</Card>
						</div>
					))

				}
				</div>
			</div>
		</div>
	)

};

export default ShowStudents;
