export default function Main({ selectedBreed, breedImage }) {
  return (
    <main className="main col-9">
      <div className="alert alert-primary">Selected Breed: {selectedBreed}</div>
      <img src={breedImage} alt={selectedBreed} />
    </main>
  );
}
