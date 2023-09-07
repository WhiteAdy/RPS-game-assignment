import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MainLayout } from 'components/layouts';
import { GameArea, ScoreArea } from 'components/organisms';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MainLayout>
            <GameArea />
            <ScoreArea />
        </MainLayout>
    </React.StrictMode>
);
