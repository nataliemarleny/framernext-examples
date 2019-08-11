import dynamic from "next/dynamic";
import "../css/styles.css";

const [Frame] = ["Frame"].map(c =>
  dynamic(() => import("framer").then(mod => mod[c]), { ssr: false })
);

export function MyComponent() {
  return (
    <Frame
      drag={true}
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
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
