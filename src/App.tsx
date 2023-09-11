import { MainLayout } from 'components/layouts';
import { GameArea, ScoreArea } from 'components/organisms';
import { GameAreaContextProvider, GameContextProvider } from 'contexts';

export default function App() {
    return (
        <GameContextProvider>
            <MainLayout>
                <GameAreaContextProvider>
                    <GameArea />
                </GameAreaContextProvider>
                <ScoreArea />
            </MainLayout>
        </GameContextProvider>
    );
}
