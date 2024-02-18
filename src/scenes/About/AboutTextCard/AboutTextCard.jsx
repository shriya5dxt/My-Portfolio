import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Shriya Dikshith!</span>
        <br />
        As an Analytics and Data Science professional with diverse experience across industries in the USA and India,{' '}
        I have honed my expertise in driving 
        efficiency and innovation through data.
        <br />
        <br />
        I have a Bachelor's degree in Electrical and Electronics Engineering and
        <br />
        Master's degree in Information Systems from Northeastern Univeristy.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
