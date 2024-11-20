import { MultiSelect } from '@/components';
import './App.css';

const options = [
  {
    value: 'Apple',
    label: 'Apple',
  },
  {
    value: 'Banana',
    label: 'Banana',
  },
  {
    value: 'Cherry',
    label: 'Cherry',
  },
  {
    value: 'Date',
    label: 'Date',
  },
  {
    value: 'Fig',
    label: 'Fig',
  },
  {
    value: 'Grape',
    label: 'Grape',
  },
];

function App() {
  return (
    <div className="app">
      <h1 className="text-information p-4 text-xl">Multi Select Box Component Demo</h1>
      <p className="p-4">
        <p>Developed by: Hamid Faraji for Sabaidea Design System Engineer Code Challenge.</p>
        <p>Full documentation is available in <code className="p-3 bg-slate-300">README.md</code> file</p>
      </p>

      <h2 className="text-information p-4 text-md">With allowAddItem, allowReset and default value</h2>
      <MultiSelect
        allowAddItem
        allowReset
        placeholder="Search Items..."
        options={options}
        defaultValue={options.slice(2, 4)}
        onChange={(values) => console.log(values)}
      />
    </div>
  );
}

export default App;