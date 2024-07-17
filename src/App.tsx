import { useState } from 'react';

import CustomDrawer from '@/components/CustomDrawer/CustomDrawer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <h1>Table inside drawer</h1>

      <button onClick={toggleDrawer}>Show</button>
      <CustomDrawer
        isOpen={isOpen}
        onClose={toggleDrawer}
      />
    </>
  );
}

export default App;
