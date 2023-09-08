import { Button } from 'components/atoms';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function GameArea({ openModal }: any) {
    return (
        <div className="GameArea">
            GameArea<Button onClick={openModal}>Open modal</Button>
        </div>
    );
}
