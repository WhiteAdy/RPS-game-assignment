import { Button } from 'components/atoms';
import { useGameAreaContext } from 'hooks';

export default function PreGameStage() {
    const { dispatch } = useGameAreaContext();

    const onClickBeginBtn = () => dispatch({ type: 'change-stage', payload: 'picking' });

    return (
        <div className="PreGameStage">
            <span>Ready to start playing?</span>
            <Button onClick={onClickBeginBtn}>Begin round!</Button>
        </div>
    );
}
