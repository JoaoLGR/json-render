import { redirect } from "next/navigation";

export default function Button({ text, path, onPress }) {
  return (
    <button
      onClick={() => {
        onPress;
        redirect(path.url);
      }}
    >
      {text}
    </button>
  );
}
