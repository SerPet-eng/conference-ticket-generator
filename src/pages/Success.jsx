import { useNavigate } from 'react-router-dom';
import { usePageContext } from '../context/PageContext';
import Icon from '../assets/images/logo-full.svg';
import TicketSVG from '../components/Ticket';

export default function Success() {
  const { values, setFile, setError, setValues, setErrorForm } =
    usePageContext();
  // const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleReset = () => {
    setFile(null);
    setError('');
    setValues({
      full_name: '',
      email: '',
      github_name: '',
    });
    setErrorForm('');
    navigate('/');
  };

  return (
    <div className="success">
      <img className="success-logo" src={Icon} alt="Code Conf Logo" />
      <p className="success-title">
        Congrats, <span className="success-name">{values.full_name}!</span> Your
        ticket is ready.
      </p>
      <p className="success-subtitle">
        We&apos;ve emailed your ticket to{' '}
        <span className="success-email">{values.email}</span> and will send
        updates in the run-up to the event.
      </p>

      <TicketSVG />

      <div className="success-buttons">
        <p>Generate More Tickets!</p>
        <button className="success-button" onClick={handleReset}>
          Go Back
        </button>
      </div>
    </div>
  );
}
