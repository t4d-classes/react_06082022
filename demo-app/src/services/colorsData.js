

export const allColors = async () => {

  const res = await fetch('http://localhost:3060/colors');
  const colors = await res.json();

  return colors;
};

export const appendColor = async (newColor) => {

  const res = await fetch('http://localhost:3060/colors', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newColor),
  });

  const color = await res.json();

  return color;
};

export const replaceColor = async color => {

  await fetch(`http://localhost:3060/colors/${encodeURIComponent(color.id)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(color),
  });

};

export const removeColor = async colorId => {

  await fetch(`http://localhost:3060/colors/${encodeURIComponent(colorId)}`, {
    method: 'DELETE',
  });

};

