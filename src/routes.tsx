import { Routes, Route, Navigate } from 'react-router';
import LoginPage from './pages/auth/LoginPage/KakaoLoginPage';
import LoginAccessPage from './pages/auth/LoginPage/KakaoLoginAccessPage';
import SetNamePage from './pages/setup/setProfile/SetNamePage';
import SetJobPage from './pages/setup/setProfile/SetJobPage';
import CreateGoalPage from './pages/setup/setTravelGoal/CreateGoalPage';
import SetGoalTypePage from './pages/setup/setTravelGoal/SetGoalTypePage';
import SetMileStonePage from './pages/setup/setTravelGoal/SetMileStonePage';

import MainLayout from './components/MainLayout';
import StyleGuide from './pages/style-guide/StyleGuide';

const Router = () => {
    return (
        <Routes>
            {/* 온보딩, 로그인, 셋업 페이지 */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/oauth/callback/kakao" element={<LoginAccessPage />} />
            <Route path="/setName" element={<SetNamePage />} />
            <Route path="/setJob" element={<SetJobPage />} />
            <Route path="/createGoal" element={<CreateGoalPage />} />
            <Route path="/setGoalType" element={<SetGoalTypePage />} />
            <Route path="/setMileStone" element={<SetMileStonePage />} />

            {/* 스타일 가이드 페이지 */}
            <Route path="/style-guide" element={<StyleGuide />} />
            {/* 메인 서비스 : 푸터 있는 페이지들 */}
            <Route path="/" element={<MainLayout />} />
            {/* 404 처리 : 메인 페이지 리다이렉트 (임시) */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default Router;
