const RegisterForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword
}) => (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputName1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName1"
          aria-describedby="nameHelp"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div id="nameHelp" className="form-text">
          Enter your name or username
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="inputPassword6" className="col-form-label">
          Password
        </label>
        <input
          type="password"
          id="inputPassword6"
          className="form-control"
          aria-describedby="passwordHelpInline"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="col-auto">
        <span id="passwordHelpInline" className="form-text">
          Must be 8-20 characters long.
        </span>
      </div>

      <div className="mb-3 form-check mt-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Remember Me
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );

  export default RegisterForm;