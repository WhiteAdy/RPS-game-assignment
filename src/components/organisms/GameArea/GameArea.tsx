import { useState } from 'react';
import { CardPicker } from 'components/molecules';
import { Title } from 'components/atoms';

export default function GameArea() {
    const [selectedWeapon, setSelectedWeapon] = useState<string | undefined>();

    return (
        <div className="GameArea">
            <Title className="GameArea_Title" text="Rock Paper Scissors game" centered />
            <CardPicker
                className="GameArea_CardPicker"
                {...{ selectedWeapon, setSelectedWeapon }}
            />
        </div>
    );
}
