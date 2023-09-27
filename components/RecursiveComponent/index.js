"use client";

import { renderComponent } from "@/utils/renderComponent";


export function RecursiveComponent({ componentData }) {
  return (
    <div style={{
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'slate-500',
      width: '100%'
    }}>
      {componentData.root.map((data, index) => (
        <div style={{
          width: '20px',
          backgroundColor: '#34D399',
          color: 'white',
        }} key={index}>
          {renderComponent(data)}
        </div>
      ))}
    </div>
  );
}
