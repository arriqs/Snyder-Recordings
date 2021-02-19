import { useForm } from "react-hook-form";

// true -> input is valid
// false -> input is NOT valid
const firstLetterUpper = iText => {
  if (!iText) { return true; }

  if (iText[0].toUpperCase() === iText[0]) {
    return true;
  }

  return false;
  // return iText[0].toUpperCase() === iText[0];
}

const PortfolioForm = ({onSubmit}) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="street">First Name</label>
        <input
          ref={register({required: true})}
          name="firstName"
          type="text"
          className="form-control"
          id="firstName"/>
          { errors.firstName &&
            <p variant='danger'>
              { errors.firstName?.type === "required" && <p>First Name is required</p> }
            </p>
          }
      </div>

      <div className="form-group">
        <label htmlFor="description">Last Name</label>
        <textarea
          ref={register({required: true, minLength: 10})}
          name="textbox"
          rows="5"
          type="text"
          className="form-control"
          id="textbox">
        </textarea>
        { errors.textbox &&
          <p variant="danger">
            { errors.textbox?.type === "required" && <p>Description is required</p> }
            { errors.textbox?.type === "minLength" && <p>Give us a hint: please write at least a couple of words</p> }
          </p>
        }
      </div>
      <button
        type="submit"
        className="btn btn-primary">Create
      </button>
    </form>
  )
}

export default PortfolioForm;
