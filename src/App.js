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
    <section>
      <h1>Amazing scientists</h1>
      <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson" />
      <button>click me</button>
      <br/>
      <br/>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
