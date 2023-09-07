import type { MainLayout } from './MainLayout.types';

export default function MainLayout({ children }: MainLayout) {
    return <div className="MainLayout">{children}</div>;
}
