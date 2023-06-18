import { formatDate } from './DateFormatter'

const today = new Date();

export default function Avatar() {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    return (
      <>
      <img
        className="avatar"
        src={avatar}
        alt={description}
      />
      <h1>{description}'s To Do List for { formatDate(today) }</h1>
      </>
    );
  }