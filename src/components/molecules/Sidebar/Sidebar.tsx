import clsx from 'clsx';
import type { Sidebar } from './Sidebar.types';
import { Button, Title } from 'components/atoms';

export default function Sidebar({ className }: Sidebar) {
    return (
        <div className={clsx(['Sidebar', { [className!]: className }])}>
            <Title text="Player" className="Sidebar_Title" />
            <Button fullWidth variant="filled">
                Change player name
            </Button>
            <Button fullWidth variant="filled">
                Reset player score
            </Button>
            <Title text="Weapons" className="Sidebar_Title" />
            <Button fullWidth variant="filled">
                Add custom weapon
            </Button>
            <Button fullWidth variant="filled">
                Remove custom weapon
            </Button>
            <Title text="Game" className="Sidebar_Title" />
            <Button fullWidth variant="filled">
                Reset the entire game
            </Button>
        </div>
    );
}
