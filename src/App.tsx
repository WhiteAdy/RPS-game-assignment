import { MainLayout } from 'components/layouts';
import { GameArea, ScoreArea } from 'components/organisms';
import { GameContextProvider } from 'contexts';

export default function App() {
    return (
        <GameContextProvider>
            <MainLayout>
                <GameArea />
                <ScoreArea />
            </MainLayout>
        </GameContextProvider>
    );
}
