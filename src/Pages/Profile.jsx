import logo from "../Assets/2815428.png";

const person = [
  {
    name: "Lasha",
    surname: "Gamgoneishvili",
    mail: "Gamgoneishvili@gmail.com",
  },
];

export default function Profile() {
  return (
    <div className="Profile">
      <div className="image-box">
        <img src={logo} alt="Person-logo" />
      </div>
      {person.map((person, index) => {
        return (
          <ul key={index}>
            <li>{person.name}</li>
            <li>{person.surname}</li>
            <li>{person.mail}</li>
          </ul>
        );
      })}
      <form className="form">
        <input type="password" placeholder="New Password" />
        <input type="password" placeholder="Confirm New Password" />
        <button>Save</button>
      </form>
    </div>
  );
}
