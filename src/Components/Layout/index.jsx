import { Outlet } from 'react-router-dom';
import NavigationMenu from '../NavigationMenu';
import Footer from '../Footer';

export default function Layou()
{
    return (
        <div>
            <header>
                <NavigationMenu />
            </header>
            <main>
                <Outlet />
            </main>

            <Footer />

        </div>
    );
}