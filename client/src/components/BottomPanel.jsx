import React from 'react';

export default function BottomPanel() {
  return (
    <div id='Panel'>
      <input type='radio' name='filter' id='date-up' />
      <label htmlFor='date-up'>Date Up</label>
      <input type='radio' name='filter' id='date-down' />
      <label htmlFor='date-down'>Date Down</label>
      <input type='radio' name='filter' id='done' />
      <label htmlFor='done'>Done</label>
      <input type='radio' name='filter' id='undone' />
      <label htmlFor='undone'>Undone</label>
      <input type='radio' name='filter' id='all' defaultChecked />
      <label htmlFor='all'>All</label>
    </div>
  );
}
