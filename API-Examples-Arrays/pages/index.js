import dynamic from "next/dynamic";
import "../css/styles.css";

const [Frame] = ["Frame"].map(c =>
  dynamic(() => import("framer").then(mod => mod[c]), { ssr: false })
);

export function MyComponent() {
  return (
    <Frame
      animate={{ background: ["#F05", "#85F", "#0CF"] }}
      transition={{
        duration: 2,
        yoyo: Infinity
      }}
      size={150}
      radius={30}
      background={"#0CF"}
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
