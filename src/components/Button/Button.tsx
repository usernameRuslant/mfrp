const Button = () => {
  const handleClick = () => {
    console.log(" I'm button ");
  };
  return <button onClick={handleClick}>Button</button>;
};

export default Button;

// return <button onClick={() => console.log("Clicked!")}>Click me!</button>;
