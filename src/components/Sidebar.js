export default function Sidebar({ allBreeds, selectedBreed }) {
  return (
    <aside className="sidebar col-3">
      <h2>Dogs List</h2>
      <ul>
        {allBreeds.map((item) => (
          <li key={item} className={selectedBreed === item ? "selected" : ""}>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
