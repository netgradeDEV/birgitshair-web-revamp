import { Studio } from 'sanity';
import config from '../../sanity.config';

const Admin = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Studio config={config} />
    </div>
  );
};

export default Admin;
