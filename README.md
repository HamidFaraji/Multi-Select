# MultiSelect Component:

The MultiSelect component is a customizable, reusable, and interactive multi-select dropdown with options to add custom items and reset selections.

Features

- Select multiple options from a predefined list.
- Optionally add custom items if not found in the options list.
- Reset selections with a single click.
- Filter options dynamically as the user types.
- Handles keyboard interactions. (Enter for adding new item and Backsapce for delete last item).
- Lightmode and Darkmode.

## Demo:

To see demo of the component run following commands in your terminal and root of the project
```bash
yarn install
yarn dev
```

## Props:

| Prop Name        | Type                           | Default            | Required | Description                                                                                                                                  |
| ---------------- | ------------------------------ | ------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `allowReset`   | `boolean`                    | `false`          | No       | Enables a reset button to clear selected items.                                                                                              |
| `allowAddItem` | `boolean`                    | `false`          | No       | Allows users to add custom items not present in the predefined options. If this prop is set to false component show an empty state component |
| `placeholder`  | `string`                     | `''`             | No       | Placeholder text displayed in the input field.                                                                                               |
| `defaultValue` | `Option[]`                   | `[]`             | No       | The default selected items when the component initializes.                                                                                   |
| `options`      | `Option[]`                   | **Required** | Yes      | A list of options available for selection. Each option has `value` and `label`.                                                          |
| `onChange`     | `(values: Option[]) => void` | `undefined`      | No       | Callback function triggered when the selected items change.                                                                                  |

## Option Object:

The Option interface defines the shape of each option object:

```typescript
interface Option {
  value: string; // Unique identifier for the option
  label: string; // Display text for the option
}
```

## Usage:

```tsx
import React from 'react';
import { MultiSelect } from './MultiSelect';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

const App = () => {
  const handleChange = (selected) => {
    console.log('Selected items:', selected);
  };

  return (
    <MultiSelect
      allowReset={true}
      allowAddItem={true}
      placeholder="Select or add items..."
      defaultValue={[{ value: '2', label: 'Option 2' }]}
      options={options}
      onChange={handleChange}
    />
  );
};

export default App;
```

## CSS (Styling)

The component uses BEM for styling. You can use following classNames to make component customized.

```css
.multi-select
.multi-select--focused
.multi-select__box
.multi-select__input
.multi-select__actions
.multi-select__empty-state
```
