// import logo from './logo.svg';
import './App.css';
// import Bio from './Bio.js'
import Avatar from './Avatar';

function Profile() {
  return (
    <>
    
      <div>
        {/* <Bio/> */}
        <Avatar/>
      </div>
    </>
  );
}

export default function Gallery() {
  return (
    <section  style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
       <ul>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
      <br/>
      <br/>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
