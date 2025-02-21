import { usePageContext } from '../context/PageContext';
import DropImage from './DropImage';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '../assets/images/icon-info.svg';

export default function Form() {
  const navigate = useNavigate();
  const {
    values,
    setValues,
    errorForm,
    setErrorForm,
    setRandNumber,
    file,
    setError,
    setFile,
    error,
  } = usePageContext();

  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const gitHubRegEx = /^(?!-)[a-zA-Z0-9-]{1,39}(?<!-)$/;

  const handleRandomNumber = () => {
    setRandNumber(() => Math.trunc(Math.random() * 900000));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // File validation
    if (!file) {
      setError('No file attached. Please upload an image.');
      setFile(null);
    } else {
      setError('');
    }

    // Form field validations
    if (!values.full_name.trim()) newErrors.full_name = 'Full name is required';
    if (!values.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegEx.test(values.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!values.github_name.trim()) {
      newErrors.github_name = 'GitHub name is required';
    } else if (!gitHubRegEx.test(values.github_name)) {
      newErrors.github_name = 'Invalid GitHub Username';
    }

    // Update error state
    setErrorForm(newErrors);

    // Prevent submission if there are errors
    if (Object.keys(newErrors).length > 0 || !file) return;

    // Proceed if no errors
    console.log('Form submitted:', values);
    handleRandomNumber();
    navigate('/success', { state: { name: values.full_name } });
  };

  // ✅ Helper function to check if input has an error
  const getInputClass = (fieldName) =>
    errorForm[fieldName] ? 'input-error' : 'input';

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="avatar">
        <p className="avatar-title">Upload Avatar</p>
        <DropImage />
        <small className="avatar-info">
          <img src={InfoIcon} alt="Info Icon" />
          {error ? (
            <p className="error">{error}</p>
          ) : (
            <p>Upload your photo &#40;JPG or PNG, max size: 500kb&#41;</p>
          )}
        </small>
      </div>

      <label className="form-item">
        <span>Full Name</span>
        <input
          type="text"
          name="full_name"
          value={values.full_name}
          onChange={handleChange}
          className={getInputClass('full_name')}
        />
        {errorForm.full_name && (
          <small className="error">{errorForm.full_name}</small>
        )}
      </label>

      <label className="form-item">
        <span>Email Address</span>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className={getInputClass('email')}
        />
        {errorForm.email && <small className="error">{errorForm.email}</small>}
      </label>

      <label className="form-item">
        <span>GitHub Username</span>
        <input
          type="text"
          name="github_name"
          value={values.github_name}
          onChange={handleChange}
          className={getInputClass('github_name')}
        />
        {errorForm.github_name && (
          <small className="error">{errorForm.github_name}</small>
        )}
      </label>

      <button className="form-button" type="submit">
        Generate My Ticket
      </button>
    </form>
  );
}
