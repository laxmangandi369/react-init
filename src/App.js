// import logo from './logo.svg';
import './App.css';
// import Bio from './Bio.js'
import Avatar from './Avatar';
import { MyCustomAvatar } from './Avatar';

function Profile() {
  return (
    <>

      <div>
        {/* <Bio/> */}
        <Avatar />
      </div>
    </>
  );
}

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

// export default function Gallery() {
//   return (
//     <>
//     <section style={{
//       backgroundColor: 'black',
//       color: 'pink'
//     }}>
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//       <br />
//       <br />
//       <Profile />
//       <Profile />
//       <Profile />
//     </section>

//     <br/>
//     <br/>
//     <div style={person.theme}>
//     <h1>{person.name}'s Todos</h1>
//     <img
//       className="avatar"
//       src="https://i.imgur.com/7vQD0fPs.jpg"
//       alt="Gregorio Y. Zara"
//     />
//     <ul>
//       <li>Improve the videophone</li>
//       <li>Prepare aeronautics lectures</li>
//       <li>Work on the alcohol-fuelled engine</li>
//     </ul>
//   </div>
//   </>
//   );
// }

export default function profile() {
  return (
    <div>
      <MyCustomAvatar
        size={300}
        person={{
          name: 'kstduko dsruhashi',
          imageId: 'YfeOqp2'
        }}
      />
      <br />
      <MyCustomAvatar
        size={250}
        person={{
          name: 'Aklilu Lemma',
          imageId: 'OKS67lh'
        }}
      />
      <br />
      <MyCustomAvatar
        size={200}
        person={{
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </div>
  );
}
