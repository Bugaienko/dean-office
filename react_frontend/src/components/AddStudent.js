import  axios from 'axios';
import React, { useState} from "react";
import { useNavigate } from "react-router-dom";

const AddStudents = () => {
	let navigate = useNavigate();

	const [image, setImage] = useState(null);
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [address, setAddress] = useState(null);
	const [phone, setPhone] = useState(null);

	const addNewStudent = async () => {
		let formField = new FormData()
		formField.append('name', name)
		formField.append('email', email)
		formField.append('address', address)
		formField.append('phone', phone)
		if (image !== null) {
			formField.append('image', image)
		}
		await axios({
			method: 'post',
			url: 'http://127.0.0.1:8000/api/',
			data: formField
		}).then(response => {
			console.log(response.data);
			navigate('/');
		});
	};

	return (
		<div className="container mt-4">
			<div className="container">
				<div className="w-50 mx-auto shadow p-3">
					<h2 className="text-center mb-4">Add New Student</h2>
					<div className="form-group mb-4">
						<label className="text-align: left !important mb-2">Image: </label>
						<input
							type="file"
							className="form-control"
							name="image"
							onChange={(e) => setImage(e.target.files[0])}
						/>
					</div>
					<div className="form-group  mb-4">
						<label className="text-start mb-2">Enter Student Name: </label>
						<input
							type="text"
							className="form-control form-control-sm"
							placeholder="Name"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="form-group  mb-4">
						<label className="mb-2">Enter Student Email: </label>
						<input
							type="email"
							className="form-control form-control-sm"
							placeholder="Email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group  mb-4">
						<label className="mb-2">Enter Student Address: </label>
						<input
							type="text"
							className="form-control form-control-sm"
							placeholder="Address"
							name="address"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label className="mb-2">Enter Student Phone: </label>
						<input
							type="text"
							className="form-control form-control-sm"
							placeholder="Phone"
							name="phone"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
					<p className="text-center !important mt-5">
						<button
						className="btn btn-primary btn-block"
						onClick={addNewStudent}
						>
							Add Student
						</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default AddStudents;
