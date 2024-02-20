function Consultation() {
    return (
      <>
        <center>
          <form>
            <div className="mb-3">
              <label htmlFor="user" className="form-group text">
                User Name
              </label>
              <input type="text" className="form-control w-50 inp" id="user" />
            </div>
            <div className="mb-3">
              <label htmlfor="exampleInputEmail1" className="form-group text">
                Email address
              </label>
              <input
                type="email"
                className="form-control w-50 inp"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="from-group text">
                Password
              </label>
              <input
                type="password"
                classNameName="form-control w-50 inp"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlfor="u1" className="form-group text">
                image-url
              </label>
              <input
                type="url"
                className="form-control w-50 inp"
                id="u1"
                aria-describedby="emailHelp"
              />
            </div>
  
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
          </form>
        </center>
      </>
    );
  }
  export default Consultation;
  