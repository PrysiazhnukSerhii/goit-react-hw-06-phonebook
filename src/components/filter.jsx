export function Filter({ serchName }) {
  return (
    <form>
      <label>
        Find contacts by name
        <input
          type="text"
          onChange={e => {
            serchName(e.target.value);
          }}
        />
      </label>
    </form>
  );
}
