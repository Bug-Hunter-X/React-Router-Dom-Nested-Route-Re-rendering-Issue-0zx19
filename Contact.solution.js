```javascript
import { useLocation } from 'react-router-dom';

function Contact() {
  const location = useLocation();

  // Use location.pathname to detect changes in the nested route
  // This will trigger re-rendering of Contact component when nested route changes
  console.log(location.pathname);
  return (
    <div>
      <h1>Contact</h1>
      <Outlet />
    </div>
  );
}
```