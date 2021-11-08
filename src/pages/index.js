import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";

const Foo = () => <></>;
const Works = () => <div foo={{ foo: "foo" }}>Hello</div>;
const Crashes = () => <div foo={{ foo: <Foo /> }}>Hello</div>;

const Page = () => (
  <pre>
    {reactElementToJSXString(Works())}
    {/* {reactElementToJSXString(Crashes())} */}
  </pre>
);

export default Page;
