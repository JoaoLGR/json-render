export default function Logo({ path, style }) {
  return (
    <img
      style={style}
      src={path.url}
      alt="Logo"
    //style={{ backgroundImage: `url(${style.background.image})` }}
    />
  );
}
