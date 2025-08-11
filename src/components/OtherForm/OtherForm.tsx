import { useId } from 'react';

const OtherForm = () => {
  const id = useId();

  const handleSubmit = (formData: FormData) => {
    const values = Object.fromEntries(formData);
    console.log(values);
  };

  return (
    <form action={handleSubmit}>
      <fieldset>
        <legend>Client:</legend>
        <label htmlFor={`${id}-username`}>Name</label>
        <input type="text" name="username" id={`${id}-username`} />
      </fieldset>
    </form>
  );
};

export default OtherForm;
