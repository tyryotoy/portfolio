import { Header } from './Header';

export const Layout: React.FC = ({ children }) => (
    <>
        <Header />
        <main>{children}</main>
    </>
);