const user = {
  name: 'Hello World!',
  imageUrl: 'https://www.picturepunches.com/images/templates/322.jpg',
  imageSize: 150,
};

export default function App() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}