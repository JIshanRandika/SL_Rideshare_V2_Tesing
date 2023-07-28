import * as React from 'react';
import TabNavigation from './src/navigations/tabNavigation';
import InitialStackNavigation from "./src/navigations/initialStackNavigation";
import DrawerNavigation from "./src/navigations/drawerNavigation";

export default function App() {
    const [isNew, setIsNew] = React.useState(true);
    const [isRegistered, setIsRegistered] = React.useState(true);
    return (

        <>
            {true &&
            <DrawerNavigation/>
            }
        </>



    );
}
