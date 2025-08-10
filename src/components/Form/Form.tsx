interface OrderFormProps {
  onSubmit: (value: string) => void;
}

const OrderForm = ({ onSubmit }: OrderFormProps) => {
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const form = event.currentTarget;

  //   const formData = new FormData(form);
  //   const username = formData.get('username');

  //   form.reset();
  // };
  const handleSubmit = (formData: FormData) => {
    const username = formData.get('username') as string;
    onSubmit(username);
    console.log('Name:', username);
  };

  return (
    <form action={handleSubmit}>
      <input type="text" name="username" defaultValue="John Doe" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default OrderForm;
