import dynamic from "next/dynamic";
import "../css/styles.css";

const [Frame, Page] = ["Frame", "Page"].map(c =>
  dynamic(() => import("framer").then(mod => mod[c]), { ssr: false })
);

export function MyComponent() {
  return (
    <Page width={150} height={150} radius={30}>
      <Frame size={150} radius={30} background={"#fff"} />
      <Frame size={150} radius={30} background={"#fff"} />
      <Frame size={150} radius={30} background={"#fff"} />
    </Page>
  );
}

export default function() {
  return (
    <div id="root">
      <MyComponent />
    </div>
  );
}
