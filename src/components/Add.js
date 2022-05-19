import React from "react";

const Add = () => {
	return (
		<div className="container">
			<h1 className="display-3 my-5 text-center">Add Student</h1>
			<div className="row">
				<div className="col-md-6 shadow mx-auto p-5">
					<form>
						<div className="mb-3">
							<input type="text" className="form-control" placeholder="Name" />
						</div>
						<div className="mb-3">
							<input
								type="email"
								className="form-control"
								placeholder="Email"
							/>
						</div>
						<div className="mb-3">
							<input
								type="number"
								className="form-control"
								placeholder="Phone Number"
							/>
						</div>
						<div className="mb-3">
							<input
								type="submit"
								value="Add Student"
								className="btn btn-secondary"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Add;
