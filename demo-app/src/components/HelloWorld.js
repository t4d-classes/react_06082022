// custom functional component
export const HelloWorld = () => {

  // this is not HTML, this is JSX (is not valid JavaScript)
  // JSX is a function call
  // return React.createElement('h1', null, 'Hello, World!')React.createElement('span', null, 'test');
  return (
    <>
      <h1>Hello, World!</h1>
      <span>test</span>
    </>
  );

};