import { mappingComponents } from "./mappingComponents";

export const renderComponent = (componentData) => {
  const Component = mappingComponents[componentData.component];
  if (!Component) return null;

  return <Component {...componentData} />;
};
