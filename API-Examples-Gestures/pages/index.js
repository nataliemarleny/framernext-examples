import dynamic from "next/dynamic";
import { useState } from "react";
import "../css/styles.css";

const [Frame] = ["Frame"].map(c =>
  dynamic(() => import("framer").then(mod => mod[c]), { ssr: false })
);

export function MyComponent() {
  const [rotate, setRotate] = useState(0);
  const toggleRotate = () => setRotate(rotate + 90);

  return (
    <Frame
      animate={{ rotate }}
      onTap={toggleRotate}
      size={150}
      radius={30}
      background={"#fff"}
    />
  );
}

export default function() {
  return (
    <div id="root">
      <MyComponent />
    </div>
  );
}
