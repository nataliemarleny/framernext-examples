import dynamic from "next/dynamic";
import "../css/styles.css";

const [Frame] = ["Frame"].map(c =>
  dynamic(() => import("framer").then(mod => mod[c]), { ssr: false })
);

export function MyComponent() {
  return (
    <Frame
      animate={{ rotate: 360 }}
      transition={{
        duration: 2,
        loop: Infinity,
        ease: "linear"
      }}
      size={150}
      background={"#fff"}
      radius={30}
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
