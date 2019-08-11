import dynamic from "next/dynamic";
import "../css/styles.css";

const [Frame, Scroll] = ["Frame", "Scroll"].map(c =>
  dynamic(() => import("framer").then(mod => mod[c]), { ssr: false })
);

export function MyComponent() {
  return (
    <Scroll width={150} height={150} radius={30}>
      <Frame height={70} radius={20} width={150} background={"#fff"} />
      <Frame top={80} height={70} width={150} radius={20} background={"#fff"} />
      <Frame
        top={160}
        height={70}
        width={150}
        radius={20}
        background={"#fff"}
      />
    </Scroll>
  );
}

export default function() {
  return (
    <div id="root">
      <MyComponent />
    </div>
  );
}
