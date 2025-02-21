import Form from '../components/Form';
import Logo from '../assets/images/logo-full.svg';

export default function Home() {
  return (
    <div className="home">
      <img className="home-logo" src={Logo} alt="Logo of Coding Conf" />
      <div className="home-text">
        <p className="home-title">
          Your Journey to Coding Conf 2025 Starts Here!
        </p>
        <p className="home-subtitle">
          Secure your post at next year&apos;s biggest coding conference.
        </p>
      </div>
      <Form />
    </div>
  );
}
