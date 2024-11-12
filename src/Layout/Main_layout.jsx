import { Outlet } from 'react-router-dom';

const Main_layout = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <Outlet></Outlet>
            <h2>Footer</h2>
        </div>
    );
};

export default Main_layout;