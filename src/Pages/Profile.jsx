const person = [
  {
    name: "Lasha",
    surname: "Gamgoneishvili",
    mail: "Gamgoneishvili.gmail@com",
  },
];

export default function Profile() {
  return (
    <>
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
        <input type="password" placeholder="Repeat New Password" />

        <button>Save</button>
      </form>
    </>
  );
}
