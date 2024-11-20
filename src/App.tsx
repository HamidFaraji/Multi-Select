import { MainContext, MultiSelect } from '@/components';
import './App.css';
import { useContext } from 'react';
import classNames from 'classnames';

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
  const { mode, toggleMode } = useContext(MainContext);

  return (
    <div className="app">
      <h1 className="text-information p-4 text-xl">Multi Select Box Component Demo</h1>
      <p className="p-4 text-label-primary">
        <p>Developed by: Hamid Faraji for Sabaidea Design System Engineer Code Challenge.</p>
        <p>Full documentation is available in <code className="text-label-primary p-3 bg-slate-300">README.md</code> file</p>
      </p>
      <div className="p-4 flex space-x-4 mb-6 text-sm font-medium">
        <div className="flex-auto flex space-x-4">
          <button
            className={classNames('h-10 px-6 font-semibold rounded-md border text-label-primary', {
              'bg-information': mode === 'light',
              'border-slate-200': mode !== 'light',
            })}
            onClick={() => toggleMode('light')}
          >
            Light
          </button>
          <button
            className={classNames('h-10 px-6 font-semibold rounded-md border text-label-primary', {
              'bg-information': mode === 'dark',
              'border-slate-200': mode !== 'dark',
            })}
            onClick={() => toggleMode('dark')}
          >
            Dark
          </button>
        </div>
      </div>

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