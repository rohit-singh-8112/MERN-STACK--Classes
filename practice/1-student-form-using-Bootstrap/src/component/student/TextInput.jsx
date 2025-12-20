

const TextInput = () => {
    return(
      <div className="m-3">
        <div className="mb-2">
          <label className="form-label text-default">Full Name</label>
          <input type="text" className="form-control ms-2"placeholder="Enter your full name" />
        </div>
        <div className="mb-2">
          <label className="form-label text-default">Email address</label>
          <input type="email" className="form-control ms-2"placeholder="Enter your email" />
        </div>
        <div className="mb-2">
          <label className="form-label text-default">Age</label>
          <input type="number" className="form-control ms-2"placeholder="Enter your age" />
        </div>
      </div>
    );
}
export default TextInput;
