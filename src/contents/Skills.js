export default function skills() {
  const myskills = ["HTML", "CSS", "Javascript", "React", "Wordpress"];
  return (
    <div className="contents skills">
      <h1>My Skills</h1>
      <br />
      <ul>
        {myskills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
