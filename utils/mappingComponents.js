import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import News from "@/components/News";
import { renderComponent } from "./renderComponent";


export const mappingComponents = {
  "container-header": ({ children, style }) => (
    <Header children={children} style={style} />
  ),
  "container-logo": ({ path, style }) => <Logo path={path} style={style} />,
  "container-body": ({ children, style }) => (
    <div className="container-body" style={style}>
      {children?.map((child, index) => (
        <div key={index}>{renderComponent(child)}</div>
      ))}
    </div>
  ),
  "container-news-notices": ({ style }) => <News style={style} />,
  "container-basic": ({ children, style }) => (
    <div style={style}>
      {children?.map((child, index) => (
        <div key={index}>{renderComponent(child)}</div>
      ))}
    </div>
  ),
  "container-action": ({ text, path, onPress }) => (
    <Button onPress={onPress} path={path} text={text} />
  ),
  "container-footer-default": ({ style, text }) => (
    <Footer style={style} text={text} />
  ),
};
