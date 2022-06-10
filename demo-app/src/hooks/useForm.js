import { useState, useCallback } from 'react';

export const useForm = (initialForm) => {

  const [ form, setForm ] = useState(initialForm);

  const change = useCallback((evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.type === 'number'
        ? evt.target.valueAsNumber : evt.target.value,
    });
  }, [form]);

  const resetForm = useCallback(() => setForm(initialForm), [initialForm]);

  return [ form, change, resetForm ];

};
