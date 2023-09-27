import { renderComponent } from "@/utils/renderComponent";

export default function Header({ children, style }) {

  return (
    <header style={style}>
      {children?.map((child, index) => (
        <div key={index}>{renderComponent(child)}</div>
      ))}
    </header>
  );
}
